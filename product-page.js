/* תלתיקס – עמוד מוצר בודד: product.html?id=<מזהה המוצר> */
(function () {
  var CATS = window.TLATIX_CATEGORIES || [];
  var PRODUCTS = window.TLATIX_PRODUCTS || [];
  var id = new URLSearchParams(location.search).get("id");
  var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
  function $(i) { return document.getElementById(i); }

  if (!p) {
    $("p-title").textContent = "המוצר לא נמצא";
    $("p-crumb-cat").parentNode.hidden = true;
    $("p-crumb-name").textContent = "מוצר לא נמצא";
    $("p-media").hidden = true;
    $("p-price").hidden = true;
    document.querySelector(".pdp-facts").hidden = true;
    $("p-cat").hidden = true;
    $("p-desc").textContent = "ייתכן שהמוצר הוסר מהחנות. אפשר לחזור לחנות ולראות את כל המוצרים.";
    $("p-order").hidden = true;
    $("p-back").textContent = "לחנות";
    return;
  }

  var c = CATS.filter(function (x) { return x.id === p.category; })[0] || { name: "", page: "shop.html", icon: "" };
  document.body.setAttribute("data-cat", p.category);
  document.title = p.name + " – החנות של תלתיקס";
  var md = document.querySelector('meta[name="description"]');
  if (md && p.desc) md.setAttribute("content", p.name + " – " + p.desc);

  $("p-crumb-cat").textContent = c.name;
  $("p-crumb-cat").href = c.page;
  $("p-crumb-name").textContent = p.name;
  $("p-cat").textContent = c.name;
  $("p-cat").href = c.page;
  $("p-title").textContent = p.name;
  $("p-price").innerHTML = '<span class="sr-only">מחיר: </span>₪' + Number(p.price);
  $("p-desc").textContent = (p.desc || "").replace(/\s*התמונה להמחשה\.?\s*$/, "");
  $("p-order").href = "index.html?product=" + encodeURIComponent(p.id) + "#contact";
  $("p-order").setAttribute("aria-label", "להזמנה: " + p.name);
  $("p-back").href = c.page;
  $("p-back").textContent = "עוד מוצרים " + c.name;

  // גלריית תמונות
  var media = $("p-media");
  var list = (p.imgs && p.imgs.length ? p.imgs : (p.img ? [p.img] : []));
  if (!list.length) {
    media.innerHTML = '<svg viewBox="0 0 24 24" width="96" height="96" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + c.icon + "</svg>";
  } else {
    var cur = 0;
    var img = document.createElement("img");
    img.alt = p.name;
    media.appendChild(img);
    var thumbs = $("p-thumbs");
    var counter = $("p-counter");

    function show(i) {
      cur = (i + list.length) % list.length;
      img.src = list[cur];
      img.alt = p.name + (list.length > 1 ? " – תמונה " + (cur + 1) + " מתוך " + list.length : "");
      if (counter) counter.textContent = (cur + 1) + " / " + list.length;
      if (thumbs) thumbs.querySelectorAll("button").forEach(function (b, j) {
        b.setAttribute("aria-current", j === cur ? "true" : "false");
      });
    }

    if (list.length > 1) {
      // תמונות קטנות לבחירה
      var renderThumbs = function () {
        thumbs.innerHTML = list.map(function (u, j) {
          return '<li><button type="button" aria-label="הצג תמונה ' + (j + 1) + ' מתוך ' + list.length + '"><img src="' + u.replace(/"/g, "&quot;") + '" alt="" loading="lazy"></button></li>';
        }).join("");
        thumbs.querySelectorAll("button").forEach(function (b, j) {
          b.addEventListener("click", function () { show(j); });
        });
        thumbs.hidden = list.length < 2;
      };
      renderThumbs();
      // חיצים (בעברית "הבא" הוא שמאלה)
      var prev = document.createElement("button");
      prev.type = "button"; prev.className = "pdp-arrow pdp-prev"; prev.setAttribute("aria-label", "התמונה הקודמת");
      prev.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 6l6 6-6 6"/></svg>';
      var next = document.createElement("button");
      next.type = "button"; next.className = "pdp-arrow pdp-next"; next.setAttribute("aria-label", "התמונה הבאה");
      next.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M15 6l-6 6 6 6"/></svg>';
      prev.addEventListener("click", function () { show(cur - 1); });
      next.addEventListener("click", function () { show(cur + 1); });
      media.appendChild(prev);
      media.appendChild(next);
      if (counter) counter.hidden = false;
      // החלקה במובייל
      var x0 = null;
      media.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      media.addEventListener("touchend", function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) show(dx > 0 ? cur + 1 : cur - 1); // RTL: החלקה ימינה = הבא
        x0 = null;
      });
      // תמונה שלא נטענת – מסירים אותה מהגלריה
      img.addEventListener("error", function () {
        if (list.length < 2) return;
        list.splice(cur, 1);
        if (cur >= list.length) cur = 0;
        renderThumbs();
        if (list.length < 2) { prev.hidden = true; next.hidden = true; if (counter) counter.hidden = true; }
        show(cur);
      });
    }
    show(0);
  }

  // עוד מוצרים מאותה קטגוריה
  var related = PRODUCTS.filter(function (x) { return x.category === p.category && x.id !== p.id; }).slice(0, 4);
  if (related.length && window.TLATIX_CARD) {
    $("related-title").textContent = "עוד מוצרים " + c.name;
    $("p-related").innerHTML = related.map(window.TLATIX_CARD).join("");
    $("p-related-sec").hidden = false;
  }
})();
