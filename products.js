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
      img      – נתיב לתמונה, למשל "img/products/phone-stand.jpg"
                 (אפשר להשאיר "" ואז יוצג אייקון של הקטגוריה)
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
  { id: "drawer-organizer", category: "home",   name: "מארגן מגירות מודולרי",  price: 49, desc: "תאים שנערמים ומשתלבים זה בזה, לסדר בכל מגירה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/cb9b5799-a2fc-4d80-9f1e-d2b99ba67047/images/13146813_d1184651-aad3-4b86-8fe6-b1995dcb9643_52c7ffbc-fc03-45df-ba6e-138697e07685/create_an_ultra_realistic_product_202605162238.jpeg" },
  { id: "wall-hook",        category: "home",   name: "וו קיר מינימליסטי",      price: 19, desc: "וו נקי לתלייה של מפתחות, תיקים ומעילים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/c66fb8d6-42c1-4ceb-9599-7174d119326d/images/12291714_582971ce-f1b1-4542-89c2-57f05843609a_1944b022-3648-462e-b9bf-9da9240fbe2f/chatgpt-image-12-3-2026-15_07_53.png" },
  { id: "fox-vase", category: "home", name: "אגרטל שועל", price: 59, desc: "אגרטל בצורת שועל בקווים גאומטריים, לפרחים יבשים או כפריט עיצוב. התמונה להמחשה.", img: "https://media.printables.com/media/prints/85c16ee5-ac6d-43dd-a8fa-9401b3d7a676/images/9326172_6d92f163-0e97-4c1a-88c1-7b860935b81a_91c6f49b-2e69-4a46-a7fa-997117a8ec23/thumbs/inside/1280x960/webp/dalle-2025-03-26-090200-a-3d-printable-vase-shaped-like-a-curled-up-fox-the-foxs-body-forms-the-main-str_NXObSmo.webp" },
  { id: "modern-vase", category: "home", name: "אגרטל מודרני", price: 55, desc: "אגרטל בעיצוב נקי ועכשווי שמוסיף עניין לכל מדף. התמונה להמחשה.", img: "https://media.printables.com/media/prints/1106873/images/8362784_2458e26f-db5f-429b-95db-e4381f3c2f3c_d9c9e05a-1fe8-4553-8e54-ff4f6745638f/thumbs/inside/1280x960/jpg/1.webp" },
  { id: "spiral-vase", category: "home", name: "אגרטל ספירלה", price: 45, desc: "אגרטל מסתלסל עם קווים זורמים, לפרחים יבשים ולעיצוב. התמונה להמחשה.", img: "https://media.printables.com/media/prints/153705/images/1443200_23ca9df8-1fbc-4198-af95-e75f5a297217/thumbs/inside/1280x960/jpeg/whatsapp-image-2022-03-22-at-164322-2.webp" },
  { id: "wooden-vase", category: "home", name: "אגרטל פרחים במראה עץ", price: 55, desc: "אגרטל עם מרקם בהשראת עץ, חם וטבעי. התמונה להמחשה.", img: "https://media.printables.com/media/prints/5b25e929-18e6-45e1-aa88-c51b891fd398/images/13253272_eec77032-978e-4ddf-b183-74508aa52462_d38ee78a-ee9e-4c52-a926-7cf231fba35b/thumbs/inside/1280x960/webp/76f11c0e8d753dc92ef1aa73429e7f841.webp" },
  { id: "cat-coasters", category: "home", name: "תחתיות פאזל חתולים", price: 49, desc: "סט תחתיות לכוסות שמשתלבות זו בזו כמו פאזל, עם מעמד. התמונה להמחשה.", img: "https://media.printables.com/media/prints/230067/images/2109025_c38ab0e5-2b64-444d-afa2-b4db2b64cb1b/thumbs/inside/1280x960/jpeg/img_4869.webp" },
  { id: "coaster-set", category: "home", name: "סט תחתיות עם מעמד", price: 39, desc: "תחתיות לכוסות שנאספות למעמד קומפקטי על השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/858690/images/6599089_e3e3c0c3-64c0-4547-8019-63e279927a0f_b987232c-f1f5-4612-a7c7-c5bab01cdc8d/thumbs/inside/1280x960/jpg/img_7306.webp" },
  { id: "angel-lamp", category: "home", name: "מנורת מלאך", price: 89, desc: "פריט תאורה דקורטיבי שמפזר אור רך בחדר. התמונה להמחשה.", img: "https://media.printables.com/media/prints/129032/images/1235838_d7e8e5b3-fbc3-4f7b-9181-2071188e4a29/thumbs/inside/1280x960/png/angel-lamp.webp" },
  { id: "leaf-key-holder", category: "home", name: "מתלה מפתחות עלה", price: 39, desc: "מתלה קיר בצורת עלה עם ווים למפתחות, ליד הדלת. התמונה להמחשה.", img: "https://media.printables.com/media/prints/c2fb6241-a83b-443d-826b-7a549d58ed28/images/11100005_aab745df-de6c-4d7f-83d6-1152fee340a4_935bbcba-c53d-4b33-b554-bea0e49041b4/thumbs/inside/1280x960/png/cover.webp" },
  { id: "folding-hook", category: "home", name: "וו קיר מתקפל", price: 22, desc: "וו שנפתח כשצריך ונסגר צמוד לקיר כשלא. התמונה להמחשה.", img: "https://media.printables.com/media/prints/151259/images/1424206_382b9777-f458-494a-a5d4-974fd14e84b4/thumbs/inside/1280x960/png/22-085wallhookfoldshort.webp" },

  // ---- לילדים ----
  { id: "fidget-star", category: "baby", name: "כוכב פידג'ט", price: 25, desc: "כוכב מסתובב שמודפס בחלק אחד, להעסקת הידיים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/161631/stls/1504769_3868404b-be9c-4466-9203-ffabb3d57cfa/thumbs/inside/1280x960/png/8ptfidgetstar_preview.webp" },
  { id: "spiral-cone", category: "baby", name: "קונוס ספירלה", price: 29, desc: "צעצוע פידג'ט שבו הקונוס מחליק ומסתובב בתוך הספירלה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/950387/images/7252837_1a42d3fe-2d87-4322-ae1b-7a99c8ce76fe_ea3188b3-801f-4ee6-8666-84f796c29d54/thumbs/inside/1280x960/jpg/spiral-cone.webp" },
  { id: "helix-screw", category: "baby", name: "בורג פידג'ט", price: 29, desc: "אום שמסתובב לאורך בורג מסתלסל, מהפנט ושקט. התמונה להמחשה.", img: "https://media.printables.com/media/prints/822018/images/6366650_ad754652-4d37-41f6-b2b8-91577778a13b_0021c1d0-08c7-4d4b-8e12-49859e912e5d/thumbs/inside/1280x960/png/pxl_20240329_221358815portrait22.webp" },
  { id: "chain-fidget", category: "baby", name: "שרשרת פידג'ט", price: 25, desc: "שרשרת חוליות גמישה שמודפסת מוכנה, בלי הרכבה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/231254/images/2105623_801d0ea2-f9be-46bb-80c2-eb78bddb7e95/thumbs/inside/1280x960/jpeg/photostudio_1656159309858-01.webp" },
  { id: "cat-spring-toy", category: "baby", name: "חתול קפיצי", price: 29, desc: "חתול על קפיץ שמתנדנד וקופץ בכל נגיעה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/414645/images/4246041_0906379c-1ca8-40af-a45a-8675b5ff9ee1/thumbs/inside/1280x960/png/cat-spring-2.webp" },
  { id: "mini-dino", category: "baby", name: "דינוזאור מיניאטורי", price: 19, desc: "דינוזאור קטן וחמוד לאוסף או למשחק. התמונה להמחשה.", img: "https://media.printables.com/media/prints/952228/images/7265077_7ba794ce-3271-497c-b80b-dbc580b687fe_71d7a917-b4b9-4aee-b612-dc072edb3a2b/thumbs/inside/1280x960/jpg/img_6233.webp" },
  { id: "helicopter-toy", category: "baby", name: "מסוק צעצוע", price: 39, desc: "מסוק צעצוע עם להבים מסתובבים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/102668/images/1028759_c87b4183-7104-43fe-8425-0a3a3b8490e3/thumbs/inside/1280x960/webp/capture-decran-2017-05-15-a-101326.webp" },

  // ---- לאוטו ----
  { id: "headrest-hook",    category: "car",    name: "וו למשענת הראש",         price: 25, desc: "נתלה על מוטות משענת הראש ומחזיק תיקים ושקיות. התמונה להמחשה.", img: "https://media.printables.com/media/prints/99035/images/1001593_e5848fac-3e7c-4293-a9ab-ffb9c801e319/6a131f95-1709-4538-b2ba-a22c01760301.jpg" },
  { id: "headrest-cup-holder", category: "car", name: "מחזיק כוס למשענת הראש", price: 35, desc: "נתלה על משענת הראש ומחזיק כוס או בקבוק לנוסעים מאחור. התמונה להמחשה.", img: "https://media.printables.com/media/prints/607008/images/4861497_79bb0655-6754-472b-9d2a-1c30ea62f1ba_d6c075b7-003f-438f-87fc-33f5f19d3f4d/thumbs/inside/1280x960/jpg/videocapture_20231012-140523.webp" },
  { id: "car-trash-bin", category: "car", name: "פח אשפה לרכב", price: 39, desc: "פח קטן שנכנס למחזיק הכוסות ושומר על רכב נקי. התמונה להמחשה.", img: "https://media.printables.com/media/prints/204821/images/1883274_53242731-c491-494e-8f39-7a26a4394d30/thumbs/inside/1280x960/jpg/20220317_105915.webp" },
  { id: "cup-phone-holder", category: "car", name: "מחזיק טלפון למחזיק הכוסות", price: 45, desc: "נכנס למחזיק הכוסות ומחזיק את הטלפון בגובה נוח. התמונה להמחשה.", img: "https://media.printables.com/media/prints/133717/images/1278889_d6a65476-7869-4a5f-b35d-2c3dace68702/thumbs/inside/1280x960/jpg/carphonecupholder.webp" },
  { id: "vent-phone-holder", category: "car", name: "מחזיק טלפון לפתח המיזוג", price: 35, desc: "נתפס בפתח המיזוג ומחזיק את הטלפון מול העיניים. התמונה להמחשה.", img: "https://media.printables.com/media/prints/37146/images/367051_ab3b8cc2-0f32-4113-a32b-12646664cb67/thumbs/inside/1280x960/jpg/pocket-style-phone-holder-v7.webp" },

  // ---- למשרד ----
  { id: "phone-stand", category: "office", name: "מעמד לטלפון", price: 29, desc: "מעמד יציב לטלפון על השולחן, לצפייה ולשיחות וידאו. התמונה להמחשה.", img: "https://media.printables.com/media/prints/555e3637-e21c-4351-b837-24a3838b1062/images/13529592_bf77a2aa-dae0-4644-b0d4-61d126a31ad8_acb50386-94af-4c18-aeef-668e679eb65d/thumbs/inside/1280x960/png/x.webp" },
  { id: "cable-organizer", category: "office", name: "מארגן כבלים", price: 19, desc: "מחזיק את כבלי הטעינה מסודרים בקצה השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/812711/images/6283273_fc30c6ed-cc92-4a31-8b3a-88b474fdf4cd_052e6a99-c336-4a55-813a-00248c6b840b/thumbs/inside/1280x960/webp/67e4a7c4-dbfd-495d-a827-420aeaa702c2_812711.webp" },
  { id: "remote-desk-organizer", category: "office", name: "מארגן שולחן ושלטים", price: 59, desc: "תאים לשלטים, עטים ופריטים קטנים במקום אחד. התמונה להמחשה.", img: "https://media.printables.com/media/prints/f789170c-5877-43d5-8caf-074e5e194318/images/12009415_a2849648-0bcc-408d-a3d7-b24b2b027636_5eedb533-d8c1-4907-bbb3-ce11a10766b9/thumbs/inside/1280x960/png/f7575846-6c26-45ec-b163-2508a54279bc.webp" },
  { id: "pen-cable-organizer", category: "office", name: "מארגן עטים וכבלים", price: 39, desc: "מעמד לעטים עם חריצים לכבלי USB. התמונה להמחשה.", img: "https://media.printables.com/media/prints/f2bb6bb3-ae3b-4d50-a261-6fee6e5c09e3/images/13571257_87762896-3c10-4735-9cf8-fa15566f4e94_6c6a0c89-0b1f-4f52-bf27-9a8af1198f8c/thumbs/inside/1280x960/jpeg/making_collage_of_pen_holder_202608141753.webp" },
  { id: "gyroid-pen-holder", category: "office", name: "כוס עטים גירואיד", price: 35, desc: "כוס עטים בדוגמת גירואיד מחוררת ומרשימה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/4337/images/27948_695f3458-86c6-4ca8-a874-b4a56f75a44a/thumbs/inside/1280x960/jpg/pen_holder.webp" },
  { id: "throne-headphone-stand", category: "office", name: "מעמד אוזניות כס", price: 79, desc: "מעמד אוזניות בעיצוב כס מלכות גותי. התמונה להמחשה.", img: "https://media.printables.com/media/prints/c02fc780-4b0b-4a43-a279-08e1f033e790/images/10437799_482efed9-65b8-4257-924e-479fa524bcf9_409cdd16-e9d6-433c-b99b-97fc3f517ca8/thumbs/inside/1280x960/jpg/screenshot_3.webp" },
  { id: "headphone-stand", category: "office", name: "מעמד אוזניות", price: 49, desc: "מעמד פשוט ויציב לאוזניות על השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/319311/images/2761568_f3f6ae2f-e896-45e7-a1ef-b162ec490ef9/thumbs/inside/1280x960/png/headphone_stand_2022-nov-18_07-55-55am-000_customizedview33196049187.webp" },
  { id: "modular-desk-organizer", category: "office", name: "מארגן שולחן מודולרי", price: 59, desc: "תאים שמחברים ומסדרים לפי מה שיש על השולחן. התמונה להמחשה.", img: "https://media.printables.com/media/prints/997093/images/7588035_d7065cf8-9944-4100-8a56-20d248219c68_4bb51630-c133-448d-99e1-549a74c1ac42/thumbs/inside/1280x960/jpg/zrzut-ekranu-2024-09-04-123326.webp" },
  { id: "geometric-organizer", category: "office", name: "מארגן גאומטרי", price: 39, desc: "מארגן בעיצוב גאומטרי לעטים, ומתאים גם ככיסוי לעציץ. התמונה להמחשה.", img: "https://media.printables.com/media/prints/dfe3279f-9459-487d-b11c-11bc310f4ac2/images/13205563_92fdc208-4b39-448f-bdc5-03dd9d0ec744_9b867270-f166-4750-8d92-5dd79b9548bc/thumbs/inside/1280x960/jpeg/add_professional_technical_dimension_labels_202606241134.webp" },

  // ---- לגינה ----
  { id: "ribbed-planter",   category: "garden", name: "עציץ מצולע על רגליים",   price: 69, desc: "עציץ גלילי עם מרקם פסים ורגליים קצרות שמרימות אותו מהמשטח. התמונה להמחשה.", img: "https://media.printables.com/media/prints/a7392a3f-2bfb-4ff5-8550-754078adb27f/images/11007455_8187c1cb-45c9-4a8b-9109-a159ac738b7f_69bf32b2-8639-48d3-9215-e36857d13c88/img2.png" },
  { id: "snake-planter", category: "garden", name: "עציץ נחש", price: 69, desc: "עציץ בצורת נחש מפותל, פריט שמושך את העין. התמונה להמחשה.", img: "https://media.printables.com/media/prints/4672fc71-56b4-4d60-8084-fafd70077c87/images/12755883_2d70eee5-f6e8-4459-9d82-bc8d89717f03_ed4eb1c8-34eb-4848-9de1-5a1c8b8054ab/thumbs/inside/1280x960/png/grok-image-b8eba932-36ff-4448-8f71-fa9e740c132b.webp" },
  { id: "herb-planter", category: "garden", name: "עציץ תבלינים משקה-עצמי", price: 59, desc: "עציץ עם מאגר מים שמשקה את התבלינים לאט. התמונה להמחשה.", img: "https://media.printables.com/media/prints/61288/images/642608_6708bb0d-9d0e-4a2a-be5a-212ad28b042d/thumbs/inside/1280x960/jpg/img_20210324_175006.webp" },
  { id: "bird-feeder", category: "garden", name: "בית האכלה לציפורים", price: 69, desc: "בית קטן לזרעים שתולים על עץ או במרפסת. התמונה להמחשה.", img: "https://media.printables.com/media/prints/663646/images/5226446_0e976e6e-16c4-4620-8af6-dfd6076163b2_86c0b793-f4e0-4508-8ea2-2c71bff88461/thumbs/inside/1280x960/jpg/photo-1.webp" },
  { id: "plant-labels", category: "garden", name: "שלטים לשתילים", price: 25, desc: "סט שלטים לנעיצה באדמה, לסמן מה שתול איפה. התמונה להמחשה.", img: "https://media.printables.com/media/prints/28890/images/287715_961abc51-2a03-41f5-b983-c42db662a555/thumbs/inside/1280x960/jpg/plant-label.webp" }
];
