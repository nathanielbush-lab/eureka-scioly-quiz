"""Download candidate Picture ID photos for review.

Runs in GitHub Actions (.github/workflows/fetch-photos.yml). For each specimen in
specimens.json it collects openly licensed photos, with credits, from
iNaturalist (research-grade observations, North Carolina first) or Wikimedia
Commons, shrinks them, and builds a numbered contact sheet per specimen.
Output goes to candidates/ and is pushed to the photo-candidates branch, where
a person picks the photos that clearly show the right specimen.

request.json controls a run: {"only": [ids], "per": 8, "skip": {id: n}}.
"""
import html
import io
import json
import os
import re
import sys
import time

import requests
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.getcwd(), "candidates")
UA = "EurekaSciOlyQuiz/1.0 (educational quiz for elementary Science Olympiad students; github.com/nathanielbush-lab/eureka-scioly-quiz)"
S = requests.Session()
S.headers["User-Agent"] = UA

INAT_LICENSES = "cc0,cc-by,cc-by-sa,cc-by-nc"
NC_PLACE_ID = 30  # North Carolina on iNaturalist
MAX_SIDE = 800


def get_json(url, params):
    for attempt in range(4):
        try:
            r = S.get(url, params=params, timeout=40)
            if r.status_code == 429:
                time.sleep(10 * (attempt + 1))
                continue
            r.raise_for_status()
            return r.json()
        except requests.RequestException as e:
            print("  retry", url, e)
            time.sleep(3 * (attempt + 1))
    return {}


def inat_candidates(spec, want, skip):
    found, seen_users = [], set()
    places = [NC_PLACE_ID, None]
    for name in spec["inat"]:
        for place in places:
            for page in (1, 2):
                params = {
                    "taxon_name": name, "quality_grade": "research", "photos": "true",
                    "photo_license": INAT_LICENSES, "per_page": 50, "page": page,
                    "order_by": "votes", "order": "desc",
                }
                if place:
                    params["place_id"] = place
                if spec.get("adult"):
                    params.update({"term_id": 1, "term_value_id": 2})
                data = get_json("https://api.inaturalist.org/v1/observations", params)
                time.sleep(1.1)
                for obs in data.get("results", []):
                    user = (obs.get("user") or {}).get("login")
                    if user in seen_users:
                        continue
                    photo = next((p for p in obs.get("photos", []) if p.get("license_code")), None)
                    if not photo:
                        continue
                    seen_users.add(user)
                    found.append({
                        "url": photo["url"].replace("/square.", "/large."),
                        "credit": inat_credit(photo, obs),
                        "license": photo["license_code"].upper(),
                        "source": "https://www.inaturalist.org/observations/%s" % obs["id"],
                        "taxon": (obs.get("taxon") or {}).get("name"),
                        "place": (obs.get("place_guess") or "")[:60],
                    })
                if len(found) >= want + skip or len(data.get("results", [])) < 50:
                    break
            if len(found) >= want + skip:
                break
        if found:
            break
    return found[skip:skip + want]


def inat_credit(photo, obs):
    user = obs.get("user") or {}
    who = user.get("name") or user.get("login") or "iNaturalist user"
    lic = photo.get("license_code", "").upper().replace("CC-", "CC ").replace("CC0", "CC0")
    return "Photo: %s, %s, via iNaturalist" % (who, lic)


def strip_html(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def commons_ok_license(short):
    s = (short or "").lower()
    return s.startswith("cc by") or s.startswith("cc0") or "public domain" in s or s.startswith("pd")


def commons_candidates(spec, want, skip):
    found, titles = [], set()
    base = "https://commons.wikimedia.org/w/api.php"
    common = {
        "action": "query", "format": "json", "prop": "imageinfo",
        "iiprop": "url|extmetadata|size|mime", "iiurlwidth": MAX_SIDE,
    }
    queries = []
    for term in spec["commons"].get("search", []):
        queries.append(dict(common, generator="search", gsrsearch=term + " filetype:bitmap", gsrnamespace=6, gsrlimit=25))
    for cat in spec["commons"].get("categories", []):
        queries.append(dict(common, generator="categorymembers", gcmtitle="Category:" + cat, gcmtype="file", gcmlimit=40))
    for params in queries:
        data = get_json(base, params)
        time.sleep(0.5)
        pages = sorted((data.get("query") or {}).get("pages", {}).values(), key=lambda p: p.get("index", 0))
        for page in pages:
            title = page.get("title", "")
            info = (page.get("imageinfo") or [{}])[0]
            if title in titles or info.get("mime") not in ("image/jpeg", "image/png"):
                continue
            if min(info.get("width", 0), info.get("height", 0)) < 400:
                continue
            meta = info.get("extmetadata") or {}
            lic = (meta.get("LicenseShortName") or {}).get("value", "")
            if not commons_ok_license(lic):
                continue
            titles.add(title)
            artist = strip_html((meta.get("Artist") or {}).get("value", "")) or "Unknown author"
            found.append({
                "url": info.get("thumburl") or info.get("url"),
                "credit": "Photo: %s, %s, via Wikimedia Commons" % (artist[:80], lic),
                "license": lic,
                "source": info.get("descriptionurl"),
                "title": title,
            })
    return found[skip:skip + want]


def save_image(url, path):
    r = S.get(url, timeout=60)
    r.raise_for_status()
    img = Image.open(io.BytesIO(r.content)).convert("RGB")
    img.thumbnail((MAX_SIDE, MAX_SIDE))
    img.save(path, "JPEG", quality=80, optimize=True, progressive=True)
    return img


def contact_sheet(images, path, title):
    cols, cell, pad, head = 4, 300, 8, 34
    rows = (len(images) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (cell + pad) + pad, head + rows * (cell + pad) + pad), "white")
    d = ImageDraw.Draw(sheet)
    d.text((pad, 10), title, fill="black")
    for i, img in enumerate(images):
        t = img.copy()
        t.thumbnail((cell, cell))
        x = pad + (i % cols) * (cell + pad)
        y = head + (i // cols) * (cell + pad)
        sheet.paste(t, (x, y))
        d.rectangle([x, y, x + 34, y + 26], fill="yellow")
        d.text((x + 8, y + 7), str(i + 1), fill="black")
    sheet.save(path, "JPEG", quality=78)


def main():
    specs = json.load(open(os.path.join(HERE, "specimens.json")))["specimens"]
    req = json.load(open(os.path.join(HERE, "request.json")))
    only, per, skips = set(req.get("only") or []), int(req.get("per", 8)), req.get("skip") or {}
    os.makedirs(os.path.join(OUT, "_sheets"), exist_ok=True)
    manifest = {}
    for spec in specs:
        if only and spec["id"] not in only:
            continue
        skip = int(skips.get(spec["id"], 0))
        print("==", spec["id"])
        cands = inat_candidates(spec, per, skip) if "inat" in spec else commons_candidates(spec, per, skip)
        folder = os.path.join(OUT, spec["id"])
        os.makedirs(folder, exist_ok=True)
        imgs, kept = [], []
        for c in cands:
            n = len(kept) + 1
            path = os.path.join(folder, "%d.jpg" % n)
            try:
                imgs.append(save_image(c["url"], path))
            except Exception as e:  # skip unreadable images
                print("  skip", c["url"], e)
                continue
            c["file"] = "candidates/%s/%d.jpg" % (spec["id"], n)
            kept.append(c)
        manifest[spec["id"]] = {"name": spec["name"], "event": spec["event"], "group": spec["group"], "candidates": kept}
        if imgs:
            contact_sheet(imgs, os.path.join(OUT, "_sheets", spec["id"] + ".jpg"), "%s (%s)" % (spec["name"], spec["id"]))
        print("  kept", len(kept))
    json.dump(manifest, open(os.path.join(OUT, "manifest.json"), "w"), indent=1)
    empty = [k for k, v in manifest.items() if not v["candidates"]]
    print("done:", len(manifest), "specimens; empty:", empty)


if __name__ == "__main__":
    sys.exit(main())
