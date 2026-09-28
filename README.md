# Eureka! Science Olympiad Pop Quiz

A self-quiz web app for young Science Olympiad students. Students pick an event, answer
a 10-question quiz (5 and 15 are options too), get gentle feedback and a short
explanation after every question, and finish with a score, stars, and a review of what
they missed.

It is plain HTML, CSS, and JavaScript with no build step, server, or login. Upload the
folder to any web host and it works.

## What students get

- **Event picker** with a tile for each event, plus a **Surprise Mix** tile that pulls from every event.
- **Multiple choice and type-in questions.** Typed answers ignore capital letters,
  punctuation, and "the/a/an", and they accept small spelling slips. A slip still counts
  as right and comes with a spelling tip.
- **Instant, kind feedback.** A cheer when they're right. When they're wrong, an
  encouraging message, the right answer, and a one or two sentence explanation.
- **No repeats until the whole bank is used.** Each event has 100+ questions, and the app
  remembers which ones a student has seen. That's at least 10 different quizzes per event before
  anything comes back around.
- **Practice my missed questions.** Missed questions are saved. Getting one right later
  takes it off the list.
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
tools/check-questions.js  checks the question banks for mistakes
```

## Adding or editing questions

Each file in `questions/` holds one event. Questions look like this:

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
- **GitHub Pages (free):** in this repo's Settings → Pages, choose "Deploy from a branch",
  pick `main` and `/ (root)`. The app will be at `https://<your-username>.github.io/eureka-scioly-quiz/`.
  GitHub Pages needs a public repo on a free account.
- **Google Sites, Squarespace, Wix, etc.:** host it somewhere above, then use the site
  builder's "Embed" or "iframe" block to show that address inside your page.

## Accuracy

Questions were written for about 9-year-old students and fact-checked, but please skim the
events you coach and adjust anything that doesn't match how you teach it or this
season's rules.
