export const CURRENCY = "₪";
export const shipping = 10;
export const coupons = {
  "no-shipping": { value: shipping, operator: "-" },
  "10%off": { value: 0.9, operator: "*" },
};
const prodGateWay = false;
export const BASEURL =
  (!process.env.NODE_ENV || process.env.NODE_ENV === "development") &&
  !prodGateWay
    ? "http://localhost:8085/api"
    : "https://shemen-otef-server.onrender.com/api";

export const testJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzIjo2MCwiaWQiOiI2MWQ5NzNlYzUwOWJiOTNjMTRlMjcxZTIiLCJmcmllbmRzSW52aXRlZCI6W10sImVtYWlsIjoiYXNhZnN0cjJAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMi0wMS0wOFQxMToyMjoyMC4xODRaIiwiaWF0IjoxNjQxNjQ2ODI2fQ.hCJfOJGAW8UJPrCEo2tGBuwI7eQixyz-Z4OT6IUyggU";
export const jwtToken = "jwtToken";
export const saveMe = "saveMe";
export const languageForLC = "language";
export const language = {
  hebrew: "hebrew",
  english: "english",
  russian: "russian",
};

export type Language = "hebrew" | "english" | "russian";

// -------------------------------------translation--------------------------------------

const loginLanguage = {
  [language.hebrew]: {
    Signup: "הירשם",
    Signin: "התחבר",
    Username: "שם משתמש",
    Email: "אימייל",
    Password: "ססמא",
    "Please input your username!": "שם משתמש חובה",
    "Please input your email!": "אימייל חובה",
    "Please input your password!": "ססמא חובה",
    "Forgot password": "שכחתי ססמא",
    Or: "או",
    "dont have an account?": " עדיין אין לך חשבון ?",
    "Remember me": "זכור אותי",
    "have an account?": "יש לך חשבון ?",
  },
  [language.english]: {
    Signup: "Signup",
    Signin: "Signin",
    Username: "Username",
    Email: "Email",
    Password: "Password",
    "Please input your username!": "Please input your username!",
    "Please input your email!": "Please input your email!",
    "Please input your password!": "Please input your password!",
    "Forgot password": "Forgot password",
    Or: "Or",
    "dont have an account?": "dont have an account?",
    "Remember me": "Remember me",
    "have an account?": "have an account?",
  },
};

const adminLanguage = {
  [language.hebrew]: {
    "adding a product to the database": "הוספת פריט למסד הנתונים",
    title: "כותרת",
    otherLanguageTitle: "כותרת בשפה אחרת",
    description: "תיאור",
    otherLanguageDescription: "תיאור בשפה אחרת",
    image: "תמונה",
    quantity: "כמות",
    quantetyInStock: "כמות זמינה",
    featured: "מופיע במועדפים",
    outOfStock: "לא קיים במלאי",
    listed: "מופיע כזמין",
    size: "גודל",
    category: "קטגוריה",
    brand: "מותג",
    location: "מיקום",
    dimensions: "מימדים",
    width: "רוחב",
    height: "גובה",
    price: "מחיר",
    rating: "רייטינג",
    discount: "הנחה",
    value: "מחיר",
    russian: "רוסית",
    hebrew: "עברית",
    ruTitle: "כותר ברוסית",
    heTitle: "כותר בעיברית",
    ruDesc: "תיאור ברוסית",
    heDesc: "תיאור בעיברית",
    currency: "מטבע",
    quantityCurrency: "כמות ב",
    availibleForDelivery: "זמין למשלוח",
    ingredients: "רכיבים",
  },
  [language.english]: {
    "adding a product to the database": "Adding a product to the database",
    title: "title",
    otherLanguageTitle: "other Language Title",
    description: "description",
    otherLanguageDescription: "other Language Description",
    image: "image",
    quantity: "quantity",
    quantetyInStock: "quantety In Stock",
    featured: "featured",
    outOfStock: "out Of Stock",
    listed: "listed",
    size: "size",
    category: "category",
    brand: "brand",
    location: "location",
    dimensions: "dimensions",
    width: "width",
    height: "height",
    price: "price",
    rating: "rating",
    discount: "discount",
    value: "value",
    ru: "russion",
    he: "hebrew",
    ruTitle: "title in russian",
    heTitle: "Title in hebrew",
    ruDesc: "description in russian",
    heDesc: "description in hebrew",
    currency: "currency",
    quantityCurrency: "quantity currency",
    availibleForDelivery: "availible for delivery",
    ingredients: "ingredients",
  },
};
const categoriesLanguage = {
  [language.hebrew]: {
    clothes: "בגדים",
    oils: "שמנים",
    baby: "תינוקות",
  },
  [language.english]: {
    clothes: "clothes",
    oils: "oils",
    baby: "baby",
  },
};
const cartLanguage = {
  [language.hebrew]: {
    Order: "הזמנה",
    EditCart: "כרטיס",
    Subtotal: "מחיר הזמנה",
    Shipping: "משלוח",
    total: 'סה"כ',
    proceedToCheckOut: " המשך לתשלום",
    "Add to cart": "הוסף לעגלה",
    "date not specified": "לא הוגדר תאריך",
    cuppons: "קופונים",
  },
  [language.english]: {
    Order: "Order",
    EditCart: "Edit Cart",
    Subtotal: "Subtotal",
    Shipping: "Shipping",
    total: "Total",
    proceedToCheckOut: "PROCEED TO CHECKOUT",
    "Add to cart": "Add to cart",
    "date not specified": "date not specified",
    cuppons: "cuppons",
  },
};

const checkoutLanguage = {
  [language.hebrew]: {
    Checkout: "תשלום",
    ThankYouYorYourOrder: "תודה לך על ההזמנה",
    placeOrder: "הזמן",
    subtitle1: `.הזמנתך אושרה ומספר ההזמנה הוא #12345 שלחנו לך אישור במייל ונשלח לך עדכון כאשר המשלוח ייצא לדרך`,
    ShippingAddress: "כתובת משלוח",
    PaymentDetails: "פרטי אשראי",
    ReviewYourOrder: "סיכום הזמנה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    address1: "רחוב",
    phone: "טלפון",
    address2: "כתובת",
    city: "עיר",
    state: "מחוז",
    email: "דואל",
    zip: "מיקוד",
    country: "ארץ",
    saveAddress: "שמור לפעם הבאה",
    cardName: "שם על הכרטיס",
    cardNumber: "מספר הכרטיס",
    expDate: "תאריך תפוגה",
    helperTextForCvv: "שלוש ספרות בגב הכרטיס",
    saveCard: "זכור פרטי אשראי",
    CardType: "סוג כרטיס",
    orderSummery: "פירוט הזמנה",
    "Please fill all fields": "נא למלא את כל השדות",
  },
  [language.english]: {
    Checkout: "Checkout",
    ThankYouYorYourOrder: "Thank you for your order.",
    subtitle1: `Your order number is #2001539. We have emailed your order
    confirmation, and will send you an update when your order has
    shipped.`,
    placeOrder: '"Place order"',
    ShippingAddress: "Shipping address",
    PaymentDetails: "Payment details",
    ReviewYourOrder: "Review your order",
    firstName: "First name",
    lastName: "Last name",
    address1: "Address line 1",
    phone: "phone",
    address2: "Address line 2",
    city: "City",
    state: "State/Province/Region",
    email: "email",
    zip: "Zip / Postal code",
    country: "Country",
    saveAddress: "Use this address for payment details",
    CardType: "Card type",
    cardName: "Name on card",
    cardNumber: "Card number",
    expDate: "Expiry date",
    cvv: "CVV",
    helperTextForCvv: "Last three digits on signature strip",
    saveCard: "Remember credit card details for next time",
    orderSummery: "Order summery",
    "Please fill all fields": "Please fill all fields",
  },
};

export const langConst = {
  [language.hebrew]: {
    shemenOtef: "שמן עוטף",
    unknownStep: "שלב לא ידוע",
    next: "המשך",
    Back: "חזור",
    Search: "חפש...",
    submit: "שלח",
    delete: "מחק",
    //cart
    ...cartLanguage[language.hebrew],
    ...checkoutLanguage[language.hebrew],
    ...categoriesLanguage[language.hebrew],
    ...adminLanguage[language.hebrew],
    ...loginLanguage[language.hebrew],
  },
  [language.english]: {
    shemenOtef: "shemen otef",
    unknownStep: "Unknown step",
    next: "Next",
    Back: "Back",
    Search: "Search...",
    submit: "submit",
    delete: "delete",
    //cart
    ...cartLanguage[language.english],
    ...checkoutLanguage[language.english],
    ...categoriesLanguage[language.english],
    ...adminLanguage[language.english],
    ...loginLanguage[language.english],
  },
};
