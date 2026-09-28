"""Download candidate Picture ID photos for review.

Runs in GitHub Actions (.github/workflows/fetch-photos.yml). For each specimen in
specimens.json it collects openly licensed photos, with credits, from
iNaturalist (research-grade observations, North Carolina first) or Wikimedia
Commons, shrinks them, and builds a numbered contact sheet per specimen.
Output goes to candidates/ and is pushed to the photo-candidates branch, where
a person picks the photos that clearly show the right specimen.

request.json controls a run: {"only": [ids], "per": 8, "skip": {id: n}}.
A Commons spec may list exact "files" (names without "File:") to fetch first.
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

LOG = []


START = time.time()
TIME_BUDGET = 35 * 60  # stop early and save, well inside the job's time limit


def out_of_time():
    return time.time() - START > TIME_BUDGET


def log(*parts):
    line = " ".join(str(p) for p in parts)
    print(line, flush=True)
    LOG.append(line)


INAT_LICENSES = "cc0,cc-by,cc-by-sa,cc-by-nc"
NC_PLACE_ID = 30  # North Carolina on iNaturalist
MAX_SIDE = 800


def get_json(url, params):
    for attempt in range(3):
        try:
            r = S.get(url, params=params, timeout=60)
            if r.status_code in (429, 500, 502, 503, 504):
                log("  status", r.status_code, "waiting to retry")
                time.sleep(10 * (attempt + 1))
                continue
            r.raise_for_status()
            return r.json()
        except requests.RequestException as e:
            log("  retry", url, e)
            time.sleep(5 * (attempt + 1))
    log("  gave up", url, params)
    return {}


def inat_taxon_id(name):
    """Look up the exact taxon, so 'Diptera' means the fly order and not a
    species that happens to be named 'diptera'."""
    data = get_json("https://api.inaturalist.org/v1/taxa", {"q": name, "per_page": 30, "is_active": "true"})
    time.sleep(1.5)
    for t in data.get("results", []):
        if t.get("name", "").lower() == name.lower():
            log("  taxon", name, "->", t["id"], t.get("rank"))
            return t["id"]
    log("  no exact taxon for", name)
    return None


def inat_candidates(spec, want, skip):
    found, seen_users = [], set()
    places = [NC_PLACE_ID, None]
    for name in spec["inat"]:
        taxon_id = inat_taxon_id(name)
        if not taxon_id:
            continue
        for place in places:
            for page, order_by in ((1, "votes"), (2, "votes"), (1, "observed_on")):
                params = {
                    "taxon_id": taxon_id, "quality_grade": "research", "photos": "true",
                    "photo_license": INAT_LICENSES, "per_page": 50, "page": page,
                    "order_by": order_by, "order": "desc",
                }
                if place:
                    params["place_id"] = place
                if spec.get("adult"):
                    params.update({"term_id": 1, "term_value_id": 2})
                data = get_json("https://api.inaturalist.org/v1/observations", params)
                log("  inat", name, "place", place, "page", page, order_by, "->", len(data.get("results", [])), "of", data.get("total_results"))
                time.sleep(1.5)
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
                if len(found) >= want + skip:
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
        "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 960,
    }
    queries = []
    files = spec["commons"].get("files", [])
    if files:  # exact files a person suggested, checked first
        queries.append(dict(common, titles="|".join("File:" + f for f in files)))
    for term in spec["commons"].get("search", []):
        queries.append(dict(common, generator="search", gsrsearch=term + " filetype:bitmap", gsrnamespace=6, gsrlimit=25))
    for cat in spec["commons"].get("categories", []):
        queries.append(dict(common, generator="categorymembers", gcmtitle="Category:" + cat, gcmtype="file", gcmlimit=40))
    for params in queries:
        data = get_json(base, params)
        log("  commons", params.get("gsrsearch") or params.get("gcmtitle"), "->", len((data.get("query") or {}).get("pages", {})))
        time.sleep(1)
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
    for attempt in range(3):
        r = S.get(url, timeout=60)
        if r.status_code in (429, 503):
            time.sleep(8 * (attempt + 1))
            continue
        break
    r.raise_for_status()
    time.sleep(6 if "wikimedia" in url else 0.5)
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
    mpath = os.path.join(OUT, "manifest.json")
    manifest = json.load(open(mpath)) if os.path.exists(mpath) else {}
    for spec in specs:
        if only and spec["id"] not in only:
            continue
        if out_of_time():
            log("out of time; stopping before", spec["id"])
            break
        skip = int(skips.get(spec["id"], 0))
        log("==", spec["id"])
        cands = inat_candidates(spec, per, skip) if "inat" in spec else commons_candidates(spec, per, skip)
        folder = os.path.join(OUT, spec["id"])
        if os.path.isdir(folder):
            for old in os.listdir(folder):
                os.remove(os.path.join(folder, old))
        os.makedirs(folder, exist_ok=True)
        imgs, kept = [], []
        for c in cands:
            n = len(kept) + 1
            path = os.path.join(folder, "%d.jpg" % n)
            try:
                imgs.append(save_image(c["url"], path))
            except Exception as e:  # skip unreadable images
                log("  skip", c["url"], e)
                continue
            c["file"] = "candidates/%s/%d.jpg" % (spec["id"], n)
            kept.append(c)
        manifest[spec["id"]] = {"name": spec["name"], "event": spec["event"], "group": spec["group"], "candidates": kept}
        if imgs:
            contact_sheet(imgs, os.path.join(OUT, "_sheets", spec["id"] + ".jpg"), "%s (%s)" % (spec["name"], spec["id"]))
        log("  kept", len(kept))
        json.dump(manifest, open(mpath, "w"), indent=1)
    json.dump(manifest, open(mpath, "w"), indent=1)
    empty = [k for k, v in manifest.items() if not v["candidates"]]
    log("done:", len(manifest), "specimens; empty:", empty)
    open(os.path.join(OUT, "fetch_log.txt"), "w").write("\n".join(LOG) + "\n")


if __name__ == "__main__":
    sys.exit(main())
