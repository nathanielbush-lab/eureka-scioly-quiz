# Pump It Up interactive diagrams

An account-free companion to Eureka! for the 2027 NC Science Olympiad Division A event.

Open `index.html` directly, or serve this folder with any static web host. All app scripts, styles, and diagrams are local; no installation or build is required. External links lead to the quiz collection and source references. Results last for the current browser session only.

## Included

- Four editable SVG views: whole circulation, heart flow, airways/lungs, and alveolar exchange/blood components.
- Structure explanations, optional labels, enlarged diagram view, and keyboard selection (Tab, Enter, Space).
- Blood, oxygen, carbon dioxide, and breathing journeys with manual steps, playback, and prediction pauses.
- Sixteen visual questions. Short sessions include two questions from each view. First attempts determine scores; practice permits hints and retries. Station mode holds feedback until the end.
- Partner prompts and two four-page printable PDF sets, labeled and blank.
- No sign-in, student records, tracking scripts, or network requests needed for the app itself.

## Scope and accuracy

The first release covers anatomy, functions, pathways, blood components, and system interactions from the supplied 2027 manual, Pump It Up section 9. It does not cover the eight listed diseases and is not a complete event study guide. The sixteen questions sample the content; they do not establish full mastery.

The heart is a flow schematic, not an anatomical cutaway. Vessel positions and valve sizes are simplified. Blue means oxygen-poor, not blue blood. The lung illustration combines a side view of the head with a front view of the lungs. Gases cross the alveolar/capillary boundary; blood cells do not enter the air sac.

Sources checked November 24-25, 2026:

- [NCSO event](https://ncscienceolympiad.ncsu.edu/pump-it-up/), [manual and FAQ links](https://ncscienceolympiad.ncsu.edu/resources/elementary/). The supplied manual was read; live FAQ body could not be retrieved.
- [NIH: Heart blood flow and valves](https://www.nhlbi.nih.gov/health/heart/blood-flow)
- [NIH: Respiratory system](https://www.nhlbi.nih.gov/health/lungs/respiratory-system)
- [NIH: What breathing does](https://www.nhlbi.nih.gov/health/lungs/what-breathing-does)
- [NCI: Blood](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/blood)

## Google Sites

Published app address: https://nathanielbush-lab.github.io/eureka-scioly-quiz/pump-it-up/

In the Google Sites editor, select the Pump It Up page, then **Insert > Embed > By URL**, and paste the published app address. Make the embed wide and approximately 1,050 pixels tall initially; preview it at desktop and phone sizes. A full-page embed is another option. Add a separate button labeled **Open Pump It Up diagrams** with the same URL, so students can use the app outside the embed.

Use the published Pages URL, not a `github.com/.../blob/...` source-code URL. Check on a school-managed Chromebook because school network filtering cannot be verified from this development environment.

## Editing and verification

`content.js` contains structure explanations, routes, and questions. `assets/*.svg` are the editable sources. `diagrams.js` bundles them as strings so opening the app from disk does not require fetch permissions. After editing an SVG, run `python tools/bundle_diagrams.py`; re-export its matching PNG and regenerate worksheets if the visible artwork changed. `tools/make_worksheets.py` uses Python ReportLab and ImageMagick.

Run `node tests/verify.mjs` and `node --check app.js`. The verifier checks diagram/source agreement, selectable route/question targets, valve sequence, unique SVG IDs, 800 x 640 preview dimensions, and SVG/PNG byte budgets.

Browser checks cover view switching, SVG keyboard selection, hidden labels, prediction answers, journey changes, wrong answers, hints, reveal, first-attempt scores, missed-question retries, and station feedback. Responsive checks use a 390-pixel viewport; this is not a physical-device or school-network test. PDFs were rendered and visually reviewed on all eight pages.

The existing quiz question banks and scoring are independent of this app.
