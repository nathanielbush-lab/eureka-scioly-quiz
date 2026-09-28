# Eureka! Science Olympiad Pop Quiz

A self-quiz web app for students preparing for the **2027 North Carolina Science Olympiad
Division A** (elementary) tournament. Students pick an event, answer
a 10-question quiz (5 and 15 are options too), get gentle feedback and a short
explanation after every question, and finish with a score, stars, and a review of what
they missed.

It is plain HTML, CSS, and JavaScript with no build step, server, or login. Upload the
folder to any web host and it works.

## Events

One quiz for each 2027 NC Division A event that is scored on knowledge (a test or
stations). Every bank sticks to what that event's rules list.

| Event | Questions | What it covers |
|---|---|---|
| Beam Me Up | 102 | The written test: reflection, refraction, absorption, transmission, scattering, and the 11 eye parts in the rules |
| Buzzworthy | 153 | Arachnida, Chilopoda, Crustacea, Diplopoda, Insecta, and the 17 insect orders in the rules; body parts, life cycles, ecology, economic roles |
| Deep Blue Sea | 103 | The six listed zones, conditions, adaptations, representative animals, daily vertical migration |
| Geology Rocks! | 140 | Only the Official Rocks & Minerals List, properties, uses, classification, the rock cycle |
| Pump It Up | 127 | Heart, four valves, blood pathway, blood, vessels, respiratory parts, the eight listed diseases |
| Roots & Reptiles | 149 | The Official Specimen List, NC state symbols, plant parts, tropisms, gardening, reptiles and amphibians |
| Science Sketchers | 199 | A clue for every word on the official word list, with a drawing tip for each |
| Ship Shape | 101 | The written test: buoyancy, displacement, Archimedes' principle, flotation, density |
| Storm Chasers | 132 | Thunderstorms, tornadoes, hurricanes, blizzards, floods, maps, watches and warnings, safety, effects |
| Zap Lab | 130 | Circuits, conductors and insulators, V/A/Ω/W, series and parallel, schematics, meters, safety |

Build events (Bridge-A-Roni, Egg-O-Naut, Just Plane Awesome), Describe It, and Build It
aren't included. Codebusters has its own section, described below.

## Codebusters

A separate practice area for the Codebusters event, reached from its own tile on the home
screen. It covers all nine code types in the 2027 NC rules: Aristocrat, Atbash, Caesar
(shift of 3 or less), Vigenère (key given), Baconian (24 letters, up to 4 symbols), PigPen,
Tap Code (C/K share a square), Knight's Templar, and Standard Galactic Alphabet.

- **New puzzles every time.** Each puzzle encrypts a message from
  `codebusters/phrases.js`, so students never run out.
- **Easy, Medium, and Hard levels.** Easy gives extra help, such as prefilled letters on
  Aristocrats, the Caesar shift, or the key letters written over a Vigenère. Hard uses
  longer messages, and Aristocrats get no hint.
- **Solve like on paper.** A box under each code symbol. For codes where a symbol always
  means the same letter, typing it once fills it in everywhere. Aristocrats also have a
  letter-count table and flag a letter used for two different code letters.
- **Official scoring.** 2 or fewer mistakes earns full points, then each extra mistake
  costs 50 points. Revealing a letter costs 25.
- **How it works** for each code, with a worked example and the key chart.
- **Resource sheet** matching what event leaders hand out: letter frequencies, Atbash,
  Baconian, and Vigenère tables, and the Galactic "quick brown fox" phrase. It leaves out
  PigPen, Tap Code, and Knight's Templar, just like the real one.
- **Memory drills** (10 flash cards) for the three codes students must memorize.
- **Mock test.** 5 puzzles of different types worth points, with a 25-minute timer and no hints.
- **Print** any puzzle as a worksheet with the answer key on a second page.

The Knight's Templar key follows the chart used at last year's NC tournament.

## What students get

- **Event picker** with a tile for each event, plus a **Surprise Mix** tile that pulls from every event.
- **Multiple choice and type-in questions.** Typed answers ignore capital letters,
  punctuation, and "the/a/an", and they accept small spelling slips. A slip still counts
  as right and comes with a spelling tip, unless the "slip" is actually a different science
  term (like *meter* for *meteor*), which counts as wrong.
- **Instant, kind feedback.** A cheer when they're right. When they're wrong, an
  encouraging message, the right answer, and a one or two sentence explanation.
- **No repeats until the whole bank is used.** Each event has 100+ questions, and the app
  remembers which ones a student has seen. That's at least 10 different quizzes per event before
  anything comes back around.
- **Practice my missed questions.** Missed questions are saved. Getting one right later
  takes it off the list.
- **Picture ID.** Geology Rocks!, Buzzworthy, and Roots & Reptiles include photo questions
  ("Which mineral from the official list is this?"). Every photo was reviewed by eye, is
  openly licensed (Wikimedia Commons or iNaturalist, mostly North Carolina observations), and
  shows its photographer credit. After answering, students see how to recognize the specimen.
- **Topics.** Each question shows its topic, and the results screen lists the topics to
  study next, most-missed first.
- **Hints** on some tricky questions.
- **Read aloud.** Turn it on and the device reads each question and its choices out loud.
- **Keyboard shortcuts.** Press 1–4 or A–D to pick an answer.
- **Best score and progress** on each event tile.

Progress is saved in the browser on that device (localStorage). Nothing is sent anywhere,
and there are no accounts.

## Files

```
index.html              the page
styles.css              the look
app.js                  quiz logic
questions/*.js          one question bank per event
questions/photos.js     Picture ID photos (generated)
codebusters/            Codebusters practice: codebusters.js (ciphers, puzzles, drills,
                        mock test) and phrases.js (the messages puzzles are made from)
images/                 the photos
tools/check-questions.js  checks the question banks and photos for mistakes
tools/photos/           how the photos were found, reviewed, and built
```

### How the photos were chosen

`.github/workflows/fetch-photos.yml` downloads candidate photos for the specimens in
`tools/photos/specimens.json` to the `photo-candidates` branch. A person reviews the
contact sheets there and lists the good ones in `tools/photos/picks.txt`. Then
`python tools/photos/build_photos.py <photo-candidates checkout>` copies the picks into
`images/` and writes `questions/photos.js`. Identification tips are in `tools/photos/tips.json`.
To remove a photo, delete its number from `picks.txt` and rebuild.

Photos someone supplies by hand go in `tools/photos/manual/`, with their credit and
source page listed in `tools/photos/manual.json`; the same build step includes them.

## Adding or editing questions

Each file in `questions/` holds one event. Questions are grouped into topic sections:

```js
sections: [
  { topic: "Rock cycle", questions: [ /* questions */ ] },
  { topic: "Igneous rocks", questions: [ /* questions */ ] }
]
```

Questions look like this:

```js
// Multiple choice: the right answer goes in "a", the others in "wrong".
// Choices are shuffled automatically.
{ q: "Which mineral is the softest on the Mohs scale?",
  a: "Talc", wrong: ["Quartz", "Diamond", "Calcite"],
  why: "Talc is number 1. It's so soft you can scratch it with your fingernail." },

// True / false
{ q: "True or false: Centipedes are insects.", a: "False", wrong: ["True"],
  why: "Centipedes have many body segments..." },

// Type the answer: list every spelling you'll accept, best one first.
{ q: "What do we call melted rock that is still underground?",
  type: "type", a: ["magma"],
  why: "Underground it's magma. On the surface, it's lava." },

// Optional extras on any question
{ q: "...", a: "...", wrong: [...], why: "...",
  hint: "A clue shown when the student taps 'Need a hint?'",
  image: "images/obsidian.jpg", imageAlt: "A shiny black rock" }
```

After editing, run the checker if you have Node installed:

```
node tools/check-questions.js
```

It flags duplicate questions, a right answer that also appears in the wrong list,
missing explanations, and any event with fewer than 100 questions.

### Adding a new event

1. Copy one of the files in `questions/`, rename it, and change `id`, `name`, `icon`,
   `color`, `blurb`, and the questions.
2. Add a matching `<script src="questions/your-file.js"></script>` line in `index.html`
   next to the others.

## Putting it on your website

- **Any web host / school site that accepts uploaded files:** upload the whole folder and
  link to `index.html`.
- **GitHub Pages (live):** the quiz is published at
  https://nathanielbush-lab.github.io/eureka-scioly-quiz/ and updates a minute or two after
  each push to `main`. (`.nojekyll` tells Pages to serve the files as-is.)
- **Google Sites:** on the Pop Quiz page, Insert → Embed → By URL → paste the address →
  Whole page, then drag the box to about 900 px tall and full width.

## Accuracy

Questions were written for about 9-year-old students and fact-checked, but please skim the
events you coach and adjust anything that doesn't match how you teach it or this
season's rules. Tournament rules can change during the season, so check for updates from NCSO.

Note: the 2027 manual's Roots & Reptiles specimen list gives Black Gum the scientific name
*Eucalyptus ovata*. Black gum's scientific name is *Nyssa sylvatica*. The quiz uses only
common names, as the rules say.
