/* Eureka! Codebusters practice for the 2027 NC Division A event.
 *
 * Every puzzle is generated on the spot: a message from CB_PHRASES is
 * encrypted with one of the nine cipher types the rules allow, so students
 * never run out of practice. Scoring follows the event rules: two or fewer
 * mistakes earns full credit, and each extra mistake costs 50 points.
 *
 * app.js adds a Codebusters tile to the home screen that calls
 * window.EurekaCodebusters.open().
 */
(function () {
  "use strict";

  var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var STORE_KEY = "scioly-codebusters-v1";
  var LEVELS = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" }
  ];
  var HINT_COST = 25;
  var TEST_SIZE = 5;
  var TEST_MINUTES = 25;
  var app = document.getElementById("app");
  var timerId = null;

  /* ---------- storage ---------- */
  function loadStore() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
      return { ciphers: s.ciphers || {}, drills: s.drills || {}, tests: s.tests || [], level: s.level || "easy" };
    } catch (e) {
      return { ciphers: {}, drills: {}, tests: [], level: "easy" };
    }
  }
  var store = loadStore();
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* private mode */ }
  }
  function cipherStats(id) {
    if (!store.ciphers[id]) store.ciphers[id] = { tried: 0, solved: 0 };
    return store.ciphers[id];
  }

  /* ---------- helpers ---------- */
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
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function mod(n, m) { return ((n % m) + m) % m; }
  function isLetter(ch) { return ch >= "A" && ch <= "Z"; }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function show(view) {
    stopTimer();
    app.replaceChildren(view);
    window.scrollTo(0, 0);
  }

  // Pick a message whose letters suit the level; "banned" skips repeats in a test.
  var recent = [];
  function phrase(size) {
    var list = window.CB_PHRASES[size];
    var fresh = list.filter(function (p) { return recent.indexOf(p) === -1; });
    var p = pick(fresh.length ? fresh : list);
    recent.push(p);
    if (recent.length > 30) recent.shift();
    return p;
  }
  function sizeFor(level) { return { easy: "short", medium: "medium", hard: "long" }[level]; }

  /* ---------- symbol drawings ---------- */
  function svg(inner, w, h, cls) {
    return '<svg class="' + (cls || "glyph") + '" viewBox="0 0 ' + w + " " + h + '" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }
  function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="2.4" class="fill"/>'; }
  function line(x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>'; }
  function poly(points, closed) {
    return "<" + (closed ? "polygon" : "polyline") + ' points="' + points + '"/>';
  }

  // PigPen: A-I in a tic-tac-toe grid, J-R in a grid with dots,
  // S-V in an X (S top, T left, U right, V bottom), W-Z in an X with dots.
  function pigpenParts(letter) {
    var i = ALPHA.indexOf(letter);
    var dotted = (i >= 9 && i < 18) || i >= 22;
    var s = "";
    if (i < 18) {
      var k = i % 9, r = Math.floor(k / 3), c = k % 3;
      if (r > 0) s += line(4, 4, 26, 4);
      if (r < 2) s += line(4, 26, 26, 26);
      if (c > 0) s += line(4, 4, 4, 26);
      if (c < 2) s += line(26, 4, 26, 26);
      if (dotted) s += dot(15, 15);
    } else {
      var pos = (i - 18) % 4; // 0 top, 1 left, 2 right, 3 bottom
      s += [
        poly("4,5 15,25 26,5"),
        poly("5,4 25,15 5,26"),
        poly("25,4 5,15 25,26"),
        poly("4,25 15,5 26,25")
      ][pos];
      if (dotted) s += [dot(15, 10), dot(11, 15), dot(19, 15), dot(15, 20)][pos];
    }
    return s;
  }
  function pigpen(letter) { return svg(pigpenParts(letter), 30, 30); }

  // Knight's Templar: each letter is one arm of a cross. Arms are open Vs,
  // triangles, or kites; the second set of three crosses adds a dot. N is an X.
  var KT = {
    A: ["v", 0], B: ["v", 90], C: ["v", 180], D: ["v", 270],
    H: ["tri", 0], F: ["tri", 90], G: ["tri", 180], E: ["tri", 270],
    I: ["kite", 0], K: ["kite", 90], L: ["kite", 180], M: ["kite", 270],
    O: ["v", 0, 1], P: ["v", 90, 1], Q: ["v", 180, 1], R: ["v", 270, 1],
    S: ["tri", 0, 1], T: ["tri", 90, 1], U: ["tri", 180, 1], V: ["tri", 270, 1],
    X: ["kite", 0, 1], Y: ["kite", 90, 1], W: ["kite", 180, 1], Z: ["kite", 270, 1]
  };
  KT.J = KT.I;
  function ktArm(kind, dotted) {
    var s = {
      v: poly("-9,-24 0,0 9,-24"),
      tri: poly("-9,-24 0,0 9,-24", true),
      kite: poly("0,0 -9,-17 0,-25 9,-17", true)
    }[kind];
    if (dotted) s += dot(0, kind === "kite" ? -15 : -16);
    return s;
  }
  function knights(letter) {
    if (letter === "N") return svg(line(6, 5, 24, 25) + line(24, 5, 6, 25), 30, 30);
    var k = KT[letter];
    return svg('<g transform="translate(15 15) rotate(' + k[1] + ') translate(0 12.5)">' + ktArm(k[0], k[2]) + "</g>", 30, 30);
  }

  // Standard Galactic Alphabet (the Minecraft enchanting-table letters).
  var SGA = {
    A: '<path d="M4 20 C4 29 12 29 12 20 L12 12 C12 3 20 3 20 12 L20 15"/>',
    B: '<path d="M12 4 L12 18 C19 18 20 28 12 28 C7 28 6 25 7 22"/>',
    C: '<path d="M8 10 L8 16 C15 16 17 19 17 28"/>' + dot(8, 5),
    D: line(4, 4, 21, 4) + line(6, 7, 21, 24) + line(6, 7, 6, 15) + line(6, 7, 14, 7),
    E: poly("6,4 6,27 17,27") + dot(18, 15),
    F: line(3, 12, 21, 12) + line(3, 20, 7, 20) + line(10, 20, 14, 20) + line(17, 20, 21, 20),
    G: line(4, 16, 19, 16) + line(19, 5, 19, 27),
    H: line(12, 11, 12, 28) + line(4, 11, 20, 11) + line(8, 5, 16, 5),
    I: line(12, 3, 12, 13) + line(12, 19, 12, 29),
    J: dot(12, 6) + dot(12, 16) + dot(12, 26),
    K: line(12, 5, 12, 27) + dot(5, 16) + dot(19, 16),
    L: line(8, 5, 8, 27) + dot(16, 11) + dot(16, 21),
    M: poly("18,5 18,26 6,26") + dot(6, 14),
    N: line(7, 8, 7, 20) + '<path d="M17 6 L17 18 C17 24 14 27 10 29"/>',
    O: line(8, 6, 21, 6) + '<path d="M15 6 L15 20 C15 29 5 29 5 20"/>',
    P: line(7, 4, 7, 18) + dot(7, 25) + dot(17, 7) + line(17, 14, 17, 28),
    Q: '<path d="M5 10 L11 10 C21 10 21 26 11 26 L5 26"/>' + dot(11, 5),
    R: dot(6, 10) + dot(18, 10) + dot(6, 22) + dot(18, 22),
    S: '<path d="M6 5 L6 12 C6 17 16 14 16 20 L16 28"/>',
    T: poly("4,8 18,8 18,24") + dot(10, 28),
    U: line(3, 12, 10, 12) + line(14, 12, 21, 12) + line(3, 20, 21, 20),
    V: line(12, 4, 12, 22) + line(4, 22, 20, 22) + line(8, 27, 16, 27),
    W: dot(12, 10) + dot(6, 22) + dot(18, 22),
    X: line(8, 28, 16, 8) + dot(19, 5),
    Y: line(9, 5, 9, 27) + line(15, 5, 15, 27),
    Z: poly("5,28 5,6 19,6 19,28")
  };
  function galactic(letter) { return svg(SGA[letter], 24, 32, "glyph tall"); }

  // Tap code: 5x5 grid with C and K sharing a square.
  var TAP_ROWS = ["ABCDE", "FGHIJ", "LMNOP", "QRSTU", "VWXYZ"];
  function tapPair(letter) {
    if (letter === "K") letter = "C";
    for (var r = 0; r < 5; r++) {
      var c = TAP_ROWS[r].indexOf(letter);
      if (c !== -1) return [r + 1, c + 1];
    }
  }

  // Baconian with the 24-letter alphabet (I/J and U/V share codes).
  var BACON_LETTERS = "ABCDEFGHIKLMNOPQRSTUWXYZ";
  function baconCode(letter) {
    if (letter === "J") letter = "I";
    if (letter === "V") letter = "U";
    var n = BACON_LETTERS.indexOf(letter), s = "";
    for (var b = 4; b >= 0; b--) s += (n >> b) & 1 ? "B" : "A";
    return s;
  }
  var BACON_SETS = [
    [["●", "■"], ["○", "□"]],   // filled vs hollow shapes
    [["▲", "▼"], ["△", "▽"]],   // filled vs hollow triangles
    [["♥", "♦"], ["♠", "♣"]]    // red vs black card suits
  ];

  var SHARED = { I: "IJ", J: "IJ" };
  var SHARED_TAP = { C: "CK", K: "CK" };
  var SHARED_BACON = { I: "IJ", J: "IJ", U: "UV", V: "UV" };

  /* ---------- building puzzles ---------- */
  // encode(letter, n) -> { show, group, accept, top } for the nth letter.
  function build(plain, encode) {
    var n = 0;
    var words = plain.split(" ").map(function (w) {
      var cells = [];
      for (var i = 0; i < w.length; i++) {
        var ch = w[i];
        if (!isLetter(ch)) { cells.push({ punct: ch }); continue; }
        var c = encode(ch, n++);
        c.answer = ch;
        c.accept = c.accept || ch;
        cells.push(c);
      }
      return cells;
    });
    return words;
  }
  function lettersOnly(plain) { return plain.replace(/[^A-Z ]/g, "").replace(/ +/g, " ").trim(); }
  function textCell(ch) { return '<span class="ct">' + ch + "</span>"; }

  function derangement() {
    while (true) {
      var p = shuffle(ALPHA.split(""));
      if (p.every(function (c, i) { return c !== ALPHA[i]; })) return p.join("");
    }
  }

  var CIPHERS = [
    {
      id: "aristocrat", name: "Aristocrat", tag: "Frequency table given", sample: textCell("Q&rarr;E"),
      blurb: "Each letter is swapped for a different letter. Crack it with letter counting and word patterns.",
      points: [200, 300, 400],
      learn:
        "<p>In an <b>Aristocrat</b>, every letter of the message is swapped for a different letter, and the swap stays the same all the way through. If <b>E</b> becomes <b>Q</b> once, every <b>Q</b> in the puzzle means <b>E</b>. The spaces between words stay put, and <b>no letter ever stands for itself</b>.</p>" +
        "<p><b>How to crack it:</b></p><ul>" +
        "<li>Count the letters. The most common code letters are probably <b>E</b>, <b>T</b>, <b>A</b>, or <b>O</b>.</li>" +
        "<li>A one-letter word is almost always <b>A</b> or <b>I</b>.</li>" +
        "<li>Common three-letter words are <b>THE</b> and <b>AND</b>. Two-letter words are often <b>OF</b>, <b>TO</b>, <b>IS</b>, <b>IT</b>, <b>IN</b>.</li>" +
        "<li>Look for patterns. A word like <b>XYZZX</b> has a double letter in the middle.</li></ul>" +
        "<p>When you type a letter in one box, it fills in everywhere that code letter appears.</p>",
      make: function (level) {
        var plain = phrase(level === "easy" ? "medium" : "long");
        var key = derangement();
        var p = {
          plain: plain, freq: true,
          words: build(plain, function (ch) {
            var c = key[ALPHA.indexOf(ch)];
            return { show: textCell(c), group: c };
          })
        };
        var counts = {};
        plain.replace(/[A-Z]/g, function (ch) { counts[ch] = (counts[ch] || 0) + 1; });
        if (level === "easy") {
          var common = Object.keys(counts).filter(function (k) { return counts[k] >= 2; });
          p.given = shuffle(common).slice(0, 3).map(function (ch) { return key[ALPHA.indexOf(ch)]; });
          p.info = "Hint: three letters are already filled in for you.";
        } else if (level === "medium") {
          var longest = lettersOnly(plain).split(" ").sort(function (a, b) { return b.length - a.length; })[0];
          p.info = "Hint: the message has the word <b>" + longest + "</b> in it.";
        } else {
          p.info = "No hint on this one, just like the toughest test questions!";
        }
        return p;
      }
    },
    {
      id: "atbash", name: "Atbash", tag: "Table given", sample: textCell("A&harr;Z"),
      blurb: "The alphabet flipped backward: A becomes Z, B becomes Y, and so on.",
      points: [100, 150, 200],
      learn:
        "<p><b>Atbash</b> flips the alphabet around. <b>A</b> swaps with <b>Z</b>, <b>B</b> swaps with <b>Y</b>, <b>C</b> swaps with <b>X</b>, and so on. It works the same way both directions, so decoding is the same as encoding.</p>" +
        atbashTable() +
        "<p><b>Example:</b> <code>HXRVMXV</code> decodes to <b>SCIENCE</b>.</p>",
      make: function (level) {
        var plain = phrase(sizeFor(level));
        return {
          plain: plain,
          info: "Use the Atbash table: each letter swaps with its partner on the other end of the alphabet.",
          words: build(plain, function (ch) {
            var c = ALPHA[25 - ALPHA.indexOf(ch)];
            return { show: textCell(c), group: c };
          })
        };
      }
    },
    {
      id: "caesar", name: "Caesar", tag: "No table", sample: textCell("A&rarr;D"),
      blurb: "Every letter slides up to 3 places along the alphabet.",
      points: [100, 150, 200],
      learn:
        "<p>A <b>Caesar cipher</b> slides every letter the same number of places along the alphabet. In this event the slide is <b>3 or fewer</b>, forward or backward. With a slide of 3 forward, <b>A</b> becomes <b>D</b> and <b>X</b> wraps around to <b>A</b>.</p>" +
        "<p><b>To decode</b>, slide each letter back the other way. If you don't know the slide, try it on a short word: there are only six possibilities (1, 2, or 3 forward or backward).</p>" +
        "<p><b>Example:</b> with a slide of 3 forward, <code>FRGH</code> decodes to <b>CODE</b>.</p>",
      make: function (level) {
        var plain = phrase(sizeFor(level));
        var shift = pick([-3, -2, -1, 1, 2, 3]);
        var dir = shift > 0 ? "forward" : "backward";
        var n = Math.abs(shift);
        return {
          plain: plain,
          info: level === "easy"
            ? "Each letter was slid <b>" + n + " place" + (n > 1 ? "s" : "") + " " + dir + "</b>. Slide it back " + (shift > 0 ? "backward" : "forward") + " to decode."
            : "The slide is 3 places or fewer, forward or backward. Try a short word first!",
          words: build(plain, function (ch) {
            var c = ALPHA[mod(ALPHA.indexOf(ch) + shift, 26)];
            return { show: textCell(c), group: c };
          })
        };
      }
    },
    {
      id: "vigenere", name: "Vigenère", tag: "Table given", sample: textCell("+KEY"),
      blurb: "A key word shifts each letter by a different amount.",
      points: [150, 250, 350],
      learn:
        "<p>A <b>Vigenère cipher</b> uses a <b>key word</b>. Write the key word over the message again and again, one key letter over each code letter (skip the spaces). Each key letter tells you how far that letter was shifted: <b>A</b> = 0, <b>B</b> = 1, <b>C</b> = 2, and so on.</p>" +
        "<p><b>To decode with the table:</b> find the key letter's row, slide along that row until you find the code letter, and the letter at the top of that column is the answer.</p>" +
        "<p><b>Or count back:</b> move the code letter backward by the key letter's number.</p>" +
        "<p><b>Example:</b> key <b>CAT</b>, code <code>FOZ</code>. F back 2 (C) = <b>D</b>, O back 0 (A) = <b>O</b>, Z back 19 (T) = <b>G</b>. The answer is <b>DOG</b>.</p>" +
        "<p>Because the shift changes, the same code letter can mean different letters, so these boxes don't fill in automatically.</p>",
      make: function (level) {
        var plain = phrase(sizeFor(level));
        var key = pick(["CAT", "SUN", "MOON", "LEAF", "ROCK", "STAR", "FROG", "BEE", "OWL", "SEA", "CODE", "KEY", "SPY", "WAVE", "TREE", "LION", "RAIN", "SNOW"]);
        return {
          plain: plain,
          info: "The key word is <b>" + key + "</b>." + (level === "easy" ? " The key letters are written above each code letter for you." : " Write the key letters over the code letters to get started."),
          words: build(plain, function (ch, n) {
            var k = key[n % key.length];
            var c = ALPHA[mod(ALPHA.indexOf(ch) + ALPHA.indexOf(k), 26)];
            return { show: textCell(c), group: null, top: level === "easy" ? k : null };
          })
        };
      }
    },
    {
      id: "baconian", name: "Baconian", tag: "Table given", sample: '<span class="ct small">ABBAB</span>',
      blurb: "Each letter is a group of 5 symbols that stand for A or B.",
      points: [150, 200, 250],
      learn:
        "<p>In a <b>Baconian cipher</b>, every letter becomes a group of <b>5</b> symbols, and each symbol stands for either <b>A</b> or <b>B</b>. Look up the pattern in the Baconian table. This version uses 24 letters: <b>I</b> and <b>J</b> share a code, and so do <b>U</b> and <b>V</b>.</p>" +
        baconTable() +
        "<p>Sometimes the puzzle uses symbols instead of A and B. Then you have to figure out which symbols mean A. Tip: <b>AAAAA</b> is A, and lots of common letters start with A.</p>" +
        "<p><b>Example:</b> <code>AABBA AAAAA BAABA</code> decodes to <b>GAS</b>.</p>",
      make: function (level) {
        var plain = lettersOnly(phrase(level === "hard" ? "medium" : "short"));
        var set = pick(BACON_SETS);
        var symA, symB, info;
        if (level === "easy") {
          symA = ["A"]; symB = ["B"];
          info = "Each group of 5 letters is one letter of the message. Look it up in the Baconian table.";
        } else if (level === "medium") {
          var two = shuffle([set[0][0], set[1][0]]);
          symA = [two[0]]; symB = [two[1]];
          info = "Two symbols are used. One of them means <b>A</b> and the other means <b>B</b>. Which is which?";
        } else {
          symA = set[0]; symB = set[1];
          info = "Four symbols are used: two of them mean <b>A</b> and two mean <b>B</b>. Look for what the symbols have in common.";
        }
        return {
          plain: plain, info: info, wide: true,
          words: build(plain, function (ch) {
            var code = baconCode(ch);
            var shown = code.split("").map(function (b) { return pick(b === "A" ? symA : symB); }).join("");
            return { show: '<span class="ct bacon">' + shown + "</span>", group: code, accept: SHARED_BACON[ch] };
          })
        };
      }
    },
    {
      id: "pigpen", name: "PigPen", tag: "Memorize it!", memorize: true, sample: pigpen("E") + pigpen("W"),
      blurb: "Letters drawn as the lines around them in grids and Xs.",
      points: [100, 150, 200],
      learn:
        "<p><b>PigPen</b> (also called the Masonic cipher) turns each letter into the shape of the lines around it. <b>You must memorize this one:</b> the key is <b>not</b> on the resource sheet.</p>" +
        "<p>Draw two tic-tac-toe grids and two big Xs. Fill in <b>A&ndash;I</b> in the first grid and <b>J&ndash;R</b> in the second grid, which gets a dot in every space. Put <b>S</b> top, <b>T</b> left, <b>U</b> right, <b>V</b> bottom in the first X, and <b>W X Y Z</b> the same way in the second X, with dots.</p>" +
        pigpenChart() +
        "<p><b>Tip:</b> practice drawing the key from memory at the start of the test, on scratch paper.</p>",
      make: function (level) {
        var plain = lettersOnly(phrase(sizeFor(level)));
        return {
          plain: plain, info: "Decode the PigPen symbols. Can you do it without peeking at the key?",
          words: build(plain, function (ch) { return { show: pigpen(ch), group: ch }; })
        };
      }
    },
    {
      id: "tapcode", name: "Tap Code", tag: "Memorize it!", memorize: true, sample: '<span class="ct">2,3</span>',
      blurb: "Pairs of numbers give a row and a column in a 5×5 square.",
      points: [100, 150, 200],
      learn:
        "<p>The <b>Tap Code</b> puts the alphabet in a 5&times;5 square. Each letter is two numbers: the <b>row</b> first, then the <b>column</b>. <b>C</b> and <b>K</b> share a square, so there are 25 squares for 26 letters. <b>You must memorize this one:</b> the square is not on the resource sheet.</p>" +
        tapTable() +
        "<p><b>Example:</b> <code>2,3 1,1 4,4</code> = row 2 column 3 (<b>H</b>), row 1 column 1 (<b>A</b>), row 4 column 4 (<b>T</b>): <b>HAT</b>.</p>" +
        "<p><b>Tip:</b> the square is just the alphabet in rows of five, skipping <b>K</b>.</p>",
      make: function (level) {
        var plain = lettersOnly(phrase(sizeFor(level)));
        return {
          plain: plain, info: "Each pair is <b>row, column</b>. Remember: C and K share a square.",
          words: build(plain, function (ch) {
            var p = tapPair(ch);
            return { show: '<span class="ct tap">' + p[0] + "," + p[1] + "</span>", group: "T" + p.join(""), accept: SHARED_TAP[ch] };
          })
        };
      }
    },
    {
      id: "knights", name: "Knight's Templar", tag: "Memorize it!", memorize: true, sample: knights("A") + knights("S"),
      blurb: "Letters drawn as the arms of crosses.",
      points: [100, 150, 200],
      learn:
        "<p>The <b>Knight's Templar cipher</b> turns each letter into one arm of a cross. <b>You must memorize this one:</b> the key is not on the resource sheet.</p>" +
        "<p>Draw two rows of three crosses with an <b>X</b> for <b>N</b> in between. In each row the arms are <b>open Vs</b> (0 lines on the outside), then <b>triangles</b> (1 line), then <b>kites</b> (2 lines). The second row gets a dot in every arm.</p>" +
        "<ul><li><b>Most crosses</b> go clockwise from the top: A B C D, I/J K L M, O P Q R, and S T U V.</li>" +
        "<li><b>Two tricky crosses:</b> E F G H go left, right, bottom, top, and W X Y Z go bottom, top, right, left.</li></ul>" +
        "<p><b>I</b> and <b>J</b> share an arm, and <b>N</b> is the X in the middle. Sanity check: the top letters are <b>A H I O S X</b>.</p>" +
        knightsChart(),
      make: function (level) {
        var plain = lettersOnly(phrase(sizeFor(level)));
        return {
          plain: plain, info: "Decode the Knight's Templar symbols. Remember, I and J share a symbol.",
          words: build(plain, function (ch) { return { show: knights(ch), group: ch === "J" ? "I" : ch, accept: SHARED[ch] }; })
        };
      }
    },
    {
      id: "galactic", name: "Standard Galactic", tag: "Phrase given", sample: galactic("S") + galactic("G"),
      blurb: "The Minecraft enchanting-table alphabet.",
      points: [100, 150, 200],
      learn:
        "<p>The <b>Standard Galactic Alphabet</b> is the alien-looking alphabet from the enchanting table in Minecraft. Each symbol is one letter.</p>" +
        "<p>On the test, the resource sheet shows the phrase <b>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</b> written in Galactic letters. That phrase uses every letter of the alphabet, so you can find each symbol in it.</p>" +
        galacticPhrase() +
        "<p><b>Tip:</b> learning a few common letters by heart (E, T, A, O) makes you much faster.</p>",
      make: function (level) {
        var plain = lettersOnly(phrase(sizeFor(level)));
        return {
          plain: plain, info: "Use the Galactic phrase on the resource sheet to find each letter.",
          words: build(plain, function (ch) { return { show: galactic(ch), group: ch }; })
        };
      }
    }
  ];
  function cipherById(id) { return CIPHERS.filter(function (c) { return c.id === id; })[0]; }
  function levelIndex(level) { return { easy: 0, medium: 1, hard: 2 }[level]; }

  function makePuzzle(cipherId, level) {
    var c = cipherById(cipherId);
    var p = c.make(level);
    p.cipher = c.id;
    p.level = level;
    p.points = c.points[levelIndex(level)];
    return p;
  }

  /* ---------- reference charts ---------- */
  function atbashTable() {
    return '<div class="cb-table-wrap"><table class="cb-table"><tr><th>Letter</th>' +
      ALPHA.split("").map(function (c) { return "<td>" + c + "</td>"; }).join("") +
      "</tr><tr><th>Atbash</th>" +
      ALPHA.split("").map(function (c, i) { return "<td>" + ALPHA[25 - i] + "</td>"; }).join("") +
      "</tr></table></div>";
  }
  function baconTable() {
    var rows = BACON_LETTERS.split("").map(function (c) {
      var label = c === "I" ? "I/J" : c === "U" ? "U/V" : c;
      return "<div><b>" + label + "</b> " + baconCode(c) + "</div>";
    });
    return '<div class="cb-bacon-table">' + rows.join("") + "</div>";
  }
  function tapTable() {
    var h = '<table class="cb-table tap-table"><tr><th></th>';
    for (var c = 1; c <= 5; c++) h += "<th>" + c + "</th>";
    h += "</tr>";
    TAP_ROWS.forEach(function (row, r) {
      h += "<tr><th>" + (r + 1) + "</th>" + row.split("").map(function (ch) {
        return "<td>" + (ch === "C" ? "C/K" : ch) + "</td>";
      }).join("") + "</tr>";
    });
    return '<div class="cb-table-wrap">' + h + "</table></div>";
  }
  function pigpenChart() {
    var s = "";
    function grid(ox, letters, dotted) {
      s += '<g transform="translate(' + ox + ' 10)">' +
        line(40, 0, 40, 120) + line(80, 0, 80, 120) + line(0, 40, 120, 40) + line(0, 80, 120, 80);
      letters.split("").forEach(function (ch, i) {
        var x = (i % 3) * 40 + 20, y = Math.floor(i / 3) * 40 + 20;
        s += '<text x="' + (dotted ? x - 7 : x) + '" y="' + (y + 6) + '">' + ch + "</text>";
        if (dotted) s += dot(x + 9, y);
      });
      s += "</g>";
    }
    function ex(ox, letters, dotted) {
      s += '<g transform="translate(' + ox + ' 10)">' + line(0, 0, 120, 120) + line(120, 0, 0, 120);
      var spots = [[60, 24], [24, 60], [96, 60], [60, 96]];
      letters.split("").forEach(function (ch, i) {
        var x = spots[i][0], y = spots[i][1];
        s += '<text x="' + x + '" y="' + (y + 6) + '">' + ch + "</text>";
        if (dotted) s += dot(x + (i === 1 ? 14 : i === 2 ? -14 : 0), y + (i === 0 ? 14 : i === 3 ? -14 : 0));
      });
      s += "</g>";
    }
    grid(10, "ABCDEFGHI", false);
    grid(150, "JKLMNOPQR", true);
    ex(290, "STUV", false);
    ex(430, "WXYZ", true);
    return '<div class="cb-chart">' + svg(s, 560, 140, "chart") + "</div>";
  }
  function knightsChart() {
    var s = "";
    var order = {
      v: [["A", "B", "C", "D"], ["O", "P", "Q", "R"]],
      tri: [["H", "F", "G", "E"], ["S", "T", "U", "V"]],
      kite: [["I/J", "K", "L", "M"], ["X", "Y", "W", "Z"]]
    };
    ["v", "tri", "kite"].forEach(function (kind, col) {
      [0, 1].forEach(function (row) {
        var cx = 70 + col * 150, cy = 66 + row * 176;
        s += '<g transform="translate(' + cx + " " + cy + ')">';
        [0, 90, 180, 270].forEach(function (a, k) {
          s += '<g transform="rotate(' + a + ') scale(1.5)" style="stroke-width:1.6">' + ktArm(kind, row === 1) + "</g>";
          var rad = (a - 90) * Math.PI / 180;
          var tx = Math.round(Math.cos(rad) * 52), ty = Math.round(Math.sin(rad) * 52) + 7;
          s += '<text x="' + tx + '" y="' + ty + '">' + order[kind][row][k] + "</text>";
        });
        s += "</g>";
      });
    });
    s += '<g transform="translate(220 154)">' + line(-14, -14, 14, 14) + line(14, -14, -14, 14) + '<text x="30" y="7">N</text></g>';
    return '<div class="cb-chart">' + svg(s, 440, 310, "chart") + "</div>";
  }
  function galacticPhrase() {
    var words = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG".split(" ");
    return '<div class="cb-sga-phrase">' + words.map(function (w) {
      return '<span class="cb-sga-word">' + w.split("").map(function (ch) {
        return '<span class="cb-sga-letter">' + galactic(ch) + "<b>" + ch + "</b></span>";
      }).join("") + "</span>";
    }).join("") + "</div>";
  }
  function frequencyTable() {
    var f = { E: 12.7, T: 9.1, A: 8.2, O: 7.5, I: 7.0, N: 6.7, S: 6.3, H: 6.1, R: 6.0, D: 4.3, L: 4.0, C: 2.8, U: 2.8, M: 2.4, W: 2.4, F: 2.2, G: 2.0, Y: 2.0, P: 1.9, B: 1.5, V: 1.0, K: 0.8, J: 0.2, X: 0.2, Q: 0.1, Z: 0.1 };
    return '<div class="cb-table-wrap"><table class="cb-table"><tr><th>Letter</th>' +
      ALPHA.split("").map(function (c) { return "<td>" + c + "</td>"; }).join("") +
      "</tr><tr><th>%</th>" +
      ALPHA.split("").map(function (c) { return "<td>" + f[c] + "</td>"; }).join("") +
      "</tr></table></div><p class=\"cb-note\">Most common: E T A O I N S H R</p>";
  }
  function vigenereTable() {
    var h = '<table class="cb-table vig"><tr><th></th>' + ALPHA.split("").map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr>";
    for (var r = 0; r < 26; r++) {
      h += "<tr><th>" + ALPHA[r] + "</th>";
      for (var c = 0; c < 26; c++) h += "<td>" + ALPHA[(r + c) % 26] + "</td>";
      h += "</tr>";
    }
    return '<div class="cb-table-wrap">' + h + "</table></div>";
  }

  // The resource sheet event leaders hand out: no PigPen, Tap Code, or Knight's Templar.
  function openSheet() {
    var d = document.getElementById("cb-sheet");
    if (!d) {
      d = el(
        '<dialog id="cb-sheet" class="cb-sheet" aria-labelledby="cb-sheet-title">' +
          '<div class="cb-sheet-head"><h2 id="cb-sheet-title">Resource sheet</h2>' +
          '<button type="button" class="btn secondary" data-close>Close</button></div>' +
          '<p class="cb-note">This matches what event leaders hand out. The PigPen, Tap Code, and Knight\'s Templar keys are <b>not</b> on it, so memorize those!</p>' +
          "<h3>English letter frequencies</h3>" + frequencyTable() +
          "<h3>Atbash</h3>" + atbashTable() +
          "<h3>Standard Galactic Alphabet</h3>" + galacticPhrase() +
          "<h3>Baconian (24 letters)</h3>" + baconTable() +
          "<h3>Vigenère table</h3><p class=\"cb-note\">Row = key letter, column = message letter.</p>" + vigenereTable() +
        "</dialog>"
      );
      d.querySelector("[data-close]").addEventListener("click", function () { d.close(); });
      d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
      document.body.appendChild(d);
    }
    if (d.showModal) d.showModal(); else d.setAttribute("open", "");
  }

  /* ---------- screens ---------- */
  function totalSolved() {
    return CIPHERS.reduce(function (s, c) { return s + cipherStats(c.id).solved; }, 0);
  }

  function renderHome() {
    var view = el(
      '<section class="home cb">' +
        '<div class="cb-top"></div>' +
        '<div class="home-head">' +
          "<h1>Codebusters</h1>" +
          '<p class="lede">Crack secret messages with the nine kinds of codes on the 2027 test. Every puzzle is brand new, and scoring works like the real event: 2 or fewer mistakes still earns full points.</p>' +
        "</div>" +
        '<div class="btn-row">' +
          '<button type="button" class="btn" data-go="test">&#9201; Mock test</button>' +
          '<button type="button" class="btn secondary" data-go="sheet">&#128196; Resource sheet</button>' +
        "</div>" +
        '<h2 class="cb-h2">Pick a code</h2>' +
        '<div class="events cb-ciphers"></div>' +
        '<h2 class="cb-h2">Memory drills</h2>' +
        '<p class="cb-note">These three keys are not on the resource sheet. Quick flash cards help you learn them by heart.</p>' +
        '<div class="events cb-drills"></div>' +
      "</section>"
    );
    view.querySelector(".cb-top").appendChild(backLink("All events", function () { document.getElementById("homeBtn").click(); }));
    view.querySelector('[data-go="test"]').addEventListener("click", renderTestIntro);
    view.querySelector('[data-go="sheet"]').addEventListener("click", openSheet);
    var grid = view.querySelector(".cb-ciphers");
    CIPHERS.forEach(function (c) {
      var st = cipherStats(c.id);
      var meta = '<span class="pill' + (c.memorize ? " memo" : "") + '">' + c.tag + "</span>";
      if (st.solved) meta += '<span class="pill best">Solved ' + st.solved + "</span>";
      var tile = el(
        '<button type="button" class="event" style="--tint:#7a5cff">' +
          '<span class="event-icon cb-sample" aria-hidden="true">' + c.sample + "</span>" +
          '<span class="event-name">' + esc(c.name) + "</span>" +
          '<span class="event-blurb">' + esc(c.blurb) + "</span>" +
          '<span class="event-meta">' + meta + "</span>" +
        "</button>"
      );
      tile.addEventListener("click", function () { renderCipher(c.id); });
      grid.appendChild(tile);
    });
    var drills = view.querySelector(".cb-drills");
    CIPHERS.filter(function (c) { return c.memorize; }).forEach(function (c) {
      var best = store.drills[c.id];
      var tile = el(
        '<button type="button" class="event" style="--tint:#e05a8a">' +
          '<span class="event-icon cb-sample" aria-hidden="true">' + c.sample + "</span>" +
          '<span class="event-name">' + esc(c.name) + " drill</span>" +
          '<span class="event-blurb">10 quick flash cards.</span>' +
          '<span class="event-meta">' + (best != null ? '<span class="pill best">Best ' + best + "/10</span>" : "") + "</span>" +
        "</button>"
      );
      tile.addEventListener("click", function () { startDrill(c.id); });
      drills.appendChild(tile);
    });
    show(view);
  }

  function backLink(label, fn) {
    var b = el('<button type="button" class="link-btn cb-back">&larr; ' + esc(label) + "</button>");
    b.addEventListener("click", fn);
    return b;
  }

  function levelPicker() {
    var box = el('<div class="length-picker" role="group" aria-label="Level"><span>Level:</span></div>');
    LEVELS.forEach(function (lv) {
      var b = el('<button type="button" class="chip" aria-pressed="' + (store.level === lv.id) + '">' + lv.name + "</button>");
      b.addEventListener("click", function () {
        store.level = lv.id;
        saveStore();
        box.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
      });
      box.appendChild(b);
    });
    return box;
  }

  function renderCipher(id) {
    var c = cipherById(id);
    var st = cipherStats(id);
    var view = el(
      '<section class="quiz cb">' +
        '<div class="cb-top"></div>' +
        "<h1>" + esc(c.name) + "</h1>" +
        '<div class="btn-row cb-start"></div>' +
        '<details class="card cb-learn"' + (st.tried ? "" : " open") + "><summary>How it works</summary>" + c.learn + "</details>" +
      "</section>"
    );
    view.querySelector(".cb-top").appendChild(backLink("All codes", renderHome));
    var start = view.querySelector(".cb-start");
    start.appendChild(levelPicker());
    var go = el('<button type="button" class="btn">Start a puzzle</button>');
    go.addEventListener("click", function () { renderPuzzle(makePuzzle(id, store.level), { mode: "practice" }); });
    start.appendChild(go);
    if (c.memorize) {
      var drill = el('<button type="button" class="btn secondary">Memory drill</button>');
      drill.addEventListener("click", function () { startDrill(id); });
      start.appendChild(drill);
    }
    show(view);
  }

  /* ---------- the puzzle screen ---------- */
  function puzzleHTML(p) {
    return p.words.map(function (w) {
      return '<span class="cb-word' + (p.wide ? " wide" : "") + '">' + w.map(function (c) {
        if (c.punct) return '<span class="cb-punct">' + esc(c.punct) + "</span>";
        return '<span class="cb-cell">' +
          (c.top ? '<span class="cb-keyletter">' + c.top + "</span>" : "") +
          '<span class="cb-code">' + c.show + "</span>" +
          '<input class="cb-in" maxlength="1" autocomplete="off" autocapitalize="characters" spellcheck="false"' +
          (c.group ? ' data-group="' + esc(c.group) + '"' : "") + ' aria-label="Answer letter">' +
        "</span>";
      }).join("") + "</span>";
    }).join("");
  }

  function renderPuzzle(p, ctx) {
    var c = cipherById(p.cipher);
    var testMode = ctx.mode === "test";
    var levelName = LEVELS[levelIndex(p.level)].name;
    var view = el(
      '<section class="quiz cb">' +
        '<div class="cb-top"></div>' +
        '<div class="card cb-puzzle">' +
          '<div class="q-label"><span>' + (testMode ? "Question " + (ctx.index + 1) + " of " + ctx.total + " &middot; " : "") +
            esc(c.name) + (testMode ? "" : " &middot; " + levelName) + '</span><span class="cb-points">' + p.points + " points</span></div>" +
          '<p class="cb-info">' + p.info + "</p>" +
          '<div class="cb-grid">' + puzzleHTML(p) + "</div>" +
          (p.freq ? '<div class="cb-freq"></div>' : "") +
          '<div class="btn-row cb-actions"></div>' +
          '<div class="cb-result" aria-live="polite"></div>' +
        "</div>" +
      "</section>"
    );
    var top = view.querySelector(".cb-top");
    if (testMode) {
      top.appendChild(el('<span class="cb-timer" id="cb-timer"></span>'));
    } else {
      top.appendChild(backLink(c.name, function () { renderCipher(c.id); }));
    }

    var cells = [];
    p.words.forEach(function (w) { w.forEach(function (x) { if (!x.punct) cells.push(x); }); });
    var inputs = Array.prototype.slice.call(view.querySelectorAll(".cb-grid .cb-in"));
    inputs.forEach(function (inp, i) { inp._cell = cells[i]; inp._i = i; });
    var reveals = 0, checked = false, done = false, firstScore = null;

    if (p.freq) buildFreq(view.querySelector(".cb-freq"), p);
    var allInputs = function () { return Array.prototype.slice.call(view.querySelectorAll(".cb-in")); };

    function setGroup(group, val, except) {
      allInputs().forEach(function (x) {
        if (x !== except && x.dataset.group === group && !x.readOnly) x.value = val;
      });
    }
    function markDuplicates() {
      if (!p.freq) return;
      var byLetter = {};
      inputs.forEach(function (x) {
        if (x.value) (byLetter[x.value] = byLetter[x.value] || {})[x.dataset.group] = true;
      });
      allInputs().forEach(function (x) {
        x.classList.toggle("dup", !!x.value && Object.keys(byLetter[x.value] || {}).length > 1);
      });
    }

    view.addEventListener("input", function (e) {
      var inp = e.target;
      if (!inp.classList.contains("cb-in")) return;
      var v = inp.value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);
      inp.value = v;
      inp.classList.remove("wrong");
      if (inp.dataset.group) setGroup(inp.dataset.group, v, inp);
      markDuplicates();
      if (v && inp._i != null) {
        for (var j = inp._i + 1; j < inputs.length; j++) {
          if (!inputs[j].value && !inputs[j].readOnly) { inputs[j].focus(); break; }
        }
      }
    });
    view.addEventListener("keydown", function (e) {
      var inp = e.target;
      if (!inp.classList || !inp.classList.contains("cb-in") || inp._i == null) return;
      var i = inp._i;
      if (e.key === "Backspace" && !inp.value && i > 0) { inputs[i - 1].focus(); e.preventDefault(); }
      else if (e.key === "ArrowLeft" && i > 0) { inputs[i - 1].focus(); e.preventDefault(); }
      else if (e.key === "ArrowRight" && i < inputs.length - 1) { inputs[i + 1].focus(); e.preventDefault(); }
    });

    (p.given || []).forEach(function (g) {
      var ans = cells.filter(function (x) { return x.group === g; })[0].answer;
      allInputs().forEach(function (x) {
        if (x.dataset.group === g) { x.value = ans; x.readOnly = true; x.classList.add("given"); }
      });
    });

    function countErrors() {
      var errs = 0;
      inputs.forEach(function (x) {
        var ok = x.value && x._cell.accept.indexOf(x.value) !== -1;
        x.classList.toggle("wrong", !ok);
        if (!ok) errs++;
      });
      return errs;
    }
    function scoreFor(errs) {
      var s = errs <= 2 ? p.points : Math.max(0, p.points - 50 * (errs - 2));
      return Math.max(0, s - reveals * HINT_COST);
    }

    var actions = view.querySelector(".cb-actions");
    var result = view.querySelector(".cb-result");
    var checkBtn = el('<button type="button" class="btn">' + (testMode ? "Turn it in" : "Check my answer") + "</button>");
    var hintBtn = el('<button type="button" class="btn secondary">Reveal a letter (&minus;' + HINT_COST + ")</button>");
    var showBtn = el('<button type="button" class="btn secondary">Show the answer</button>');
    var nextBtn = el('<button type="button" class="btn">' + (testMode ? (ctx.index + 1 < ctx.total ? "Next question &rarr;" : "See my score") : "New puzzle") + "</button>");
    var sheetBtn = el('<button type="button" class="btn secondary">Resource sheet</button>');
    var printBtn = el('<button type="button" class="btn secondary">Print</button>');
    actions.appendChild(checkBtn);
    if (!testMode) { actions.appendChild(hintBtn); actions.appendChild(showBtn); }
    actions.appendChild(sheetBtn);
    if (!testMode) actions.appendChild(printBtn);

    checkBtn.addEventListener("click", function () {
      var errs = countErrors();
      var score = scoreFor(errs);
      if (!checked) {
        checked = true;
        firstScore = score;
        if (!testMode) {
          var st = cipherStats(p.cipher);
          st.tried++;
          if (errs <= 2) st.solved++;
          saveStore();
        }
      }
      var msg;
      if (errs === 0) msg = "<b>Perfect! You cracked it!</b>";
      else if (errs <= 2) msg = "<b>Cracked it!</b> " + errs + " mistake" + (errs > 1 ? "s" : "") + ", and up to 2 are free on the real test.";
      else msg = "<b>" + errs + " letters need another look.</b> They're marked in orange. The first 2 mistakes are free, then each one costs 50 points.";
      if (reveals) msg += " (Revealed letters: &minus;" + reveals * HINT_COST + ".)";
      msg += '<div class="cb-score">' + score + " / " + p.points + " points</div>";
      if (testMode) {
        done = true;
        ctx.results.push({ cipher: p.cipher, points: p.points, score: score, errors: errs });
        lockAll();
        msg += '<p class="cb-note">The answer: <b>' + esc(p.plain) + "</b></p>";
        checkBtn.remove();
        actions.insertBefore(nextBtn, actions.firstChild);
      } else if (errs > 2) {
        msg += '<p class="cb-note">Fix the orange letters and check again, or reveal a letter.</p>';
        if (!actions.contains(nextBtn)) actions.appendChild(nextBtn);
      } else {
        lockAll();
        checkBtn.remove(); hintBtn.remove(); showBtn.remove();
        actions.insertBefore(nextBtn, actions.firstChild);
        if (window.EurekaConfetti && errs === 0) window.EurekaConfetti();
      }
      result.className = "cb-result feedback " + (errs <= 2 ? "good" : "oops");
      result.innerHTML = msg;
      if (errs <= 2 || testMode) result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    hintBtn.addEventListener("click", function () {
      var todo = inputs.filter(function (x) { return !x.readOnly && x._cell.accept.indexOf(x.value) === -1; });
      if (!todo.length) return;
      var x = pick(todo);
      reveals++;
      var ans = x._cell.answer;
      var targets = x.dataset.group
        ? allInputs().filter(function (y) { return y.dataset.group === x.dataset.group; })
        : [x];
      targets.forEach(function (y) { y.value = ans; y.readOnly = true; y.classList.remove("wrong"); y.classList.add("revealed"); });
      markDuplicates();
    });

    showBtn.addEventListener("click", function () {
      inputs.forEach(function (x) { x.value = x._cell.answer; x.classList.remove("wrong", "dup"); });
      lockAll();
      if (!checked) {
        checked = true;
        cipherStats(p.cipher).tried++;
        saveStore();
      }
      result.className = "cb-result feedback oops";
      result.innerHTML = "<b>Here's the answer.</b> Read it through, then try a new puzzle. You'll get it next time!" +
        '<p class="cb-note">' + esc(p.plain) + "</p>";
      checkBtn.remove(); hintBtn.remove(); showBtn.remove();
      if (!actions.contains(nextBtn)) actions.insertBefore(nextBtn, actions.firstChild);
    });

    function lockAll() {
      allInputs().forEach(function (x) { x.readOnly = true; });
    }

    nextBtn.addEventListener("click", function () {
      if (testMode) {
        if (!done) return;
        if (ctx.index + 1 < ctx.total) {
          ctx.index++;
          renderPuzzle(ctx.puzzles[ctx.index], ctx);
        } else {
          renderTestResults(ctx);
        }
      } else {
        renderPuzzle(makePuzzle(p.cipher, p.level), ctx);
      }
    });
    sheetBtn.addEventListener("click", openSheet);
    printBtn.addEventListener("click", function () { printPuzzle(p); });

    show(view);
    if (testMode) startTimer(ctx);
    var first = inputs.filter(function (x) { return !x.readOnly; })[0];
    if (first && window.matchMedia("(pointer: fine)").matches) first.focus({ preventScroll: true });
  }

  // Aristocrat frequency table: count of each code letter, plus a row to fill in.
  function buildFreq(box, p) {
    var counts = {};
    p.words.forEach(function (w) {
      w.forEach(function (c) { if (c.group) counts[c.group] = (counts[c.group] || 0) + 1; });
    });
    var h = '<p class="cb-note">Letter counts. Type in the bottom row too; it fills in the puzzle.</p><div class="cb-table-wrap"><table class="cb-table cb-freq-table"><tr><th>Code</th>' +
      ALPHA.split("").map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr><tr><th>Count</th>" +
      ALPHA.split("").map(function (c) { return "<td>" + (counts[c] || "") + "</td>"; }).join("") + "</tr><tr><th>Letter</th>" +
      ALPHA.split("").map(function (c) {
        return "<td>" + (counts[c] ? '<input class="cb-in" maxlength="1" autocomplete="off" autocapitalize="characters" data-group="' + c + '" aria-label="Letter for code ' + c + '">' : "") + "</td>";
      }).join("") + "</tr></table></div>";
    box.innerHTML = h;
  }

  /* ---------- printing ---------- */
  function printPuzzle(p) {
    var c = cipherById(p.cipher);
    var old = document.getElementById("cb-print");
    if (old) old.remove();
    var sheet = el(
      '<div id="cb-print" class="cb-print">' +
        "<h1>Eureka! Codebusters: " + esc(c.name) + " (" + LEVELS[levelIndex(p.level)].name + ", " + p.points + " points)</h1>" +
        '<p>Name: ______________________</p>' +
        "<p>" + p.info + "</p>" +
        '<div class="cb-grid">' + p.words.map(function (w) {
          return '<span class="cb-word' + (p.wide ? " wide" : "") + '">' + w.map(function (x) {
            if (x.punct) return '<span class="cb-punct">' + esc(x.punct) + "</span>";
            return '<span class="cb-cell">' + (x.top ? '<span class="cb-keyletter">' + x.top + "</span>" : "") +
              '<span class="cb-code">' + x.show + '</span><span class="cb-blank"></span></span>';
          }).join("") + "</span>";
        }).join("") + "</div>" +
        '<div class="cb-print-key"><h2>Answer key</h2><p>' + esc(p.plain) + "</p></div>" +
      "</div>"
    );
    document.body.appendChild(sheet);
    document.body.classList.add("cb-printing");
    window.addEventListener("afterprint", function done() {
      document.body.classList.remove("cb-printing");
      window.removeEventListener("afterprint", done);
    });
    window.print();
  }

  /* ---------- mock test ---------- */
  function renderTestIntro() {
    var best = store.tests.length ? Math.max.apply(null, store.tests.map(function (t) { return t.pct; })) : null;
    var view = el(
      '<section class="quiz cb">' +
        '<div class="cb-top"></div>' +
        '<div class="card">' +
          "<h1>Mock test</h1>" +
          "<p>You'll get <b>" + TEST_SIZE + " puzzles</b> with different codes, each worth points like the real test. Try to finish in about <b>" + TEST_MINUTES + " minutes</b>. There are no hints, but the resource sheet is allowed, just like competition day.</p>" +
          "<p>Remember: 2 or fewer mistakes on a puzzle still gets full points, so don't give up on a puzzle that's almost done!</p>" +
          (best != null ? '<p class="cb-note">Your best so far: ' + best + "%</p>" : "") +
          '<div class="btn-row"><button type="button" class="btn">Start the test</button></div>' +
        "</div>" +
      "</section>"
    );
    view.querySelector(".cb-top").appendChild(backLink("All codes", renderHome));
    view.querySelector(".btn").addEventListener("click", function () {
      var others = shuffle(CIPHERS.filter(function (c) { return c.id !== "aristocrat"; })).slice(0, TEST_SIZE - 1);
      var chosen = shuffle(others.concat([cipherById("aristocrat")]));
      var ctx = {
        mode: "test", index: 0, total: TEST_SIZE, results: [], start: Date.now(),
        puzzles: chosen.map(function (c) { return makePuzzle(c.id, "medium"); })
      };
      renderPuzzle(ctx.puzzles[0], ctx);
    });
    show(view);
  }

  function startTimer(ctx) {
    function tick() {
      var t = document.getElementById("cb-timer");
      if (!t) { stopTimer(); return; }
      var s = Math.floor((Date.now() - ctx.start) / 1000);
      var m = Math.floor(s / 60);
      t.textContent = "⏱ " + m + ":" + ("0" + (s % 60)).slice(-2) + " of " + TEST_MINUTES + ":00";
      t.classList.toggle("over", m >= TEST_MINUTES);
    }
    tick();
    timerId = setInterval(tick, 1000);
  }

  function renderTestResults(ctx) {
    var total = 0, possible = 0;
    ctx.results.forEach(function (r) { total += r.score; possible += r.points; });
    var pct = Math.round((total / possible) * 100);
    var secs = Math.floor((Date.now() - ctx.start) / 1000);
    store.tests.push({ pct: pct, score: total, possible: possible, date: Date.now() });
    if (store.tests.length > 20) store.tests.shift();
    saveStore();
    var rows = ctx.results.map(function (r) {
      return "<tr><td>" + esc(cipherById(r.cipher).name) + "</td><td>" + r.errors + "</td><td>" + r.score + " / " + r.points + "</td></tr>";
    }).join("");
    var view = el(
      '<section class="results cb">' +
        '<div class="card score-card">' +
          '<div class="score-big">' + total + " / " + possible + "</div>" +
          "<p>" + (pct >= 80 ? "Amazing codebreaking!" : pct >= 50 ? "Nice work! Keep practicing the tricky ones." : "Good try! Every puzzle makes you faster.") + "</p>" +
          '<p class="cb-note">Time: ' + Math.floor(secs / 60) + " min " + (secs % 60) + " sec</p>" +
        "</div>" +
        '<div class="card"><table class="cb-results"><tr><th>Code</th><th>Mistakes</th><th>Points</th></tr>' + rows + "</table></div>" +
        '<div class="btn-row"><button type="button" class="btn" data-go="again">Take another test</button>' +
        '<button type="button" class="btn secondary" data-go="home">All codes</button></div>' +
      "</section>"
    );
    view.querySelector('[data-go="again"]').addEventListener("click", renderTestIntro);
    view.querySelector('[data-go="home"]').addEventListener("click", renderHome);
    show(view);
    if (pct >= 80 && window.EurekaConfetti) window.EurekaConfetti();
  }

  /* ---------- memory drills ---------- */
  function drillFace(id, letter) {
    if (id === "pigpen") return pigpen(letter);
    if (id === "knights") return knights(letter);
    var p = tapPair(letter);
    return '<span class="ct tap">' + p[0] + "," + p[1] + "</span>";
  }
  function drillLetters(id) {
    if (id === "knights") return ALPHA.replace("J", "").split("");
    if (id === "tapcode") return ALPHA.replace("K", "").split("");
    return ALPHA.split("");
  }
  function drillName(id, letter) {
    if (id === "knights" && letter === "I") return "I/J";
    if (id === "tapcode" && letter === "C") return "C/K";
    return letter;
  }

  function startDrill(id) {
    var letters = shuffle(drillLetters(id)).slice(0, 10);
    var cards = letters.map(function (letter, i) {
      var others = shuffle(drillLetters(id).filter(function (l) { return l !== letter; })).slice(0, 3);
      return { letter: letter, reverse: i % 2 === 1, choices: shuffle(others.concat([letter])) };
    });
    renderDrill({ id: id, cards: cards, index: 0, right: 0 });
  }

  function renderDrill(d) {
    var c = cipherById(d.id);
    var card = d.cards[d.index];
    var prompt = card.reverse
      ? "Which one is <b>" + drillName(d.id, card.letter) + "</b>?"
      : "Which letter is this?";
    var view = el(
      '<section class="quiz cb">' +
        '<div class="cb-top"></div>' +
        '<div class="card">' +
          '<div class="q-label"><span>' + esc(c.name) + " drill &middot; card " + (d.index + 1) + " of " + d.cards.length + "</span></div>" +
          '<p class="q-text">' + prompt + "</p>" +
          (card.reverse ? "" : '<div class="cb-drill-face">' + drillFace(d.id, card.letter) + "</div>") +
          '<div class="choices cb-drill-choices' + (card.reverse ? " faces" : "") + '"></div>' +
          '<div class="cb-result" aria-live="polite"></div>' +
          '<div class="btn-row cb-actions"></div>' +
        "</div>" +
      "</section>"
    );
    view.querySelector(".cb-top").appendChild(backLink("All codes", renderHome));
    var list = view.querySelector(".cb-drill-choices");
    var result = view.querySelector(".cb-result");
    var actions = view.querySelector(".cb-actions");
    card.choices.forEach(function (ch) {
      var b = el('<button type="button" class="choice">' + (card.reverse ? drillFace(d.id, ch) : "<b>" + drillName(d.id, ch) + "</b>") + "</button>");
      b.addEventListener("click", function () {
        var right = ch === card.letter;
        if (right) d.right++;
        list.querySelectorAll(".choice").forEach(function (x, i) {
          x.disabled = true;
          if (card.choices[i] === card.letter) x.classList.add("is-right");
          else if (x === b) x.classList.add("is-wrong");
        });
        result.className = "cb-result feedback " + (right ? "good" : "oops");
        result.innerHTML = right
          ? "<b>Yes!</b>"
          : "<b>Not quite.</b> That one is <b>" + drillName(d.id, card.letter) + "</b>: " + '<span class="cb-inline">' + drillFace(d.id, card.letter) + "</span>";
        var last = d.index + 1 >= d.cards.length;
        var next = el('<button type="button" class="btn">' + (last ? "See my score" : "Next card &rarr;") + "</button>");
        next.addEventListener("click", function () {
          if (last) renderDrillDone(d);
          else { d.index++; renderDrill(d); }
        });
        actions.appendChild(next);
        next.focus({ preventScroll: true });
      });
      list.appendChild(b);
    });
    show(view);
  }

  function renderDrillDone(d) {
    var c = cipherById(d.id);
    var prev = store.drills[d.id];
    store.drills[d.id] = prev == null ? d.right : Math.max(prev, d.right);
    saveStore();
    var view = el(
      '<section class="results cb">' +
        '<div class="card score-card">' +
          '<div class="score-big">' + d.right + " / " + d.cards.length + "</div>" +
          "<p>" + (d.right >= 9 ? "You really know your " + esc(c.name) + "!" : d.right >= 6 ? "Getting there! One more round?" : "Keep drilling. Draw the key a few times on paper, too!") + "</p>" +
        "</div>" +
        '<details class="card cb-learn"><summary>See the whole key</summary>' + c.learn + "</details>" +
        '<div class="btn-row"><button type="button" class="btn" data-go="again">Drill again</button>' +
        '<button type="button" class="btn secondary" data-go="puzzle">Try a puzzle</button>' +
        '<button type="button" class="btn secondary" data-go="home">All codes</button></div>' +
      "</section>"
    );
    view.querySelector('[data-go="again"]').addEventListener("click", function () { startDrill(d.id); });
    view.querySelector('[data-go="puzzle"]').addEventListener("click", function () { renderCipher(d.id); });
    view.querySelector('[data-go="home"]').addEventListener("click", renderHome);
    show(view);
    if (d.right === d.cards.length && window.EurekaConfetti) window.EurekaConfetti();
  }

  window.EurekaCodebusters = {
    open: renderHome,
    stop: stopTimer,
    solved: totalSolved,
    // exposed for tests
    _make: makePuzzle,
    _ciphers: CIPHERS
  };
})();
