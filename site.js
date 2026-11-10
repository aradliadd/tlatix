/* תלתיקס – אינטראקציות כלליות: תפריט נייד, אנימציות גלילה, קרוסלה */
(function () {
  var root = document.documentElement;
  root.classList.add("js");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // תפריט נייד
  var header = document.querySelector(".site-header");
  var toggle = header && header.querySelector(".nav-toggle");
  if (toggle) {
    var close = function () { header.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".main-nav a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && header.classList.contains("nav-open")) { close(); toggle.focus(); } });
  }

  // הופעה הדרגתית בגלילה
  var items = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window && items.length) {
    root.classList.add("motion");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  // זום עדין לתמונות גדולות בזמן גלילה
  var zooms = Array.prototype.slice.call(document.querySelectorAll("[data-zoom]"));
  if (!reduce && zooms.length) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var vh = window.innerHeight;
      zooms.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height))); // 0..1
        var mode = el.getAttribute("data-zoom");
        var z = mode === "in" ? 1.14 - p * 0.14 : 0.9 + Math.min(1, p * 2) * 0.1;
        el.style.setProperty("--z", z.toFixed(4));
      });
    };
    var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  // קרוסלה: כפתורי הבא/הקודם
  document.querySelectorAll("[data-rail]").forEach(function (wrap) {
    var rail = wrap.querySelector(".rail");
    var prev = wrap.querySelector("[data-rail-prev]");
    var next = wrap.querySelector("[data-rail-next]");
    if (!rail || !prev || !next) return;
    var step = function () { var li = rail.querySelector("li"); return li ? li.getBoundingClientRect().width + 20 : 300; };
    var behavior = reduce ? "auto" : "smooth";
    // בכיוון RTL גלילה קדימה היא לשמאל
    next.addEventListener("click", function () { rail.scrollBy({ left: -step(), behavior: behavior }); });
    prev.addEventListener("click", function () { rail.scrollBy({ left: step(), behavior: behavior }); });
    var sync = function () {
      var max = rail.scrollWidth - rail.clientWidth;
      var pos = Math.abs(rail.scrollLeft);
      prev.disabled = pos < 4;
      next.disabled = pos > max - 4;
    };
    rail.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  });
})();
