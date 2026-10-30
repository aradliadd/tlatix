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

  // ---- לאוטו ----
  { id: "headrest-hook",    category: "car",    name: "וו למשענת הראש",         price: 25, desc: "נתלה על מוטות משענת הראש ומחזיק תיקים ושקיות. התמונה להמחשה.", img: "https://media.printables.com/media/prints/99035/images/1001593_e5848fac-3e7c-4293-a9ab-ffb9c801e319/6a131f95-1709-4538-b2ba-a22c01760301.jpg" },

  // ---- לגינה ----
  { id: "ribbed-planter",   category: "garden", name: "עציץ מצולע על רגליים",   price: 69, desc: "עציץ גלילי עם מרקם פסים ורגליים קצרות שמרימות אותו מהמשטח. התמונה להמחשה.", img: "https://media.printables.com/media/prints/a7392a3f-2bfb-4ff5-8550-754078adb27f/images/11007455_8187c1cb-45c9-4a8b-9109-a159ac738b7f_69bf32b2-8639-48d3-9215-e36857d13c88/img2.png" }
];
