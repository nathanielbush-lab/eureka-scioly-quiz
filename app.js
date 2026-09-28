/* Science Olympiad Pop Quiz
 * Plain JavaScript, no build step. Question banks live in questions/*.js and
 * register themselves on window.QUIZ_EVENTS before this file runs.
 */
(function () {
  "use strict";

  var EVENTS = (window.QUIZ_EVENTS || []).slice();
  var STORE_KEY = "scioly-popquiz-v1";
  var LENGTHS = [5, 10, 15];
  var MIX_ID = "__mix";

  var CHEERS = [
    "Great job!", "You got it!", "Super scientist!", "Nailed it!",
    "Awesome!", "Way to go!", "Correct!", "Brilliant!", "You're on a roll!",
    "Fantastic thinking!"
  ];
  var ENCOURAGE = [
    "Nice try!", "Not quite, but that's okay!", "Good guess!",
    "Let's learn this one together.", "Good try! Here's the answer.",
    "That's a tricky one!", "Keep going, you've got this!"
  ];

  var app = document.getElementById("app");
  var readAloudBox = document.getElementById("readAloud");

  /* ---------- storage (wrapped: storage can be blocked) ---------- */
  function loadStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var data = raw ? JSON.parse(raw) : null;
      if (data && typeof data === "object") return data;
    } catch (e) { /* ignore */ }
    return { length: 10, readAloud: false, events: {} };
  }
  var store = loadStore();
  if (!store.events) store.events = {};
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }
  function eventStats(id) {
    if (!store.events[id]) store.events[id] = { seen: [], missed: [], best: null, plays: 0 };
    return store.events[id];
  }

  /* ---------- helpers ---------- */
  function hash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  // Normalise a typed answer so small differences don't count against a kid.
  function norm(s) {
    return String(s)
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\b(the|a|an)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function levenshtein(a, b) {
    if (a === b) return 0;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }
  // Returns "exact", "close" (right idea, spelling slip) or false.
  function checkTyped(input, answers, questionText) {
    var first = matchTyped(norm(input), answers);
    if (first === "exact") return first;
    // Kids often type the whole phrase ("Kuiper Belt" for "The ___ Belt"),
    // so also try again without words that already appear in the question.
    var qWords = {};
    norm(questionText || "").split(" ").forEach(function (w) { qWords[w] = true; });
    var trimmed = norm(input).split(" ").filter(function (w) { return !qWords[w]; }).join(" ");
    var second = trimmed ? matchTyped(trimmed, answers) : false;
    if (second === "exact") return second;
    var close = first || second;
    // A "spelling slip" that is really a different science term (meter for
    // meteor, reflection for refraction) is a wrong answer, not a typo.
    if (close && (isKnownTerm(norm(input)) || isKnownTerm(trimmed))) return false;
    return close;
  }
  var KNOWN_TERMS = {};
  function termKey(n) { return n.replace(/ /g, "").replace(/s$/, ""); }
  function addKnownTerm(t) { var k = termKey(norm(t)); if (k) KNOWN_TERMS[k] = true; }
  function isKnownTerm(n) { return !!n && KNOWN_TERMS[termKey(n)] === true; }
  function matchTyped(n, answers) {
    if (!n) return false;
    var best = false;
    for (var i = 0; i < answers.length; i++) {
      var a = norm(answers[i]);
      if (n === a || n.replace(/ /g, "") === a.replace(/ /g, "")) return "exact";
      // allow plural/singular slips
      if (n.replace(/s$/, "") === a.replace(/s$/, "")) return "exact";
      var allowed = a.length >= 9 ? 2 : a.length >= 5 ? 1 : 0;
      if (allowed && levenshtein(n, a) <= allowed) best = "close";
    }
    return best;
  }

  /* ---------- question preparation ---------- */
  // Banks list questions grouped into topic sections; flatten them and
  // remember each question's topic so results can say what to review.
  EVENTS.forEach(function (ev) {
    if (ev.sections) {
      ev.questions = [];
      ev.sections.forEach(function (s) {
        s.questions.forEach(function (q) {
          if (!q.topic) q.topic = s.topic;
          ev.questions.push(q);
        });
      });
    }
    ev.questions.forEach(function (q) {
      q.id = hash(q.q);
      q.eventId = ev.id;
      q.kind = q.type === "type" ? "type" : "choice";
      if (q.kind === "type" && !Array.isArray(q.a)) q.a = [q.a];
      [].concat(q.a, q.wrong || []).forEach(addKnownTerm);
    });
  });
  function eventById(id) {
    for (var i = 0; i < EVENTS.length; i++) if (EVENTS[i].id === id) return EVENTS[i];
    return null;
  }
  function correctText(q) { return q.kind === "type" ? q.a[0] : q.a; }

  // Draw questions this student hasn't seen yet, so every quiz feels new.
  // Once the whole bank has been seen, the rotation starts over.
  function drawFromEvent(ev, n) {
    var stats = eventStats(ev.id);
    var seen = {};
    stats.seen.forEach(function (id) { seen[id] = true; });
    var fresh = shuffle(ev.questions.filter(function (q) { return !seen[q.id]; }));
    if (fresh.length >= n) return fresh.slice(0, n);
    stats.seen = [];
    var chosen = fresh.slice();
    var ids = {};
    chosen.forEach(function (q) { ids[q.id] = true; });
    var rest = shuffle(ev.questions.filter(function (q) { return !ids[q.id]; }));
    return chosen.concat(rest.slice(0, n - chosen.length));
  }
  // Spread the quiz evenly across events, still preferring unseen questions.
  function drawMix(n) {
    var order = shuffle(EVENTS);
    var out = [];
    order.forEach(function (ev, i) {
      var share = Math.floor(n / order.length) + (i < n % order.length ? 1 : 0);
      if (share) out = out.concat(drawFromEvent(ev, share));
    });
    return shuffle(out);
  }
  function drawMissed(eventId, n) {
    var pool = [];
    var evs = eventId === MIX_ID ? EVENTS : [eventById(eventId)];
    evs.forEach(function (ev) {
      var missed = {};
      eventStats(ev.id).missed.forEach(function (id) { missed[id] = true; });
      pool = pool.concat(ev.questions.filter(function (q) { return missed[q.id]; }));
    });
    return shuffle(pool).slice(0, n);
  }
  function missedCount(eventId) {
    if (eventId === MIX_ID) {
      return EVENTS.reduce(function (s, ev) { return s + eventStats(ev.id).missed.length; }, 0);
    }
    return eventStats(eventId).missed.length;
  }

  /* ---------- read aloud ---------- */
  var canSpeak = "speechSynthesis" in window;
  if (!canSpeak) readAloudBox.closest("label").hidden = true;
  readAloudBox.checked = !!store.readAloud && canSpeak;
  readAloudBox.addEventListener("change", function () {
    store.readAloud = readAloudBox.checked;
    saveStore();
    if (!readAloudBox.checked) stopSpeaking();
    else if (state && state.screen === "quiz") speakQuestion();
  });
  function speak(text) {
    if (!canSpeak) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function stopSpeaking() { try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ } }

  /* ---------- state ---------- */
  var state = null;

  function startQuiz(eventId, mode) {
    var n = store.length || 10;
    var qs;
    if (mode === "missed") qs = drawMissed(eventId, n);
    else if (eventId === MIX_ID) qs = drawMix(n);
    else qs = drawFromEvent(eventById(eventId), n);
    saveStore();
    state = {
      screen: "quiz",
      eventId: eventId,
      mode: mode || "new",
      questions: qs.map(function (q) {
        var choices = null;
        if (q.kind === "choice") {
          var all = [q.a].concat(q.wrong);
          var isTF = all.length === 2 && all.indexOf("True") > -1 && all.indexOf("False") > -1;
          choices = isTF ? ["True", "False"] : shuffle(all);
        }
        return { q: q, choices: choices, result: null, given: null };
      }),
      index: 0,
      answered: false
    };
    renderQuiz();
  }

  function recordAnswer(item, correct) {
    var stats = eventStats(item.q.eventId);
    if (stats.seen.indexOf(item.q.id) === -1) stats.seen.push(item.q.id);
    var mi = stats.missed.indexOf(item.q.id);
    if (correct && mi > -1) stats.missed.splice(mi, 1);
    if (!correct && mi === -1) stats.missed.push(item.q.id);
    saveStore();
  }

  /* ---------- screens ---------- */
  function renderHome() {
    stopSpeaking();
    state = { screen: "home" };
    var totalQs = EVENTS.reduce(function (s, e) { return s + e.questions.length; }, 0);
    var view = el(
      '<section class="home">' +
        '<div class="home-head">' +
          "<h1>What do you want to practice today?</h1>" +
          '<p class="lede">Practice for the 2027 NC Science Olympiad Division A knowledge events. Pick an event and answer the questions. You\'ll find out right away if you got each one, and every quiz brings new questions until you\'ve seen them all.</p>' +
        "</div>" +
        '<div class="length-picker" role="group" aria-label="Questions per quiz"><span>Questions per quiz:</span></div>' +
        '<div class="events"></div>' +
      "</section>"
    );
    var lp = view.querySelector(".length-picker");
    LENGTHS.forEach(function (n) {
      var b = el('<button type="button" class="chip" id="len-' + n + '" aria-pressed="' + (store.length === n) + '">' + n + "</button>");
      b.addEventListener("click", function () {
        store.length = n;
        saveStore();
        lp.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
      });
      lp.appendChild(b);
    });

    var grid = view.querySelector(".events");
    var tiles = EVENTS.concat([{
      id: MIX_ID, name: "Surprise Mix", icon: "🎲", color: "#e0a126",
      blurb: "Questions from every event, all shuffled together.",
      questions: { length: totalQs }
    }]);
    tiles.forEach(function (ev) {
      var meta = [];
      if (ev.id !== MIX_ID) {
        var st = eventStats(ev.id);
        meta.push('<span class="pill">' + ev.questions.length + " questions</span>");
        if (st.plays) meta.push('<span class="pill">' + st.seen.length + " seen</span>");
        if (st.best != null) meta.push('<span class="pill best">Best ' + st.best + "%</span>");
      } else {
        meta.push('<span class="pill">' + totalQs + " questions</span>");
      }
      var tile = el(
        '<button type="button" class="event" style="--tint:' + esc(ev.color) + '">' +
          '<span class="event-icon" aria-hidden="true">' + ev.icon + "</span>" +
          '<span class="event-name">' + esc(ev.name) + "</span>" +
          '<span class="event-blurb">' + esc(ev.blurb) + "</span>" +
          '<span class="event-meta">' + meta.join("") + "</span>" +
        "</button>"
      );
      tile.addEventListener("click", function () { startQuiz(ev.id, "new"); });
      grid.appendChild(tile);
    });

    app.replaceChildren(view);
    window.scrollTo(0, 0);
  }

  function eventLabel(eventId) {
    if (eventId === MIX_ID) return { icon: "🎲", name: "Surprise Mix" };
    var ev = eventById(eventId);
    return { icon: ev.icon, name: ev.name };
  }

  function renderQuiz() {
    var item = state.questions[state.index];
    var q = item.q;
    var total = state.questions.length;
    var label = eventLabel(state.eventId);
    var showEventTag = state.eventId === MIX_ID;

    var dots = state.questions.map(function (it, i) {
      var cls = it.result === true ? "right" : it.result === false ? "wrong" : i === state.index ? "now" : "";
      return '<span class="dot ' + cls + '"></span>';
    }).join("");

    var view = el(
      '<section class="quiz">' +
        '<div class="quiz-top">' +
          '<span class="quiz-event"><span aria-hidden="true">' + label.icon + "</span>" + esc(label.name) +
            (state.mode === "missed" ? " &middot; practice" : "") + "</span>" +
          '<span class="progress" aria-label="Question ' + (state.index + 1) + " of " + total + '">' + dots + "</span>" +
        "</div>" +
        '<div class="card">' +
          '<div class="q-label"><span>Question ' + (state.index + 1) + " of " + total +
            (showEventTag ? " &middot; " + esc(eventById(q.eventId).name) : q.topic ? " &middot; " + esc(q.topic) : "") + "</span>" +
            (canSpeak ? '<button type="button" class="speak" id="speakBtn">🔊 Hear it</button>' : "") +
          "</div>" +
          '<div class="q-text">' + esc(q.q) + "</div>" +
          (q.image ? '<img class="q-image" src="' + esc(q.image) + '" alt="' + esc(q.imageAlt || "Picture for this question") + '">' : "") +
          '<div class="answer-area"></div>' +
          '<div class="after"></div>' +
        "</div>" +
        '<div class="quit-row"><button type="button" class="link-btn" id="quitBtn">Stop and pick a different event</button></div>' +
      "</section>"
    );

    var area = view.querySelector(".answer-area");
    var after = view.querySelector(".after");

    if (q.kind === "choice") {
      var list = el('<div class="choices"></div>');
      item.choices.forEach(function (c, i) {
        var b = el('<button type="button" class="choice"><span class="key">' + String.fromCharCode(65 + i) + "</span><span>" + esc(c) + "</span></button>");
        b.addEventListener("click", function () { answerChoice(i, list, after); });
        list.appendChild(b);
      });
      area.appendChild(list);
    } else {
      var form = el(
        '<form class="type-area" autocomplete="off">' +
          '<div class="type-row">' +
            '<input type="text" id="typed-answer" aria-label="Type your answer" placeholder="Type your answer" autocapitalize="off" spellcheck="false">' +
            '<button type="submit" class="btn">Check</button>' +
          "</div>" +
          '<p class="type-hint">Type a word or short phrase. Don\'t worry about capital letters.</p>' +
        "</form>"
      );
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (state.answered) return;
        var input = form.querySelector("input");
        if (!input.value.trim()) { input.focus(); return; }
        answerTyped(input.value, form, after);
      });
      area.appendChild(form);
    }

    if (q.hint) {
      var hintBtn = el('<button type="button" class="link-btn">Need a hint?</button>');
      hintBtn.addEventListener("click", function () {
        hintBtn.replaceWith(el('<p class="hint-box"><strong>Hint:</strong> ' + esc(q.hint) + "</p>"));
      });
      area.appendChild(hintBtn);
    }

    view.querySelector("#quitBtn").addEventListener("click", renderHome);
    var sb = view.querySelector("#speakBtn");
    if (sb) sb.addEventListener("click", speakQuestion);

    app.replaceChildren(view);
    window.scrollTo(0, 0);
    var input = view.querySelector("#typed-answer");
    if (input && window.matchMedia("(pointer: fine)").matches) input.focus();
    if (readAloudBox.checked) speakQuestion();
  }

  function speakQuestion() {
    if (!state || state.screen !== "quiz") return;
    var item = state.questions[state.index];
    var text = item.q.q;
    if (item.choices) {
      text += ". " + item.choices.map(function (c, i) { return String.fromCharCode(65 + i) + ": " + c; }).join(". ");
    }
    speak(text);
  }

  function answerChoice(i, list, after) {
    if (state.answered) return;
    state.answered = true;
    var item = state.questions[state.index];
    var chosen = item.choices[i];
    var correct = chosen === item.q.a;
    item.result = correct;
    item.given = chosen;
    var buttons = list.querySelectorAll(".choice");
    buttons.forEach(function (b, j) {
      b.disabled = true;
      if (item.choices[j] === item.q.a) b.classList.add("is-right");
      else if (j === i) b.classList.add("is-wrong");
      else b.classList.add("faded");
    });
    recordAnswer(item, correct);
    showFeedback(after, correct, null);
  }

  function answerTyped(value, form, after) {
    state.answered = true;
    var item = state.questions[state.index];
    var verdict = checkTyped(value, item.q.a, item.q.q);
    var correct = !!verdict;
    item.result = correct;
    item.given = value.trim();
    form.querySelectorAll("input, button").forEach(function (x) { x.disabled = true; });
    recordAnswer(item, correct);
    var note = verdict === "close" ? "Tiny spelling tip: it's spelled “" + item.q.a[0] + "”." : null;
    showFeedback(after, correct, note);
  }

  function showFeedback(after, correct, note) {
    var item = state.questions[state.index];
    var q = item.q;
    var last = state.index === state.questions.length - 1;
    var box;
    if (correct) {
      box = el(
        '<div class="feedback good" role="status">' +
          '<div class="feedback-title">' + pick(CHEERS) + "</div>" +
          (note ? "<p>" + esc(note) + "</p>" : "") +
          (q.why ? '<p class="why">' + esc(q.why) + "</p>" : "") +
        "</div>"
      );
    } else {
      box = el(
        '<div class="feedback oops" role="status">' +
          '<div class="feedback-title">' + pick(ENCOURAGE) + "</div>" +
          '<p>The answer is <span class="answer">' + esc(correctText(q)) + "</span>.</p>" +
          (q.why ? '<p class="why">' + esc(q.why) + "</p>" : "") +
        "</div>"
      );
    }
    var next = el('<button type="button" class="btn sun" id="nextBtn">' + (last ? "See my score" : "Next question") + "</button>");
    next.addEventListener("click", function () {
      if (last) return renderResults();
      state.index++;
      state.answered = false;
      renderQuiz();
    });
    after.replaceChildren(box, next);
    // refresh progress dots
    var dots = app.querySelectorAll(".dot");
    if (dots[state.index]) dots[state.index].className = "dot " + (correct ? "right" : "wrong");
    next.focus({ preventScroll: true });
    box.scrollIntoView({ block: "nearest", behavior: "smooth" });
    if (readAloudBox.checked) {
      speak((correct ? "Correct! " : "The answer is " + correctText(q) + ". ") + (q.why || ""));
    }
  }

  function renderResults() {
    stopSpeaking();
    var qs = state.questions;
    var right = qs.filter(function (it) { return it.result; }).length;
    var total = qs.length;
    var pct = Math.round((right / total) * 100);
    var stars = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;
    var msg =
      pct === 100 ? "A perfect score! You're a science superstar!" :
      pct >= 80 ? "Excellent work! You really know this stuff." :
      pct >= 60 ? "Nice job! A little more practice and you'll be a pro." :
      pct >= 40 ? "Good effort! Every quiz makes your brain stronger." :
      "Thanks for practicing! Try the ones you missed and watch your score grow.";

    if (state.mode === "new") {
      var ids = state.eventId === MIX_ID ? [] : [state.eventId];
      ids.forEach(function (id) {
        var st = eventStats(id);
        st.plays = (st.plays || 0) + 1;
        if (st.best == null || pct > st.best) st.best = pct;
      });
      saveStore();
    }

    var missed = qs.filter(function (it) { return !it.result; });
    var starHtml = "";
    for (var i = 0; i < 3; i++) starHtml += '<span class="' + (i < stars ? "" : "star-off") + '">⭐</span>';

    var view = el(
      '<section class="results">' +
        '<div class="card score-card">' +
          '<div class="stars" aria-label="' + stars + ' out of 3 stars">' + starHtml + "</div>" +
          '<div class="score-big">' + right + "<small> / " + total + "</small></div>" +
          "<h2>" + esc(msg) + "</h2>" +
          '<div class="btn-row" id="resultBtns"></div>' +
        "</div>" +
        (missed.length
          ? '<div class="review"><h3>Let\'s review the ones to practice</h3>' + topicChips(missed) + "</div>"
          : "") +
      "</section>"
    );
    var btns = view.querySelector("#resultBtns");
    var eventId = state.eventId;
    var again = el('<button type="button" class="btn">New quiz</button>');
    again.addEventListener("click", function () { startQuiz(eventId, "new"); });
    btns.appendChild(again);
    if (missedCount(eventId) > 0) {
      var prac = el('<button type="button" class="btn sun">Practice my missed questions (' + missedCount(eventId) + ")</button>");
      prac.addEventListener("click", function () { startQuiz(eventId, "missed"); });
      btns.appendChild(prac);
    }
    var home = el('<button type="button" class="btn secondary">Pick another event</button>');
    home.addEventListener("click", renderHome);
    btns.appendChild(home);

    var review = view.querySelector(".review");
    missed.forEach(function (it) {
      review.appendChild(el(
        '<div class="review-item">' +
          "<div>" + esc(it.q.q) + "</div>" +
          '<div class="answer">Answer: ' + esc(correctText(it.q)) + "</div>" +
          (it.given ? '<div class="yours">You said: ' + esc(it.given) + "</div>" : "") +
          (it.q.why ? "<div>" + esc(it.q.why) + "</div>" : "") +
        "</div>"
      ));
    });

    state.screen = "results";
    app.replaceChildren(view);
    window.scrollTo(0, 0);
    if (pct >= 80) confetti();
  }

  // "Study next" chips: the topics of missed questions, most-missed first.
  function topicChips(missed) {
    var counts = {};
    var order = [];
    missed.forEach(function (it) {
      var t = it.q.topic;
      if (!t) return;
      if (!counts[t]) { counts[t] = 0; order.push(t); }
      counts[t]++;
    });
    if (!order.length) return "";
    order.sort(function (a, b) { return counts[b] - counts[a]; });
    return '<div class="study-next"><span>Study next:</span>' +
      order.map(function (t) { return '<span class="pill topic">' + esc(t) + "</span>"; }).join("") +
      "</div>";
  }

  function confetti() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colors = ["#ffc53d", "#2f6feb", "#23864d", "#e05a8a", "#7a5cff", "#27a4d8"];
    var box = document.createElement("div");
    box.className = "confetti";
    for (var i = 0; i < 70; i++) {
      var p = document.createElement("i");
      p.style.left = Math.random() * 100 + "%";
      p.style.background = pick(colors);
      p.style.animationDuration = 1.8 + Math.random() * 1.8 + "s";
      p.style.animationDelay = Math.random() * 0.6 + "s";
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 4500);
  }

  /* ---------- keyboard shortcuts: 1-4 / A-D pick an answer ---------- */
  document.addEventListener("keydown", function (e) {
    if (!state || state.screen !== "quiz" || state.answered) return;
    if (e.target && e.target.tagName === "INPUT") return;
    var k = e.key.toLowerCase();
    var idx = "1234".indexOf(k);
    if (idx === -1) idx = "abcd".indexOf(k);
    if (idx === -1) return;
    var btns = app.querySelectorAll(".choice");
    if (btns[idx]) btns[idx].click();
  });

  document.getElementById("homeBtn").addEventListener("click", renderHome);
  renderHome();
})();
