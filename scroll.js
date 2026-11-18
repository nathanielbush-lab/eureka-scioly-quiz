/* Bring the top of a new screen into view, also when embedded.
 *
 * On the team's Google Site the quiz runs inside nested embed frames, and the
 * site page is what scrolls. window.scrollTo only moves this frame, so a
 * student who scrolled down the site page would land below the next question.
 * scrollIntoView scrolls every ancestor frame as well, cross-origin included.
 */
(function () {
  "use strict";

  var embedded = false;
  try { embedded = window.self !== window.top; } catch (e) { embedded = true; }

  var firstScreen = true;

  function toTop() {
    window.scrollTo(0, 0);
    // The first screen is drawn on page load; scrolling the site page then
    // would skip past the site's own heading and intro text.
    if (firstScreen) { firstScreen = false; return; }
    if (!embedded) return;
    var root = document.documentElement;
    // Added only now so the quiz looks unchanged until a student starts one.
    root.classList.add("clear-site-header");
    root.scrollIntoView({ block: "start", behavior: "auto" });
  }

  window.EurekaScroll = { toTop: toTop };
})();
