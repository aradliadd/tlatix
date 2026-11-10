/* =========================================================
   תלתיקס – קטלוג המוצרים
   ---------------------------------------------------------
   כאן מנהלים את כל המוצרים בחנות. כדי להוסיף מוצר:
   1. מעתיקים את אחת השורות בתוך TLATIX_PRODUCTS.
   2. משנים את הפרטים:
      id       – מזהה באנגלית, בלי רווחים (למשל "phone-stand")
      category – אחת מאלה: home, baby, car, office, garden
      name     – שם המוצר
      price    – מחיר בשקלים, מספר בלבד (למשל 49)
      desc     – משפט קצר על המוצר
      img      – נתיב לתמונה הראשית, למשל "img/products/phone-stand.jpg"
                 (אפשר להשאיר "" ואז יוצג אייקון של הקטגוריה)
      imgs     – (לא חובה) רשימת תמונות לגלריה בעמוד המוצר, הראשונה היא הראשית
   3. מוחקים את demo:true – זה מסמן מוצר לדוגמה.

   מוצרים לדוגמה (demo:true) מוצגים עם תגית "דוגמה".
   צריך למחוק אותם לפני שהאתר עולה לאוויר.
   ========================================================= */

window.TLATIX_CATEGORIES = [
  { id: "home",   name: "לבית",   page: "shop-home.html",
    desc: "מעמדים, מארגנים, ווים ופריטי עיצוב שמתאימים בדיוק למקום שלהם.",
    icon: '<path d="M3 11 12 4l9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/>' },
  { id: "baby",   name: "לילדים", page: "shop-baby.html",
    desc: "פריטים שימושיים ומעוצבים לחדר של הילדים.",
    icon: '<rect x="4" y="13" width="7" height="7" rx="1.2"/><rect x="13" y="13" width="7" height="7" rx="1.2"/><rect x="8.5" y="4" width="7" height="7" rx="1.2"/>' },
  { id: "car",    name: "לאוטו",  page: "shop-car.html",
    desc: "מחזיקים, מארגנים והפתרונות הקטנים שתמיד חסרים ברכב.",
    icon: '<path d="M4.5 14l1.4-4.3A2 2 0 0 1 7.8 8.3h8.4a2 2 0 0 1 1.9 1.4L19.5 14"/><rect x="3" y="14" width="18" height="4.5" rx="1.5"/><path d="M6.5 18.5v1.5M17.5 18.5v1.5"/>' },
  { id: "office", name: "למשרד",  page: "shop-office.html",
    desc: "מעמדים, מארגני כבלים ואביזרי שולחן שעושים סדר.",
    icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M3 13h18"/>' },
  { id: "garden", name: "לגינה",  page: "shop-garden.html",
    desc: "עציצים, תוויות לצמחים ואביזרים שעומדים בשמש ובגשם.",
    icon: '<path d="M12 21V11"/><path d="M12 11C12 7 9.5 5 5 5c0 4 2.5 6 7 6z"/><path d="M12 13.5c0-3 2.4-5 6-5 0 3-2.4 5-6 5z"/><path d="M7 21h10"/>' }
];

window.TLATIX_PRODUCTS = [
  // ---- לבית ----
  { id: "drawer-organizer", category: "home",   name: "מארגן מגירות מודולרי",  price: 89, desc: "תאים שנערמים ומשתלבים זה בזה, לסדר בכל מגירה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/cb9b5799-a2fc-4d80-9f1e-d2b99ba67047/images/13146813_d1184651-aad3-4b86-8fe6-b1995dcb9643_52c7ffbc-fc03-45df-ba6e-138697e07685/create_an_ultra_realistic_product_202605162238.jpeg",
    imgs: [
      "https://media.printables.com/media/prints/cb9b5799-a2fc-4d80-9f1e-d2b99ba67047/images/13146813_d1184651-aad3-4b86-8fe6-b1995dcb9643_52c7ffbc-fc03-45df-ba6e-138697e07685/thumbs/inside/1280x960/jpeg/create_an_ultra_realistic_product_202605162238.webp",
      "https://media.printables.com/media/prints/42598c8b-5921-4e1d-a214-22c45dd796b0/previews/thumbs/inside/1280x960/png/d1be5265-8b5c-4bb8-a53c-a49b4285a765.webp",
      "https://media.printables.com/media/prints/b4d97139-39e5-4245-944b-5a43ad1050e0/previews/thumbs/inside/1280x960/png/a6b0cca2-5c8b-4e59-965f-e8303d8fd16f.webp",
      "https://media.printables.com/media/prints/063504bf-4d8e-4193-a01d-49ff4676efa5/previews/thumbs/inside/1280x960/png/d8462749-54b8-46cc-9816-3b000dcf0509.webp"
    ] },
  { id: "wall-hook",        category: "home",   name: "וו קיר מינימליסטי",      price: 39, desc: "וו נקי לתלייה של מפתחות, תיקים ומעילים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/c66fb8d6-42c1-4ceb-9599-7174d119326d/images/12291714_582971ce-f1b1-4542-89c2-57f05843609a_1944b022-3648-462e-b9bf-9da9240fbe2f/chatgpt-image-12-3-2026-15_07_53.png" },
  { id: "fox-vase", category: "home", name: "אגרטל שועל", price: 119, desc: "אגרטל בצורת שועל בקווים גאומטריים, לפרחים יבשים או כפריט עיצוב. התמונה להמחשה.", img: "https://media.printables.com/media/prints/85c16ee5-ac6d-43dd-a8fa-9401b3d7a676/images/9326172_6d92f163-0e97-4c1a-88c1-7b860935b81a_91c6f49b-2e69-4a46-a7fa-997117a8ec23/thumbs/inside/1280x960/webp/dalle-2025-03-26-090200-a-3d-printable-vase-shaped-like-a-curled-up-fox-the-foxs-body-forms-the-main-str_NXObSmo.webp",
    imgs: [
      "https://media.printables.com/media/prints/85c16ee5-ac6d-43dd-a8fa-9401b3d7a676/images/9326172_6d92f163-0e97-4c1a-88c1-7b860935b81a_91c6f49b-2e69-4a46-a7fa-997117a8ec23/thumbs/inside/1280x960/webp/dalle-2025-03-26-090200-a-3d-printable-vase-shaped-like-a-curled-up-fox-the-foxs-body-forms-the-main-str_NXObSmo.webp",
      "https://media.printables.com/media/prints/61feb51f-50c8-4c12-8da5-29ed34f0d5f6/previews/thumbs/inside/1280x960/png/dc5ddeb6af9eb4faab6651cb0ef8dbcd6abcdf66.webp"
    ] },
  { id: "modern-vase", category: "home", name: "אגרטל מודרני", price: 99, desc: "אגרטל בעיצוב נקי ועכשווי שמוסיף עניין לכל מדף. התמונה להמחשה.", img: "https://media.printables.com/media/prints/1106873/images/8362784_2458e26f-db5f-429b-95db-e4381f3c2f3c_d9c9e05a-1fe8-4553-8e54-ff4f6745638f/thumbs/inside/1280x960/jpg/1.webp",
    imgs: [
      "https://media.printables.com/media/prints/1106873/images/8362784_2458e26f-db5f-429b-95db-e4381f3c2f3c_d9c9e05a-1fe8-4553-8e54-ff4f6745638f/thumbs/inside/1280x960/jpg/1.webp",
      "https://media.printables.com/media/prints/1106873/images/8362786_9a2d78d9-58bd-4ef6-8215-4a4d3798d962_28c5a0fe-607c-4720-a0ae-5e46d6b83dcb/thumbs/inside/1280x960/jpg/2.webp",
      "https://media.printables.com/media/prints/1106873/images/8362785_024447de-9016-46b4-a754-2d8a6c549809_6af5638f-c048-44e5-8cd9-94d0b6d12305/thumbs/inside/1280x960/jpg/3.webp"
    ] },
  { id: "spiral-vase", category: "home", name: "אגרטל ספירלה", price: 89, desc: "אגרטל מסתלסל עם קווים זורמים, לפרחים יבשים ולעיצוב. התמונה להמחשה.", img: "https://media.printables.com/media/prints/153705/images/1443200_23ca9df8-1fbc-4198-af95-e75f5a297217/thumbs/inside/1280x960/jpeg/whatsapp-image-2022-03-22-at-164322-2.webp",
    imgs: [
      "https://media.printables.com/media/prints/153705/images/1443200_23ca9df8-1fbc-4198-af95-e75f5a297217/thumbs/inside/1280x960/jpeg/whatsapp-image-2022-03-22-at-164322-2.webp",
      "https://media.printables.com/media/prints/153705/images/1443199_c7370cbd-ba7c-45da-87a4-e07ad233fb9c/thumbs/inside/1280x960/jpeg/whatsapp-image-2022-03-22-at-164322.webp",
      "https://media.printables.com/media/prints/153705/images/1443201_813d2705-b014-4c53-a63b-6d53a02ee3be/thumbs/inside/1280x960/jpeg/whatsapp-image-2022-03-22-at-164322-1.webp"
    ] },
  { id: "wooden-vase", category: "home", name: "אגרטל פרחים במראה עץ", price: 99, desc: "אגרטל עם מרקם בהשראת עץ, חם וטבעי. התמונה להמחשה.", img: "https://media.printables.com/media/prints/5b25e929-18e6-45e1-aa88-c51b891fd398/images/13253272_eec77032-978e-4ddf-b183-74508aa52462_d38ee78a-ee9e-4c52-a926-7cf231fba35b/thumbs/inside/1280x960/webp/76f11c0e8d753dc92ef1aa73429e7f841.webp",
    imgs: [
      "https://media.printables.com/media/prints/5b25e929-18e6-45e1-aa88-c51b891fd398/images/13253272_eec77032-978e-4ddf-b183-74508aa52462_d38ee78a-ee9e-4c52-a926-7cf231fba35b/thumbs/inside/1280x960/webp/76f11c0e8d753dc92ef1aa73429e7f841.webp",
      "https://media.printables.com/media/prints/c95f1150-4e2d-4bce-9744-9b9a68e8560f/images/13253276_a7969c2a-04c5-492b-b497-1f063fe4590b_3dd16b92-4401-47a2-8d68-ba54eedc10f8/thumbs/inside/1280x960/png/92d38aab64d4d8c508782253209dcecd1.webp",
      "https://media.printables.com/media/prints/766b5fff-0075-4c01-8d74-d1a031cf0701/previews/thumbs/inside/1280x960/png/8b56b5c5-2e6b-48b6-a83f-a5b0888262ac.webp"
    ] },
  { id: "cat-coasters", category: "home", name: "תחתיות פאזל חתולים", price: 89, desc: "סט תחתיות לכוסות שמשתלבות זו בזו כמו פאזל, עם מעמד. התמונה להמחשה.", img: "https://media.printables.com/media/prints/230067/images/2109025_c38ab0e5-2b64-444d-afa2-b4db2b64cb1b/thumbs/inside/1280x960/jpeg/img_4869.webp",
    imgs: [
      "https://media.printables.com/media/prints/230067/images/2109025_c38ab0e5-2b64-444d-afa2-b4db2b64cb1b/thumbs/inside/1280x960/jpeg/img_4869.webp",
      "https://media.printables.com/media/prints/230067/images/2093804_97eadd42-2d2f-46b5-b008-caf8349fd539/thumbs/inside/1280x960/jpeg/img_4808.webp",
      "https://media.printables.com/media/prints/230067/images/2093806_8245bb1f-b980-437f-8b0b-8ae19c8f601a/thumbs/inside/1280x960/jpeg/img_4669.webp",
      "https://media.printables.com/media/prints/230067/images/2093807_39a11b34-879a-4217-b42c-8a68f314e825/thumbs/inside/1280x960/jpeg/img_4807.webp",
      "https://media.printables.com/media/prints/230067/images/2093805_cf6a0163-db37-4ab1-895c-422bb8bd7f3d/thumbs/inside/1280x960/jpeg/img_4667.webp",
      "https://media.printables.com/media/prints/230067/images/2093817_9af28cd9-57a1-4ee0-92fd-a38b9d032d62/thumbs/inside/1280x960/jpeg/img_4809.webp"
    ] },
  { id: "coaster-set", category: "home", name: "סט תחתיות עם מעמד", price: 79, desc: "תחתיות לכוסות שנאספות למעמד קומפקטי על השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/858690/images/6599089_e3e3c0c3-64c0-4547-8019-63e279927a0f_b987232c-f1f5-4612-a7c7-c5bab01cdc8d/thumbs/inside/1280x960/jpg/img_7306.webp",
    imgs: [
      "https://media.printables.com/media/prints/858690/images/6599089_e3e3c0c3-64c0-4547-8019-63e279927a0f_b987232c-f1f5-4612-a7c7-c5bab01cdc8d/thumbs/inside/1280x960/jpg/img_7306.webp",
      "https://media.printables.com/media/prints/858690/images/6599087_d0b0934b-4121-4b9c-b84e-23678db93612_f38738b9-e21d-4456-bb51-4b47295b40eb/thumbs/inside/1280x960/jpg/img_7305.webp",
      "https://media.printables.com/media/prints/858690/images/6599088_bfff460f-1747-4daf-8941-93239655149f_a0ac7a97-7420-4c6d-acd9-6a4664a526a7/thumbs/inside/1280x960/jpg/img_7304.webp",
      "https://media.printables.com/media/prints/858690/images/6599090_5a1b2740-de56-462e-8a9f-ffb4ee7f28f5_bc2fcd6c-790d-4ea3-9785-1dd9f1e9cfce/thumbs/inside/1280x960/jpg/img_7307.webp",
      "https://media.printables.com/media/prints/858690/images/7925054_e63e63c3-f0b6-412e-bd13-2eea9ea3f245_3279a64b-c714-4221-88de-ad44002696d7/thumbs/inside/1280x960/png/capture.webp"
    ] },
  { id: "angel-lamp", category: "home", name: "מנורת מלאך", price: 169, desc: "פריט תאורה דקורטיבי שמפזר אור רך בחדר. התמונה להמחשה.", img: "https://media.printables.com/media/prints/129032/images/1235838_d7e8e5b3-fbc3-4f7b-9181-2071188e4a29/thumbs/inside/1280x960/png/angel-lamp.webp",
    imgs: [
      "https://media.printables.com/media/prints/129032/images/1235838_d7e8e5b3-fbc3-4f7b-9181-2071188e4a29/thumbs/inside/1280x960/png/angel-lamp.webp",
      "https://media.printables.com/media/prints/129032/stls/1235833_1bdef859-d1b6-4d4b-b848-5fabfd9a97a8/thumbs/inside/1280x960/png/angel_rounded2_preview.webp",
      "https://media.printables.com/media/prints/129032/stls/1235832_faa5520e-51b3-4aed-9e8e-dd3f0596a80a/thumbs/inside/1280x960/png/angel_rounded_preview.webp",
      "https://media.printables.com/media/prints/129032/stls/1235831_6300c771-6d81-470d-8729-aaf6f392d54e/thumbs/inside/1280x960/png/angel_hq_preview.webp"
    ] },
  { id: "leaf-key-holder", category: "home", name: "מתלה מפתחות עלה", price: 79, desc: "מתלה קיר בצורת עלה עם ווים למפתחות, ליד הדלת. התמונה להמחשה.", img: "https://media.printables.com/media/prints/c2fb6241-a83b-443d-826b-7a549d58ed28/images/11100005_aab745df-de6c-4d7f-83d6-1152fee340a4_935bbcba-c53d-4b33-b554-bea0e49041b4/thumbs/inside/1280x960/png/cover.webp",
    imgs: [
      "https://media.printables.com/media/prints/c2fb6241-a83b-443d-826b-7a549d58ed28/images/11100005_aab745df-de6c-4d7f-83d6-1152fee340a4_935bbcba-c53d-4b33-b554-bea0e49041b4/thumbs/inside/1280x960/png/cover.webp",
      "https://media.printables.com/media/prints/56a62ba9-f9e6-4315-bc7b-0c825553a5f9/previews/thumbs/inside/1280x960/png/eaf1e1be-73cf-49b3-8ccd-cbc3b53787c0.webp",
      "https://media.printables.com/media/prints/83ff5547-c3ac-444b-8d2a-dc77f7557f5f/previews/thumbs/inside/1280x960/png/e0b5c4e0-ccbf-49d6-857a-b20b6c6aa8d9.webp",
      "https://media.printables.com/media/prints/805713c0-6f3b-4895-80d6-868054536f8d/previews/thumbs/inside/1280x960/png/34c7b8e7-de44-4ea8-86f0-982d8214f4be.webp"
    ] },
  { id: "folding-hook", category: "home", name: "וו קיר מתקפל", price: 49, desc: "וו שנפתח כשצריך ונסגר צמוד לקיר כשלא. התמונה להמחשה.", img: "https://media.printables.com/media/prints/151259/images/1424206_382b9777-f458-494a-a5d4-974fd14e84b4/thumbs/inside/1280x960/png/22-085wallhookfoldshort.webp",
    imgs: [
      "https://media.printables.com/media/prints/151259/images/1424206_382b9777-f458-494a-a5d4-974fd14e84b4/thumbs/inside/1280x960/png/22-085wallhookfoldshort.webp",
      "https://media.printables.com/media/prints/151259/images/1426859_b8124a0d-5ba2-4f5b-8709-c58ca01f289b/thumbs/inside/1280x960/png/22-085wallhookfoldmk5.webp",
      "https://media.printables.com/media/prints/151259/images/1427268_2735b54c-21b2-43d4-9ad3-ffdc552efa65/thumbs/inside/1280x960/jpg/dsc0466122-085wallhookfold.webp",
      "https://media.printables.com/media/prints/151259/images/1427266_95c291d1-a8e0-405e-b30e-626a6639fd92/thumbs/inside/1280x960/jpg/dsc0466022-085wallhookfold.webp",
      "https://media.printables.com/media/prints/151259/images/1427267_a93a1eb2-eb99-4dd9-9ce6-6ca95ff58553/thumbs/inside/1280x960/jpg/dsc0466222-085wallhookfold.webp",
      "https://media.printables.com/media/prints/151259/images/1424150_7082a358-36a8-4209-bbef-e2c8298cc743/thumbs/inside/1280x960/png/22-085wallhookfold3.webp"
    ] },

  // ---- לילדים ----
  { id: "fidget-star", category: "baby", name: "כוכב פידג'ט", price: 49, desc: "כוכב מסתובב שמודפס בחלק אחד, להעסקת הידיים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/161631/stls/1504769_3868404b-be9c-4466-9203-ffabb3d57cfa/thumbs/inside/1280x960/png/8ptfidgetstar_preview.webp" },
  { id: "spiral-cone", category: "baby", name: "קונוס ספירלה", price: 59, desc: "צעצוע פידג'ט שבו הקונוס מחליק ומסתובב בתוך הספירלה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/950387/images/7252837_1a42d3fe-2d87-4322-ae1b-7a99c8ce76fe_ea3188b3-801f-4ee6-8666-84f796c29d54/thumbs/inside/1280x960/jpg/spiral-cone.webp",
    imgs: [
      "https://media.printables.com/media/prints/950387/images/7252837_1a42d3fe-2d87-4322-ae1b-7a99c8ce76fe_ea3188b3-801f-4ee6-8666-84f796c29d54/thumbs/inside/1280x960/jpg/spiral-cone.webp",
      "https://media.printables.com/media/prints/a9959514-1f02-4ac5-a392-5365913efdd5/images/10738217_09d2ff8e-6160-4601-a643-70cb09b72cef_a2ce3243-a6fe-40c2-853e-0439a33c3dae/thumbs/inside/1280x960/jpg/pxl_20250923_230025869raw-01cover.webp",
      "https://media.printables.com/media/prints/74bdc5c9-2f31-446c-b179-d2b336e0f72b/images/10738218_7a7b2b2e-d159-4f3f-b63a-c668f705b8cf_8ca4eaf7-a16e-4586-8024-110928ead9fc/thumbs/inside/1280x960/jpg/pxl_20250923_230012132raw-01cover.webp"
    ] },
  { id: "helix-screw", category: "baby", name: "בורג פידג'ט", price: 59, desc: "אום שמסתובב לאורך בורג מסתלסל, מהפנט ושקט. התמונה להמחשה.", img: "https://media.printables.com/media/prints/822018/images/6366650_ad754652-4d37-41f6-b2b8-91577778a13b_0021c1d0-08c7-4d4b-8e12-49859e912e5d/thumbs/inside/1280x960/png/pxl_20240329_221358815portrait22.webp",
    imgs: [
      "https://media.printables.com/media/prints/822018/images/6366650_ad754652-4d37-41f6-b2b8-91577778a13b_0021c1d0-08c7-4d4b-8e12-49859e912e5d/thumbs/inside/1280x960/png/pxl_20240329_221358815portrait22.webp",
      "https://media.printables.com/media/prints/822018/images/6345429_7897f9e7-a999-4527-a44d-fec11f6cf1df_b29e0ea0-2a41-4eab-af07-aeddb9ff3650/thumbs/inside/1280x960/jpg/pxl_20240327_145947804.webp",
      "https://media.printables.com/media/prints/822018/images/6345430_9037e058-0eec-4dc3-a9f2-d7ba6acfdb4d_2b9baaa0-737b-4c6d-b25c-5cc78883928f/thumbs/inside/1280x960/png/screenshot-2024-03-27-110246.webp",
      "https://media.printables.com/media/prints/822018/images/6345619_06ff44d2-f591-41b7-9c5a-9a108dc752f3_f0f9d62d-d47d-4fa2-9514-16f4b31b2897/thumbs/inside/1280x960/png/screenshot-2024-03-27-110203.webp"
    ] },
  { id: "chain-fidget", category: "baby", name: "שרשרת פידג'ט", price: 49, desc: "שרשרת חוליות גמישה שמודפסת מוכנה, בלי הרכבה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/231254/images/2105623_801d0ea2-f9be-46bb-80c2-eb78bddb7e95/thumbs/inside/1280x960/jpeg/photostudio_1656159309858-01.webp",
    imgs: [
      "https://media.printables.com/media/prints/231254/images/2105623_801d0ea2-f9be-46bb-80c2-eb78bddb7e95/thumbs/inside/1280x960/jpeg/photostudio_1656159309858-01.webp",
      "https://media.printables.com/media/prints/231254/images/2105979_feb35ebb-63c6-49db-8662-a6b544bd50f6/thumbs/inside/1280x960/jpg/photostudio_1656168546640.webp",
      "https://media.printables.com/media/prints/231254/images/2105978_49ecde78-b9ae-4ce8-a326-e952147250fc/thumbs/inside/1280x960/jpeg/pxl_20220625_144307172-01.webp",
      "https://media.printables.com/media/prints/231254/images/2105624_ec0e3764-fab4-4425-930d-6e68812c0842/thumbs/inside/1280x960/jpeg/pxl_20220625_115246283-01.webp",
      "https://media.printables.com/media/prints/231254/images/2105621_68ae4c1f-2938-4bf1-9b43-53142051e8dc/thumbs/inside/1280x960/jpeg/pxl_20220625_115710841-01.webp"
    ] },
  { id: "cat-spring-toy", category: "baby", name: "חתול קפיצי", price: 59, desc: "חתול על קפיץ שמתנדנד וקופץ בכל נגיעה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/414645/images/4246041_0906379c-1ca8-40af-a45a-8675b5ff9ee1/thumbs/inside/1280x960/png/cat-spring-2.webp",
    imgs: [
      "https://media.printables.com/media/prints/414645/images/4246041_0906379c-1ca8-40af-a45a-8675b5ff9ee1/thumbs/inside/1280x960/png/cat-spring-2.webp",
      "https://media.printables.com/media/prints/414645/images/4246123_1567b80f-3f55-4c60-92b9-9f0346f19467/thumbs/inside/1280x960/jpg/img_0910-copy.webp",
      "https://media.printables.com/media/prints/414645/stls/4246109_77153876-746b-450d-ac15-e2d1edf51d63/thumbs/inside/1280x960/png/cat-toy-spring_preview.webp",
      "https://media.printables.com/media/prints/414645/stls/3440780_49df06b5-1a16-4bc2-acb7-1d9391405942/thumbs/inside/1280x960/png/cat-toy-hex-spring_preview.webp"
    ] },
  { id: "mini-dino", category: "baby", name: "דינוזאור מיניאטורי", price: 39, desc: "דינוזאור קטן וחמוד לאוסף או למשחק. התמונה להמחשה.", img: "https://media.printables.com/media/prints/952228/images/7265077_7ba794ce-3271-497c-b80b-dbc580b687fe_71d7a917-b4b9-4aee-b612-dc072edb3a2b/thumbs/inside/1280x960/jpg/img_6233.webp",
    imgs: [
      "https://media.printables.com/media/prints/952228/images/7265077_7ba794ce-3271-497c-b80b-dbc580b687fe_71d7a917-b4b9-4aee-b612-dc072edb3a2b/thumbs/inside/1280x960/jpg/img_6233.webp",
      "https://media.printables.com/media/prints/952228/previews/thumbs/inside/1280x960/png/87cde64fabef42d1392d18ee0e439530c211a506.webp"
    ] },

  // ---- לאוטו ----
  { id: "headrest-hook",    category: "car",    name: "וו למשענת הראש",         price: 49, desc: "נתלה על מוטות משענת הראש ומחזיק תיקים ושקיות. התמונה להמחשה.", img: "https://media.printables.com/media/prints/99035/images/1001593_e5848fac-3e7c-4293-a9ab-ffb9c801e319/6a131f95-1709-4538-b2ba-a22c01760301.jpg",
    imgs: [
      "https://media.printables.com/media/prints/99035/images/1001593_e5848fac-3e7c-4293-a9ab-ffb9c801e319/thumbs/inside/1280x960/jpg/6a131f95-1709-4538-b2ba-a22c01760301.webp",
      "https://media.printables.com/media/prints/99035/stls/1001588_9cb8678f-0bb0-421c-976e-6c227a99966c/thumbs/inside/1280x960/png/seat-car-hook_preview.webp"
    ] },
  { id: "headrest-cup-holder", category: "car", name: "מחזיק כוס למשענת הראש", price: 59, desc: "נתלה על משענת הראש ומחזיק כוס או בקבוק לנוסעים מאחור. התמונה להמחשה.", img: "https://media.printables.com/media/prints/607008/images/4861497_79bb0655-6754-472b-9d2a-1c30ea62f1ba_d6c075b7-003f-438f-87fc-33f5f19d3f4d/thumbs/inside/1280x960/jpg/videocapture_20231012-140523.webp",
    imgs: [
      "https://media.printables.com/media/prints/607008/images/4861497_79bb0655-6754-472b-9d2a-1c30ea62f1ba_d6c075b7-003f-438f-87fc-33f5f19d3f4d/thumbs/inside/1280x960/jpg/videocapture_20231012-140523.webp",
      "https://media.printables.com/media/prints/607008/images/4861496_907b53bf-de4b-4f4a-af5a-28aee049fd77_8c2e0862-354c-471a-abb2-602cf327f6fc/thumbs/inside/1280x960/jpg/videocapture_20231012-140446.webp",
      "https://media.printables.com/media/prints/607008/images/4861498_a23544e7-7730-414e-a42d-aac3117071bf_ae60577d-fa4f-44dc-8810-5ee5c09628dd/thumbs/inside/1280x960/jpg/videocapture_20231012-140425.webp",
      "https://media.printables.com/media/prints/607008/images/4861499_bba2af19-3106-4c6f-bb05-ce81854e7822_d7e9fbbc-b7ec-49f4-85a9-62dddb3ff4f2/thumbs/inside/1280x960/jpg/videocapture_20231012-140344.webp"
    ] },
  { id: "car-trash-bin", category: "car", name: "פח אשפה לרכב", price: 79, desc: "פח קטן שנכנס למחזיק הכוסות ושומר על רכב נקי. התמונה להמחשה.", img: "https://media.printables.com/media/prints/204821/images/1883274_53242731-c491-494e-8f39-7a26a4394d30/thumbs/inside/1280x960/jpg/20220317_105915.webp",
    imgs: [
      "https://media.printables.com/media/prints/204821/images/1883274_53242731-c491-494e-8f39-7a26a4394d30/thumbs/inside/1280x960/jpg/20220317_105915.webp",
      "https://media.printables.com/media/prints/204821/images/1883185_f4dac9b7-8202-41bd-ac80-7d9946b791b3/thumbs/inside/1280x960/jpg/20220317_105758.webp",
      "https://media.printables.com/media/prints/204821/stls/1883133_635021b7-5922-4f2a-b245-a2ef76bfcc40/thumbs/inside/1280x960/png/trash-body_preview.webp",
      "https://media.printables.com/media/prints/204821/stls/1883134_0783cbdb-6bcb-4b20-8ad8-ab954c5ff97c/thumbs/inside/1280x960/png/trash-clips_preview.webp"
    ] },
  { id: "cup-phone-holder", category: "car", name: "מחזיק טלפון למחזיק הכוסות", price: 79, desc: "נכנס למחזיק הכוסות ומחזיק את הטלפון בגובה נוח. התמונה להמחשה.", img: "https://media.printables.com/media/prints/133717/images/1278889_d6a65476-7869-4a5f-b35d-2c3dace68702/thumbs/inside/1280x960/jpg/carphonecupholder.webp",
    imgs: [
      "https://media.printables.com/media/prints/133717/images/1278889_d6a65476-7869-4a5f-b35d-2c3dace68702/thumbs/inside/1280x960/jpg/carphonecupholder.webp",
      "https://media.printables.com/media/prints/133717/images/1278891_124a1ac6-5b6a-4208-96ef-1b2555d50bb7/thumbs/inside/1280x960/jpg/carphonecupholder_cad.webp",
      "https://media.printables.com/media/prints/133717/stls/1278887_dc03b2af-93f7-4378-aaf0-e5ae8090bdf5/thumbs/inside/1280x960/png/car_phone_holder_arm_preview.webp",
      "https://media.printables.com/media/prints/133717/stls/1278893_945a90af-9f79-4b7c-ad6e-8d083b6d0b9e/thumbs/inside/1280x960/png/car_phone_holder_clevis_preview.webp"
    ] },
  { id: "vent-phone-holder", category: "car", name: "מחזיק טלפון לפתח המיזוג", price: 59, desc: "נתפס בפתח המיזוג ומחזיק את הטלפון מול העיניים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/37146/images/367051_ab3b8cc2-0f32-4113-a32b-12646664cb67/thumbs/inside/1280x960/jpg/pocket-style-phone-holder-v7.webp",
    imgs: [
      "https://media.printables.com/media/prints/37146/images/367051_ab3b8cc2-0f32-4113-a32b-12646664cb67/thumbs/inside/1280x960/jpg/pocket-style-phone-holder-v7.webp",
      "https://media.printables.com/media/prints/37146/stls/367047_c21c24ff-6ac9-4a23-9e3e-bbf9979c92eb/thumbs/inside/1280x960/png/pocket-style-phone-holder-v5_preview.webp"
    ] },

  // ---- למשרד ----
  { id: "phone-stand", category: "office", name: "מעמד לטלפון", price: 59, desc: "מעמד יציב לטלפון על השולחן, לצפייה ולשיחות וידאו. התמונה להמחשה.", img: "https://media.printables.com/media/prints/555e3637-e21c-4351-b837-24a3838b1062/images/13529592_bf77a2aa-dae0-4644-b0d4-61d126a31ad8_acb50386-94af-4c18-aeef-668e679eb65d/thumbs/inside/1280x960/png/x.webp",
    imgs: [
      "https://media.printables.com/media/prints/555e3637-e21c-4351-b837-24a3838b1062/images/13529592_bf77a2aa-dae0-4644-b0d4-61d126a31ad8_acb50386-94af-4c18-aeef-668e679eb65d/thumbs/inside/1280x960/png/x.webp",
      "https://media.printables.com/media/prints/560322/images/6180414_8ae9e3c0-793e-41fa-b643-e7535725b71c_33eebbc9-be5b-482e-a543-315145da2d42/thumbs/inside/1280x960/png/k.webp",
      "https://media.printables.com/media/prints/f007da7f-bdef-463e-b377-92df860fd821/images/13451526_ced96ebd-ff28-4df7-8c24-1e2b4eb74c36_acb0ee8a-2f93-4d5a-9143-dd13dbd1b3e4/thumbs/inside/1280x960/png/w.webp",
      "https://media.printables.com/media/prints/560322/images/7619115_01ba1652-8d73-49c5-819b-388d7e8c2ba0_c0877b0a-920f-4924-b36d-6c7d4be1214e/thumbs/inside/1280x960/png/r.webp",
      "https://media.printables.com/media/prints/560322/images/6180247_f26b70d2-cb16-45e8-a843-bf8bf9dd4b9a_d6e4ccd5-9c54-4447-962e-180b37b89524/thumbs/inside/1280x960/png/j.webp",
      "https://media.printables.com/media/prints/026fb578-1229-47f3-bc4d-559bd6f7f83b/images/13376719_a0c130f2-8c08-4857-a10a-f87aff3a89ec_8e03934a-3780-4946-a32d-fe1d55a24131/thumbs/inside/1280x960/png/a.webp"
    ] },
  { id: "cable-organizer", category: "office", name: "מארגן כבלים", price: 39, desc: "מחזיק את כבלי הטעינה מסודרים בקצה השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/812711/images/6283273_fc30c6ed-cc92-4a31-8b3a-88b474fdf4cd_052e6a99-c336-4a55-813a-00248c6b840b/thumbs/inside/1280x960/webp/67e4a7c4-dbfd-495d-a827-420aeaa702c2_812711.webp",
    imgs: [
      "https://media.printables.com/media/prints/812711/images/6283273_fc30c6ed-cc92-4a31-8b3a-88b474fdf4cd_052e6a99-c336-4a55-813a-00248c6b840b/thumbs/inside/1280x960/webp/67e4a7c4-dbfd-495d-a827-420aeaa702c2_812711.webp",
      "https://media.printables.com/media/prints/812711/images/6283272_d2a3ed2d-2c4a-4a11-a580-9506c3be42fe_9a04ec4e-acba-464c-b160-ef4df4cd23d8/thumbs/inside/1280x960/png/large_display_fb0bad3a-63c0-489e-9203-f4e1c8cdf00e_812711.webp",
      "https://media.printables.com/media/prints/812711/images/6283274_047394c4-5d78-4a5d-990f-aefffdb8bd80_b7d2d3d2-07ae-498b-a81b-f377b1c4a9a2/thumbs/inside/1280x960/png/large_display_74f66cba-19b2-4191-863a-1ddf78fd20de_812711.webp",
      "https://media.printables.com/media/prints/812711/images/6283275_9876a16b-7df7-4ac5-9f9e-857c1956097b_589362a6-7b3d-4ba0-aff5-cdaf188a081b/thumbs/inside/1280x960/png/large_display_f016dba6-3d72-4a7b-bb2b-1747cfdac0a9_812711.webp",
      "https://media.printables.com/media/prints/812711/images/6283276_be58fc89-a000-4c54-8d86-7149beea2ce3_ae71beb9-919d-4864-8722-315c70e8a64d/thumbs/inside/1280x960/png/large_display_37f60008-9702-4669-a485-a3f8ccc72081_812711.webp",
      "https://media.printables.com/media/prints/812711/images/6283277_e2a73a43-459d-4569-a2e4-b20e73103c77_728e58ee-ef2f-4fa1-b31c-b4c91a3effea/thumbs/inside/1280x960/png/large_display_c0699f12-8b88-492c-8831-b8e26c38b1f5_812711.webp"
    ] },
  { id: "remote-desk-organizer", category: "office", name: "מארגן שולחן ושלטים", price: 119, desc: "תאים לשלטים, עטים ופריטים קטנים במקום אחד. התמונה להמחשה.", img: "https://media.printables.com/media/prints/f789170c-5877-43d5-8caf-074e5e194318/images/12009415_a2849648-0bcc-408d-a3d7-b24b2b027636_5eedb533-d8c1-4907-bbb3-ce11a10766b9/thumbs/inside/1280x960/png/f7575846-6c26-45ec-b163-2508a54279bc.webp",
    imgs: [
      "https://media.printables.com/media/prints/f789170c-5877-43d5-8caf-074e5e194318/images/12009415_a2849648-0bcc-408d-a3d7-b24b2b027636_5eedb533-d8c1-4907-bbb3-ce11a10766b9/thumbs/inside/1280x960/png/f7575846-6c26-45ec-b163-2508a54279bc.webp",
      "https://media.printables.com/media/prints/e424dbed-6da1-463c-931b-cd1ec05ca358/images/12009417_c6bcc524-c3bc-47a0-9cbf-d8781cc7e8cd_f5f067c3-3c1f-4e86-9195-ab21d109b446/thumbs/inside/1280x960/jpg/img_4525.webp",
      "https://media.printables.com/media/prints/60510ba3-d71b-476f-a4f1-a390932d9b3c/previews/thumbs/inside/1280x960/png/ca7341d5-41b3-4759-b6e3-cd5bc999ff31.webp"
    ] },
  { id: "pen-cable-organizer", category: "office", name: "מארגן עטים וכבלים", price: 79, desc: "מעמד לעטים עם חריצים לכבלי USB. התמונה להמחשה.", img: "https://media.printables.com/media/prints/f2bb6bb3-ae3b-4d50-a261-6fee6e5c09e3/images/13571257_87762896-3c10-4735-9cf8-fa15566f4e94_6c6a0c89-0b1f-4f52-bf27-9a8af1198f8c/thumbs/inside/1280x960/jpeg/making_collage_of_pen_holder_202608141753.webp",
    imgs: [
      "https://media.printables.com/media/prints/f2bb6bb3-ae3b-4d50-a261-6fee6e5c09e3/images/13571257_87762896-3c10-4735-9cf8-fa15566f4e94_6c6a0c89-0b1f-4f52-bf27-9a8af1198f8c/thumbs/inside/1280x960/jpeg/making_collage_of_pen_holder_202608141753.webp",
      "https://media.printables.com/media/prints/43552fc6-5d16-4491-8d62-b190b0216b3a/images/13571241_90bf09f9-4f8d-4b02-833a-c4a79283b2b9_a86fc57f-b116-44da-ad6c-89959312a0ed/thumbs/inside/1280x960/jpeg/data_cable_holder_rendering_prompt_202608141747.webp",
      "https://media.printables.com/media/prints/3aee3104-0c66-4e5f-8818-f0ea991b1077/images/13438641_42a5991c-d930-48e8-a372-62146fcc1647_bdf3958a-06f1-4310-bc74-5e6b34f33bce/thumbs/inside/1280x960/jpeg/five_customization_options_202607271507.webp",
      "https://media.printables.com/media/prints/24f60b15-d494-4188-9a2f-feaee1bb5889/images/13438642_ae198985-9ca5-45d9-911d-d808b2a016e1_0d86d032-dde4-474a-a6a3-f0786b5ef65f/thumbs/inside/1280x960/jpeg/angled_grid_pen_holder_2k_202607271446.webp"
    ] },
  { id: "gyroid-pen-holder", category: "office", name: "כוס עטים גירואיד", price: 59, desc: "כוס עטים בדוגמת גירואיד מחוררת ומרשימה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/4337/images/27948_695f3458-86c6-4ca8-a874-b4a56f75a44a/thumbs/inside/1280x960/jpg/pen_holder.webp",
    imgs: [
      "https://media.printables.com/media/prints/4337/images/27948_695f3458-86c6-4ca8-a874-b4a56f75a44a/thumbs/inside/1280x960/jpg/pen_holder.webp",
      "https://media.printables.com/media/prints/4337/images/27947_77e4d53b-5924-4b07-ac91-d618336c383c/thumbs/inside/1280x960/jpg/p1188758.webp",
      "https://media.printables.com/media/prints/4337/images/610347_3cb5f2cf-3ff9-4223-9162-1319c4017179/thumbs/inside/1280x960/jpg/image-from-ios-1.webp"
    ] },
  { id: "throne-headphone-stand", category: "office", name: "מעמד אוזניות כס", price: 149, desc: "מעמד אוזניות בעיצוב כס מלכות גותי. התמונה להמחשה.", img: "https://media.printables.com/media/prints/c02fc780-4b0b-4a43-a279-08e1f033e790/images/10437799_482efed9-65b8-4257-924e-479fa524bcf9_409cdd16-e9d6-433c-b99b-97fc3f517ca8/thumbs/inside/1280x960/jpg/screenshot_3.webp",
    imgs: [
      "https://media.printables.com/media/prints/c02fc780-4b0b-4a43-a279-08e1f033e790/images/10437799_482efed9-65b8-4257-924e-479fa524bcf9_409cdd16-e9d6-433c-b99b-97fc3f517ca8/thumbs/inside/1280x960/jpg/screenshot_3.webp",
      "https://media.printables.com/media/prints/a161981a-94cc-404b-adf1-5d6a357cae6f/images/10437796_8eb20096-da97-48c8-bd14-c96e64770456_36084ca1-5e91-4ea4-bd4b-511146edd8ec/thumbs/inside/1280x960/png/6a8f9310-6d39-48ec-b2c3-b1f364afcd35.webp",
      "https://media.printables.com/media/prints/4415f8fa-1d06-4de2-b80f-960747e84c98/previews/thumbs/inside/1280x960/png/ad34d35c-91fe-4d6c-84d5-89db9e746bec.webp"
    ] },
  { id: "headphone-stand", category: "office", name: "מעמד אוזניות", price: 89, desc: "מעמד פשוט ויציב לאוזניות על השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/319311/images/2761568_f3f6ae2f-e896-45e7-a1ef-b162ec490ef9/thumbs/inside/1280x960/png/headphone_stand_2022-nov-18_07-55-55am-000_customizedview33196049187.webp",
    imgs: [
      "https://media.printables.com/media/prints/319311/images/2761568_f3f6ae2f-e896-45e7-a1ef-b162ec490ef9/thumbs/inside/1280x960/png/headphone_stand_2022-nov-18_07-55-55am-000_customizedview33196049187.webp",
      "https://media.printables.com/media/prints/319311/images/2761572_c4428203-e030-49ce-92cb-97361f9d2657/thumbs/inside/1280x960/png/headphone_stand_2022-nov-18_07-56-42am-000_customizedview37857471049.webp",
      "https://media.printables.com/media/prints/319311/stls/2758957_a93f6d8b-906a-4723-8e39-a3cb3925bfee/thumbs/inside/1280x960/png/headphone_stand_preview.webp"
    ] },
  { id: "modular-desk-organizer", category: "office", name: "מארגן שולחן מודולרי", price: 119, desc: "תאים שמחברים ומסדרים לפי מה שיש על השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/997093/images/7588035_d7065cf8-9944-4100-8a56-20d248219c68_4bb51630-c133-448d-99e1-549a74c1ac42/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123326.webp",
    imgs: [
      "https://media.printables.com/media/prints/997093/images/7588035_d7065cf8-9944-4100-8a56-20d248219c68_4bb51630-c133-448d-99e1-549a74c1ac42/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123326.webp",
      "https://media.printables.com/media/prints/997093/images/7588036_9363e801-19eb-47ad-878f-96326d7f5f6d_51b077f4-e2fc-4af5-95c1-a56b9077fef5/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123347.webp",
      "https://media.printables.com/media/prints/997093/images/7588037_f8b131c9-303a-4ffd-b6ca-2382f231f93e_7b602d16-101f-4709-aa32-8c75d68be35a/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123405.webp",
      "https://media.printables.com/media/prints/997093/images/7588063_a2ff80ed-642c-4c27-88a1-c559fa2d490d_7d9634ea-876d-4605-aee6-fa33ce31aa49/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123433.webp",
      "https://media.printables.com/media/prints/997093/images/7588084_d7a869e8-9afd-41d5-ab5e-4127a4d05c49_d7365b1b-490e-456e-9fd0-9a1c3425d196/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123446.webp",
      "https://media.printables.com/media/prints/997093/images/7588086_4bbbdd26-08f6-44ea-b841-d9cdbf8def90_bf2612c3-3ec0-4dc4-94d7-abe2d272a70d/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123513.webp"
    ] },
  { id: "geometric-organizer", category: "office", name: "מארגן גאומטרי", price: 79, desc: "מארגן בעיצוב גאומטרי לעטים, ומתאים גם ככיסוי לעציץ. התמונה להמחשה.", img: "https://media.printables.com/media/prints/dfe3279f-9459-487d-b11c-11bc310f4ac2/images/13205563_92fdc208-4b39-448f-bdc5-03dd9d0ec744_9b867270-f166-4750-8d92-5dd79b9548bc/thumbs/inside/1280x960/jpeg/add_professional_technical_dimension_labels_202606241134.webp",
    imgs: [
      "https://media.printables.com/media/prints/dfe3279f-9459-487d-b11c-11bc310f4ac2/images/13205563_92fdc208-4b39-448f-bdc5-03dd9d0ec744_9b867270-f166-4750-8d92-5dd79b9548bc/thumbs/inside/1280x960/jpeg/add_professional_technical_dimension_labels_202606241134.webp",
      "https://media.printables.com/media/prints/91dd2371-a685-4cc5-b472-fd32d1db26ce/previews/thumbs/inside/1280x960/png/6fdc10c8-78ef-4c6b-b4bb-fbe38af0d7d9.webp"
    ] },

  // ---- לגינה ----
  { id: "ribbed-planter",   category: "garden", name: "עציץ מצולע על רגליים",   price: 129, desc: "עציץ גלילי עם מרקם פסים ורגליים קצרות שמרימות אותו מהמשטח. התמונה להמחשה.", img: "https://media.printables.com/media/prints/a7392a3f-2bfb-4ff5-8550-754078adb27f/images/11007455_8187c1cb-45c9-4a8b-9109-a159ac738b7f_69bf32b2-8639-48d3-9215-e36857d13c88/img2.png",
    imgs: [
      "https://media.printables.com/media/prints/a7392a3f-2bfb-4ff5-8550-754078adb27f/images/11007455_8187c1cb-45c9-4a8b-9109-a159ac738b7f_69bf32b2-8639-48d3-9215-e36857d13c88/thumbs/inside/1280x960/png/img2.webp",
      "https://media.printables.com/media/prints/ff8031e0-a02a-4d77-97b6-e18e30181eb0/images/11007468_ab5d058a-0d3d-4ce3-8bff-fe436a7c6676_b88336bb-9abf-474b-b154-30ab3a839a15/thumbs/inside/1280x960/png/capavaso2.webp",
      "https://media.printables.com/media/prints/5efd2c68-060d-44d4-8af5-e1c65b1f55c9/previews/thumbs/inside/1280x960/png/d5cdca8e-d192-487a-a1cc-c146ec547de9.webp",
      "https://media.printables.com/media/prints/ce284e3f-617c-42ae-8fc5-52000ef29f78/previews/thumbs/inside/1280x960/png/508f72ee-3c2f-40ec-a752-d70603b5aa20.webp"
    ] },
  { id: "snake-planter", category: "garden", name: "עציץ נחש", price: 139, desc: "עציץ בצורת נחש מפותל, פריט שמושך את העין. התמונה להמחשה.", img: "https://media.printables.com/media/prints/4672fc71-56b4-4d60-8084-fafd70077c87/images/12755883_2d70eee5-f6e8-4459-9d82-bc8d89717f03_ed4eb1c8-34eb-4848-9de1-5a1c8b8054ab/thumbs/inside/1280x960/png/grok-image-b8eba932-36ff-4448-8f71-fa9e740c132b.webp",
    imgs: [
      "https://media.printables.com/media/prints/4672fc71-56b4-4d60-8084-fafd70077c87/images/12755883_2d70eee5-f6e8-4459-9d82-bc8d89717f03_ed4eb1c8-34eb-4848-9de1-5a1c8b8054ab/thumbs/inside/1280x960/png/grok-image-b8eba932-36ff-4448-8f71-fa9e740c132b.webp",
      "https://media.printables.com/media/prints/f0ab3977-7de3-460d-b492-1613536a3b6a/images/12755884_4fd8c69e-425d-4846-b627-b3fb325d5820_df72b5f0-f731-42ed-8ecb-0652833802ff/thumbs/inside/1280x960/png/grok-image-7e31b4bf-dc64-435a-ae3f-610818710610.webp",
      "https://media.printables.com/media/prints/e615fb47-7174-4899-9dab-a3224b348078/previews/thumbs/inside/1280x960/png/d8bf458b-3917-42d9-844f-abdebb61ee61.webp",
      "https://media.printables.com/media/prints/443b8668-e5d3-4082-94e2-00e68f2bd6f4/previews/thumbs/inside/1280x960/png/affe0935-578b-4bfe-80e9-31f76512d455.webp"
    ] },
  { id: "herb-planter", category: "garden", name: "עציץ תבלינים משקה-עצמי", price: 119, desc: "עציץ עם מאגר מים שמשקה את התבלינים לאט. התמונה להמחשה.", img: "https://media.printables.com/media/prints/61288/images/642608_6708bb0d-9d0e-4a2a-be5a-212ad28b042d/thumbs/inside/1280x960/jpg/img_20210324_175006.webp",
    imgs: [
      "https://media.printables.com/media/prints/61288/images/642608_6708bb0d-9d0e-4a2a-be5a-212ad28b042d/thumbs/inside/1280x960/jpg/img_20210324_175006.webp",
      "https://media.printables.com/media/prints/61288/images/642614_7c2ef717-d910-4a9c-a0a7-c9fc8cdadc60/thumbs/inside/1280x960/jpg/p1010049.webp",
      "https://media.printables.com/media/prints/61288/images/642610_036215d3-4825-4970-bf95-c1ed584af4db/thumbs/inside/1280x960/jpg/p1010035.webp",
      "https://media.printables.com/media/prints/61288/images/642611_456b369a-7fd5-4a9c-829c-98a1b4e54209/thumbs/inside/1280x960/jpg/p1010033.webp",
      "https://media.printables.com/media/prints/61288/images/642613_1e3ecccb-18dc-45b1-93ef-b41b57536c16/thumbs/inside/1280x960/jpg/p1010048.webp",
      "https://media.printables.com/media/prints/61288/images/642612_b2b062f3-8096-4866-92f5-e68ebf458433/thumbs/inside/1280x960/jpg/p1010045.webp"
    ] },
  { id: "bird-feeder", category: "garden", name: "בית האכלה לציפורים", price: 129, desc: "בית קטן לזרעים שתולים על עץ או במרפסת. התמונה להמחשה.", img: "https://media.printables.com/media/prints/663646/images/5226446_0e976e6e-16c4-4620-8af6-dfd6076163b2_86c0b793-f4e0-4508-8ea2-2c71bff88461/thumbs/inside/1280x960/jpg/photo-1.webp",
    imgs: [
      "https://media.printables.com/media/prints/663646/images/5226446_0e976e6e-16c4-4620-8af6-dfd6076163b2_86c0b793-f4e0-4508-8ea2-2c71bff88461/thumbs/inside/1280x960/jpg/photo-1.webp",
      "https://media.printables.com/media/prints/663646/images/5226442_6818bff1-af9c-4220-81a8-cb96972177ab_0e2a0e71-1299-4b73-adbd-33dee0a93299/thumbs/inside/1280x960/jpg/feederhouse.webp",
      "https://media.printables.com/media/prints/663646/stls/5226425_43d538e2-bd30-4aca-aea9-03c9938f7dd7_61b4f0ed-1da4-4e29-9500-86c675ede034/thumbs/inside/1280x960/png/connection-lath-roof-part_preview.webp",
      "https://media.printables.com/media/prints/663646/stls/5226428_6e97c029-7e1f-4939-ae8a-548b70e6c9a1_1f6fe570-f23c-4cda-990a-42c153e64d98/thumbs/inside/1280x960/png/roof-part_preview.webp"
    ] },
  { id: "plant-labels", category: "garden", name: "שלטים לשתילים", price: 49, desc: "סט שלטים לנעיצה באדמה, לסמן מה שתול איפה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/28890/images/287715_961abc51-2a03-41f5-b983-c42db662a555/thumbs/inside/1280x960/jpg/plant-label.webp",
    imgs: [
      "https://media.printables.com/media/prints/28890/images/287715_961abc51-2a03-41f5-b983-c42db662a555/thumbs/inside/1280x960/jpg/plant-label.webp",
      "https://media.printables.com/media/prints/28890/stls/287714_f6838948-f891-4ac7-8b55-94d3ee6c8352/thumbs/inside/1280x960/png/label_preview.webp"
    ] }
];
