const translations = {
  en: {
    home: "Home",
    serv: "Services",
    about: "About",
    lib: "Library",
    contact: "Contact",
    english: "English",
    arabic: "Arabic",
    hi: "Hi There",
    ami: "Amine",
    iam: "I am  ,front-end developer welcome to my website",
    btn1: "see my Library",


  },
  ar: {
    home: "الصفحة الرئيسية",
    serv: "خدمات",
    about: "من نحن",
    lib:"المكتبة",
    contact: "تواصل معنا",
    english: "الانجليزية",
    arabic: "العربية",
    hi: "مرحبا بك",
    ami: "أمين",
    iam: "أنا أمين مطور واجهة امامية مرحبا بك في موقعي الخاص",
    btn1: "أنظر الى المكتبة",
  },
};

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

addEventListener("change", (event) => {
  const v = document.getElementById('ea').value
  if (v == "ar"){
    im = document.getElementsByClassName('imde')
  }
  console.log(v)
})
