/* תלתיקס – הצגת מוצרים בחנות. את המוצרים עצמם עורכים ב-products.js */
(function () {
  var CATS = window.TLATIX_CATEGORIES || [];
  var PRODUCTS = window.TLATIX_PRODUCTS || [];
  var PREVIEW_COUNT = 4; // כמה מוצרים מוצגים לכל קטגוריה בעמוד החנות הראשי

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function cat(id) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i];
    return null;
  }
  function icon(paths, size) {
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + paths + "</svg>";
  }
  function byCategory(id) {
    return PRODUCTS.filter(function (p) { return p.category === id; });
  }
  function countLabel(n) {
    return n === 1 ? "מוצר אחד" : n + " מוצרים";
  }

  function card(p) {
    var c = cat(p.category);
    var media = p.img
      ? '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy">'
      : icon(c ? c.icon : "", 64);
    return (
      '<article class="product" data-cat="' + esc(p.category) + '">' +
        '<div class="product-img">' + media +
          (p.demo ? '<span class="badge">דוגמה</span>' : "") +
        "</div>" +
        '<div class="product-body">' +
          "<h3>" + esc(p.name) + "</h3>" +
          (p.desc ? "<p>" + esc(p.desc) + "</p>" : "") +
          '<div class="product-foot">' +
            '<span class="price"><span class="sr-only">מחיר: </span>₪' + esc(p.price) + "</span>" +
            '<a class="btn-order" href="index.html?product=' + encodeURIComponent(p.id) + '#contact" aria-label="להזמנה: ' + esc(p.name) + '">להזמנה</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  // עמוד החנות הראשי: תצוגה מקדימה של כל קטגוריה
  document.querySelectorAll("[data-preview]").forEach(function (box) {
    var id = box.getAttribute("data-preview");
    var list = byCategory(id);
    var count = document.querySelector('[data-count="' + id + '"]');
    if (count) count.textContent = list.length ? countLabel(list.length) : "בקרוב";
    if (!list.length) return; // נשאר מצב "בקרוב"
    box.innerHTML = list.slice(0, PREVIEW_COUNT).map(card).join("");
  });

  // ספירת מוצרים בכרטיסי הקטגוריות
  document.querySelectorAll("[data-tile-count]").forEach(function (el) {
    var n = byCategory(el.getAttribute("data-tile-count")).length;
    el.textContent = n ? countLabel(n) : "בקרוב";
  });

  // עמוד קטגוריה: כל המוצרים + מיון
  var grid = document.querySelector("[data-category-grid]");
  if (grid) {
    var id = grid.getAttribute("data-category-grid");
    var all = byCategory(id);
    var status = document.getElementById("result-count");
    var sort = document.getElementById("sort");
    function render() {
      var list = all.slice();
      if (sort && sort.value === "low") list.sort(function (a, b) { return a.price - b.price; });
      if (sort && sort.value === "high") list.sort(function (a, b) { return b.price - a.price; });
      if (status) status.textContent = list.length ? countLabel(list.length) : "";
      if (!list.length) return;
      grid.innerHTML = list.map(card).join("");
    }
    if (sort) sort.addEventListener("change", render);
    if (!all.length && sort) sort.closest(".toolbar-sort").hidden = true;
    render();
  }
})();
