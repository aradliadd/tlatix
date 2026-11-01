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

  var media = $("p-media");
  if (p.img) {
    var img = document.createElement("img");
    img.src = p.img;
    img.alt = p.name;
    media.appendChild(img);
  } else {
    media.innerHTML = '<svg viewBox="0 0 24 24" width="96" height="96" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + c.icon + "</svg>";
  }

  // עוד מוצרים מאותה קטגוריה
  var related = PRODUCTS.filter(function (x) { return x.category === p.category && x.id !== p.id; }).slice(0, 4);
  if (related.length && window.TLATIX_CARD) {
    $("related-title").textContent = "עוד מוצרים " + c.name;
    $("p-related").innerHTML = related.map(window.TLATIX_CARD).join("");
    $("p-related-sec").hidden = false;
  }
})();
