const translations = {
  en: {
    "hero.name": "Jacob Mathews",
    "hero.subtitle": "Software Engineer | Sensor Systems | Industrial Monitoring | Applied Optics",
    "hero.intro": "Personal portfolio website under construction.",

    "about.title": "About",
    "about.text": "This section will introduce my background, education, and technical focus.",

    "projects.title": "Projects",
    "projects.text": "Featured work including Photonex, LicenseHub, and selected technical platform concepts.",

    "research.title": "Research",
    "research.text": "Ongoing research and technical exploration areas.",

    "publications.title": "Publications",
    "publications.text": "Publications, research contributions, and supporting work will be listed here.",

    "contact.title": "Contact",
    "contact.text": "Contact details will be added here."
  },
  de: {
    "hero.name": "Jacob Mathews",
    "hero.subtitle": "Softwareingenieur | Sensorsysteme | Industrielles Monitoring | Angewandte Optik",
    "hero.intro": "Persönliche Portfolio-Website im Aufbau.",

    "about.title": "Über mich",
    "about.text": "Dieser Abschnitt stellt meinen Hintergrund, meine Ausbildung und meinen technischen Schwerpunkt vor.",

    "projects.title": "Projekte",
    "projects.text": "Ausgewählte Arbeiten wie Photonex, LicenseHub und weitere technische Plattformkonzepte.",

    "research.title": "Forschung",
    "research.text": "Laufende Forschungs- und technische Entwicklungsthemen.",

    "publications.title": "Publikationen",
    "publications.text": "Publikationen, Forschungsbeiträge und unterstützende Arbeiten werden hier aufgeführt.",

    "contact.title": "Kontakt",
    "contact.text": "Kontaktdaten werden hier ergänzt."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-de").addEventListener("click", () => setLanguage("de"));

const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

document.getElementById("year").textContent = new Date().getFullYear();
