// Checks every question bank for common mistakes.
// Run with: node tools/check-questions.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = path.join(__dirname, "..", "questions");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".js")).sort()) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx, { filename: f });
}

let problems = 0;
const warn = (ev, i, msg) => { problems++; console.log(`  ${ev.id} #${i + 1}: ${msg}`); };
const seenText = new Map();

for (const ev of ctx.window.QUIZ_EVENTS) {
  if (ev.sections) {
    ev.questions = [];
    for (const s of ev.sections) {
      if (!s.topic) { problems++; console.log(`  ${ev.id}: a section is missing its topic`); }
      for (const q of s.questions) ev.questions.push(q);
    }
  }
  let mc = 0, typed = 0;
  ev.questions.forEach((q, i) => {
    if (!q.q) warn(ev, i, "missing question text");
    if (!q.why) warn(ev, i, "missing explanation (why)");
    const key = q.q.trim().toLowerCase();
    if (seenText.has(key)) warn(ev, i, `duplicate of ${seenText.get(key)}`);
    seenText.set(key, `${ev.id} #${i + 1}`);
    if (q.type === "type") {
      typed++;
      const a = Array.isArray(q.a) ? q.a : [q.a];
      if (!a.length || a.some((x) => !String(x).trim())) warn(ev, i, "empty accepted answer");
      if (q.wrong) warn(ev, i, "typed question should not have wrong choices");
    } else {
      mc++;
      if (typeof q.a !== "string") warn(ev, i, "multiple-choice answer must be a string");
      if (!Array.isArray(q.wrong) || q.wrong.length < 1) warn(ev, i, "needs wrong choices");
      const all = [q.a, ...(q.wrong || [])].map((s) => String(s).toLowerCase());
      if (new Set(all).size !== all.length) warn(ev, i, "repeated choice");
    }
  });
  const n = ev.questions.length;
  const topics = ev.sections ? `, ${ev.sections.length} topics` : "";
  console.log(`${ev.name}: ${n} questions${topics} (${mc} multiple choice, ${typed} typed) = ${Math.floor(n / 10)} different 10-question quizzes`);
  if (n < 100) { problems++; console.log(`  ${ev.id}: fewer than 100 questions`); }
}
console.log(problems ? `\n${problems} problem(s) found.` : "\nAll question banks look good.");
process.exit(problems ? 1 : 0);
