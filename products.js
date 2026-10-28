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
  { id: "baby",   name: "לתינוק", page: "shop-baby.html",
    desc: "פריטים שימושיים ומעוצבים לחדר של התינוק ולהורים.",
    icon: '<path d="M9 3h6"/><path d="M10 3v3h4V3"/><rect x="7" y="6" width="10" height="15" rx="3"/><path d="M7 11h3M7 15h3"/>' },
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
  { id: "phone-stand",     category: "home",   name: "מעמד לטלפון ולטאבלט",      price: 39, desc: "מעמד יציב לשולחן או למטבח, בזווית נוחה לצפייה.", img: "", demo: true },
  { id: "wall-hooks",      category: "home",   name: "ווי תלייה לקיר – סט 4",     price: 29, desc: "ווים נקיים בעיצוב מינימליסטי למפתחות, תיקים ומעילים.", img: "", demo: true },
  { id: "key-bowl",        category: "home",   name: "קערה למפתחות",              price: 49, desc: "קערה גיאומטרית לכניסה לבית, לכל הדברים הקטנים.", img: "", demo: true },
  { id: "spice-organizer", category: "home",   name: "מארגן תבלינים למגירה",      price: 59, desc: "מדרגות שמתאימות למגירה וחוסכות חיפושים.", img: "", demo: true },
  { id: "plant-shelf",     category: "home",   name: "מדף קטן לקיר",              price: 69, desc: "מדף צף לעציץ קטן, תמונה או פריט עיצוב.", img: "", demo: true },

  // ---- לתינוק ----
  { id: "door-sign",       category: "baby",   name: "שלט שם לדלת החדר",          price: 79, desc: "שלט בעיצוב אישי עם שם התינוק.", img: "", demo: true },
  { id: "closet-dividers", category: "baby",   name: "מחיצות מידות לארון",        price: 35, desc: "מפרידים בין מידות הבגדים על המוט בארון.", img: "", demo: true },
  { id: "wipes-holder",    category: "baby",   name: "מחזיק מגבונים לשידה",       price: 45, desc: "מחזיק שנצמד לשידת ההחתלה, תמיד בהישג יד.", img: "", demo: true },

  // ---- לאוטו ----
  { id: "vent-phone",      category: "car",    name: "מחזיק טלפון לפתח המיזוג",   price: 49, desc: "נאחז בפתח המיזוג ומחזיק את הטלפון ביציבות.", img: "", demo: true },
  { id: "console-tray",    category: "car",    name: "מארגן לקונסולה",            price: 59, desc: "מגש שמסדר את הקונסולה המרכזית.", img: "", demo: true },
  { id: "seat-hook",       category: "car",    name: "וו לתיק על המושב",          price: 25, desc: "תולים את התיק על משענת המושב במקום על הרצפה.", img: "", demo: true },

  // ---- למשרד ----
  { id: "cable-clips",     category: "office", name: "מארגן כבלים לשולחן",        price: 29, desc: "קליפסים שמחזיקים את הכבלים במקום.", img: "", demo: true },
  { id: "laptop-stand",    category: "office", name: "מעמד למחשב נייד",           price: 89, desc: "מגביה את המסך לגובה העיניים.", img: "", demo: true },
  { id: "headphone-stand", category: "office", name: "מעמד לאוזניות",             price: 59, desc: "מקום קבוע לאוזניות על השולחן.", img: "", demo: true },

  // ---- לגינה ----
  { id: "geo-planter",     category: "garden", name: "עציץ גיאומטרי",             price: 49, desc: "עציץ בעיצוב חד עם ניקוז בתחתית.", img: "", demo: true },
  { id: "plant-labels",    category: "garden", name: "תוויות לצמחים – סט 10",     price: 25, desc: "תוויות לתקיעה באדמה, לכל צמח ותבלין.", img: "", demo: true },
  { id: "hose-holder",     category: "garden", name: "מחזיק לצינור השקיה",        price: 45, desc: "מתלה לקיר שמשאיר את הצינור מסודר.", img: "", demo: true }
];
