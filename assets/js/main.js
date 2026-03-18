const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.contact": "Contact",

    "hero.kicker": "Personal Technical Portfolio",
    "hero.name": "Jerrine Jacob Mathews",
    "hero.subtitle": "Software Engineer | Sensor Systems | Industrial Monitoring | Applied Optics",
    "hero.intro": "Engineer with interdisciplinary experience across industrial software, machine connectivity, additive manufacturing, optics, sensing, diagnostics, and research-oriented technical development.",
    "hero.tag1": "Industrial Software",
    "hero.tag2": "OPC UA",
    "hero.tag3": "Sensors & Optics",
    "hero.tag4": "Laser Manufacturing",
    "hero.btnProjects": "View Projects",
    "hero.btnContact": "Contact",
    "hero.btnGitHub": "GitHub",

    "about.kicker": "Profile",
    "about.title": "About",
    "about.p1": "I am an engineer with interdisciplinary experience across industrial software, machine systems, additive manufacturing, optics, sensing, embedded-oriented environments, and technical diagnostics.",
    "about.p2": "My background combines practical work on complex production systems with academic specialization in microsystems engineering, optics, sensors, actuators, embedded systems, and system design.",
    "about.p3": "I am particularly interested in software for machine-connected systems, industrial communication, structured signal acquisition, modular platform architecture, applied optics, and research-oriented technical development.",

    "projects.kicker": "Selected Work",
    "projects.title": "Flagship Projects",
    "projects.intro": "This portfolio currently highlights two flagship project directions: the broader Photonex platform and the Photonex Sensor Intelligence Suite, which represents its deeper analytical and research-oriented intelligence layer.",
    "projects.expand": "Expand Details",
    "projects.collapse": "Collapse Details",

    "projects.p1.title": "Photonex",
    "projects.p1.desc": "Photonex is the broader platform direction that brings together machine connectivity, diagnostics, monitoring architecture, sensor-informed workflows, and quality-oriented outputs into one structured engineering system.",
    "projects.p1.i1": "Machine connectivity and structured signal acquisition",
    "projects.p1.i2": "Diagnostics and technical visibility",
    "projects.p1.i3": "Modular monitoring architecture",
    "projects.p1.i4": "Integration of sensor-driven modules",
    "projects.p1.i5": "Quality Passport as a major platform output direction",
    "projects.p1.d1t": "Overview",
    "projects.p1.d1": "Photonex is the umbrella platform direction in which machine communication, signal acquisition, diagnostics, monitoring visibility, and future intelligence layers can evolve together rather than as disconnected tools.",
    "projects.p1.d2t": "Core Platform Idea",
    "projects.p1.d3t": "Quality Passport",
    "projects.p1.d3": "The Quality Passport is a central part of Photonex. It represents the idea that monitoring and sensing should ultimately produce structured engineering outputs rather than only raw signal views.",
    "projects.p1.d4t": "Relation to SIS",
    "projects.p1.d4": "Photonex is the broader platform, while the Photonex Sensor Intelligence Suite is the deeper technical intelligence layer behind sensing, validation, uncertainty-aware interpretation, and paper-linked development.",

    "projects.p2.title": "Photonex Sensor Intelligence Suite",
    "projects.p2.desc": "The Photonex Sensor Intelligence Suite is the deeper analytical and engineering core behind Photonex. It is structured around Production Mode and Engineering Mode to support both operational monitoring and deeper technical development.",
    "projects.p2.d1t": "Overview",
    "projects.p2.d1": "The Sensor Intelligence Suite is the technical intelligence layer within the broader Photonex direction, where sensing concepts, signal interpretation, validation, uncertainty, and future intelligence modules are explored in a structured way.",
    "projects.p2.d2t": "Production Mode",
    "projects.p2.d2": "Production Mode focuses on operational insight, simplified monitoring presentation, diagnostics-oriented visibility, and support for Quality Passport outputs in machine and process environments.",
    "projects.p2.d3t": "Engineering Mode",
    "projects.p2.d3": "Engineering Mode focuses on deeper technical development including signal analysis, detectability studies, calibration logic, validation workflows, uncertainty-aware evaluation, simulation, and paper-linked engineering work.",
    "projects.p2.d4t": "Paper Connection",
    "projects.p2.d4": "Planned paper directions are linked mainly to the Engineering Mode of the Sensor Intelligence Suite, including detectability, uncertainty-aware evaluation, calibration and validation logic, and quality-oriented technical intelligence concepts.",

    "experience.kicker": "Professional Path",
    "experience.title": "Work Experience",
    "experience.e1.title": "SCC Control / 2nd Level IT Support Service Engineer",
    "experience.e1.company": "Industrial laser manufacturing support environment",
    "experience.e1.desc": "Support and analysis of software- and system-related issues in laser-based manufacturing systems, including OPC UA communication context, industrial network diagnostics, connected system behavior, and customer-facing troubleshooting workflows.",
    "experience.e1.i1": "Software and system issue analysis in machine environments",
    "experience.e1.i2": "Industrial communication and network diagnostics",
    "experience.e1.i3": "Support for machine-connected software behavior and troubleshooting",

    "experience.e2.title": "Additive Manufacturing Software Engineer",
    "experience.e2.company": "SLM / SLS systems and production environments",
    "experience.e2.desc": "Commissioning, upgrade, configuration, testing, and validation support for additive manufacturing systems, with technical context across laser, scanner, motion, safety, and integrated machine subsystems.",
    "experience.e2.i1": "Machine commissioning, upgrades, and validation support",
    "experience.e2.i2": "Configuration and process-oriented system tests",
    "experience.e2.i3": "Integration context across laser, scanner, motion, and safety subsystems",

    "experience.e3.title": "Research Assistant",
    "experience.e3.company": "University optics / sensing / measurement context",
    "experience.e3.desc": "Development of a miniaturized optical measurement head with signal processing for grinding burn detection, together with comparative sensing, technical experiments, and automated test setup work.",
    "experience.e3.i1": "Optical measurement head development",
    "experience.e3.i2": "Signal processing and sensor comparison work",
    "experience.e3.i3": "Automated test setup and technical evaluation support",

    "education.kicker": "Academic Foundation",
    "education.title": "Education",
    "education.msc.title": "M.Sc. Microsystems Engineering",
    "education.msc.sub": "Advanced interdisciplinary engineering focus",
    "education.msc.i1": "Optics, sensors, and actuators",
    "education.msc.i2": "Embedded systems and microsystems design",
    "education.msc.i3": "Technical system integration and applied engineering analysis",

    "education.bme.title": "B.Sc. Mechatronics",
    "education.bme.sub": "Mechanical, electrical, and software-oriented engineering base",
    "education.bme.i1": "System-level technical thinking",
    "education.bme.i2": "Controls, machine-related engineering, and integration mindset",
    "education.bme.i3": "Interfacing between hardware and software domains",

    "education.bca.title": "B.Sc. Computer Applications",
    "education.bca.sub": "Software and analytical computing foundation",
    "education.bca.i1": "Programming and software fundamentals",
    "education.bca.i2": "Analytical problem solving and software logic",
    "education.bca.i3": "Complementary base for engineering software development",

    "research.kicker": "Exploration",
    "research.title": "Research, Papers & Technical Exploration",
    "research.intro": "The research-oriented direction of this portfolio is centered primarily around the Photonex Sensor Intelligence Suite, especially its Engineering Mode.",
    "research.r1.title": "Signal Detectability & Monitoring Logic",
    "research.r1.text": "Exploration of how sensor signals can be interpreted, distinguished from noise, and translated into useful engineering information for monitoring-oriented systems.",
    "research.r2.title": "Uncertainty-Aware Evaluation",
    "research.r2.text": "Development of technical approaches for evaluating sensing reliability, interpretability, and engineering confidence in measured or derived signals.",
    "research.r3.title": "Calibration, Validation & Sensor Development",
    "research.r3.text": "Engineering-oriented work on how sensing concepts can be checked, calibrated, validated, and made more reliable before being used in operational workflows.",
    "research.r4.title": "Paper-Linked Technical Development",
    "research.r4.text": "A research path in which simulations, engineering modules, and paper topics are developed together, mainly within the Engineering Mode of the Photonex Sensor Intelligence Suite.",

    "publications.kicker": "Academic Context",
    "publications.title": "Publications & Research Contributions",
    "publications.f.title": "Formal Publications",
    "publications.f.text": "Formal publications, theses, credited technical reports, and future journal or conference contributions will be listed here.",
    "publications.c.title": "Research Contributions",
    "publications.c.text": "This section will also distinguish technical contributions, laboratory support work, implementation support, and indirect project-related research contributions where formal authorship is not claimed.",
    "publications.p.title": "Paper Direction",
    "publications.p.text": "Planned paper directions are linked primarily to the Engineering Mode of the Photonex Sensor Intelligence Suite. These topics include signal detectability, uncertainty-aware evaluation, sensing frameworks, calibration and validation logic, and future quality-oriented technical intelligence structures.",
    "publications.n.title": "Professional Note",
    "publications.n.text": "Publications and contributions should always be presented with a clear distinction between formal authorship, credited work, and indirect technical contribution.",

    "contact.kicker": "Get in Touch",
    "contact.title": "Contact",
    "contact.name": "Name:",
    "contact.location": "Location:",
    "contact.email": "Email:",
    "contact.github": "GitHub:",

    "sidebar.quick": "Quick Facts",
    "sidebar.q1": "Software + Systems + Research profile",
    "sidebar.q2": "Laser & Additive Manufacturing domain",
    "sidebar.q3": "OPC UA, diagnostics, and machine connectivity",
    "sidebar.q4": "Applied optics and sensing background",
    "sidebar.focus": "Current Focus",
    "sidebar.stack": "Core Stack",
    "sidebar.links": "Profile Links",
    "sidebar.contactBtn": "Contact",

    "footer.note": "Shared by direct link only."
  },

  de: {
    "nav.about": "Über mich",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.education": "Ausbildung",
    "nav.research": "Forschung",
    "nav.publications": "Publikationen",
    "nav.contact": "Kontakt",

    "hero.kicker": "Persönliches Technisches Portfolio",
    "hero.name": "Jerrine Jacob Mathews",
    "hero.subtitle": "Softwareingenieur | Sensorsysteme | Industrielles Monitoring | Angewandte Optik",
    "hero.intro": "Ingenieur mit interdisziplinärer Erfahrung in industrieller Software, Maschinenanbindung, additiver Fertigung, Optik, Sensorik, Diagnostik und forschungsnaher technischer Entwicklung.",
    "hero.tag1": "Industrielle Software",
    "hero.tag2": "OPC UA",
    "hero.tag3": "Sensorik & Optik",
    "hero.tag4": "Laserfertigung",
    "hero.btnProjects": "Projekte ansehen",
    "hero.btnContact": "Kontakt",
    "hero.btnGitHub": "GitHub",

    "about.kicker": "Profil",
    "about.title": "Über mich",
    "about.p1": "Ich bin ein Ingenieur mit interdisziplinärer Erfahrung in industrieller Software, Maschinensystemen, additiver Fertigung, Optik, Sensorik, embedded-nahen Umgebungen und technischer Diagnostik.",
    "about.p2": "Mein Hintergrund verbindet praktische Arbeit an komplexen Produktionssystemen mit akademischer Spezialisierung in Mikrosystemtechnik, Optik, Sensoren, Aktoren, Embedded Systemen und Systemdesign.",
    "about.p3": "Mein besonderes Interesse gilt Software für maschinenverbundene Systeme, industrieller Kommunikation, strukturierter Signalakquisition, modularen Plattformarchitekturen, angewandter Optik und forschungsnaher technischer Entwicklung.",

    "projects.kicker": "Ausgewählte Arbeit",
    "projects.title": "Flaggschiffprojekte",
    "projects.intro": "Dieses Portfolio hebt derzeit zwei Flaggschiff-Projektrichtungen hervor: die breitere Photonex-Plattform und die Photonex Sensor Intelligence Suite als deren tiefere analytische und forschungsorientierte Intelligenzschicht.",
    "projects.expand": "Details öffnen",
    "projects.collapse": "Details schließen",

    "projects.p1.title": "Photonex",
    "projects.p1.desc": "Photonex ist die breitere Plattformrichtung, die Maschinenanbindung, Diagnostik, Monitoring-Architektur, sensorinformierte Workflows und qualitätsorientierte Ausgaben in einem strukturierten Engineering-System zusammenführt.",
    "projects.p1.i1": "Maschinenanbindung und strukturierte Signalakquisition",
    "projects.p1.i2": "Diagnostik und technische Transparenz",
    "projects.p1.i3": "Modulare Monitoring-Architektur",
    "projects.p1.i4": "Integration sensorgetriebener Module",
    "projects.p1.i5": "Quality Passport als wesentliche Plattform-Ausgaberichtung",
    "projects.p1.d1t": "Überblick",
    "projects.p1.d1": "Photonex ist die Dachplattformrichtung, in der Maschinenkommunikation, Signalakquisition, Diagnostik, Monitoring-Transparenz und zukünftige Intelligenzschichten gemeinsam statt als getrennte Werkzeuge weiterentwickelt werden können.",
    "projects.p1.d2t": "Kernidee der Plattform",
    "projects.p1.d3t": "Quality Passport",
    "projects.p1.d3": "Der Quality Passport ist ein zentraler Bestandteil von Photonex. Er steht für die Idee, dass Monitoring und Sensorik letztlich strukturierte Engineering-Ausgaben erzeugen sollten und nicht nur Rohsignalansichten.",
    "projects.p1.d4t": "Beziehung zur SIS",
    "projects.p1.d4": "Photonex ist die breitere Plattform, während die Photonex Sensor Intelligence Suite die tiefere technische Intelligenzschicht hinter Sensorik, Validierung, unsicherheitsbewusster Interpretation und paper-verknüpfter Entwicklung ist.",

    "projects.p2.title": "Photonex Sensor Intelligence Suite",
    "projects.p2.desc": "Die Photonex Sensor Intelligence Suite ist der tiefere analytische und technische Kern hinter Photonex. Sie ist um Production Mode und Engineering Mode strukturiert, um sowohl operatives Monitoring als auch tiefere technische Entwicklung zu unterstützen.",
    "projects.p2.d1t": "Überblick",
    "projects.p2.d1": "Die Sensor Intelligence Suite ist die technische Intelligenzschicht innerhalb der breiteren Photonex-Richtung, in der Sensorkonzepte, Signalinterpretation, Validierung, Unsicherheit und zukünftige Intelligenzmodule strukturiert untersucht werden.",
    "projects.p2.d2t": "Production Mode",
    "projects.p2.d2": "Der Production Mode fokussiert sich auf operative Einsicht, vereinfachte Monitoring-Darstellung, diagnostikorientierte Transparenz und die Unterstützung von Quality-Passport-Ausgaben in Maschinen- und Prozessumgebungen.",
    "projects.p2.d3t": "Engineering Mode",
    "projects.p2.d3": "Der Engineering Mode fokussiert sich auf tiefere technische Entwicklung einschließlich Signalanalyse, Detektierbarkeitsstudien, Kalibrierungslogik, Validierungs-Workflows, unsicherheitsbewusster Auswertung, Simulation und paper-verknüpfter Engineering-Arbeit.",
    "projects.p2.d4t": "Paper-Verbindung",
    "projects.p2.d4": "Geplante Paper-Richtungen sind hauptsächlich mit dem Engineering Mode der Sensor Intelligence Suite verknüpft, einschließlich Detektierbarkeit, unsicherheitsbewusster Auswertung, Kalibrierungs- und Validierungslogik sowie qualitätsorientierter technischer Intelligenzkonzepte.",

    "experience.kicker": "Beruflicher Weg",
    "experience.title": "Berufserfahrung",
    "experience.e1.title": "SCC Control / 2nd Level IT Support Service Engineer",
    "experience.e1.company": "Industrielles Supportumfeld für Laserfertigung",
    "experience.e1.desc": "Unterstützung und Analyse software- und systembezogener Fragestellungen in laserbasierten Fertigungssystemen, einschließlich OPC-UA-Kontext, industrieller Netzwerkdiagnose, vernetztem Systemverhalten und kundenorientierten Troubleshooting-Abläufen.",
    "experience.e1.i1": "Analyse von Software- und Systemproblemen in Maschinenumgebungen",
    "experience.e1.i2": "Industrielle Kommunikation und Netzwerkdiagnose",
    "experience.e1.i3": "Unterstützung bei maschinenverbundenem Softwareverhalten und Fehlersuche",

    "experience.e2.title": "Additive Manufacturing Software Engineer",
    "experience.e2.company": "SLM- / SLS-Systeme und Produktionsumgebungen",
    "experience.e2.desc": "Inbetriebnahme, Upgrade, Konfiguration, Test und Validierungsunterstützung für additive Fertigungssysteme mit technischem Kontext zu Laser, Scanner, Motion, Sicherheit und integrierten Maschinensubsystemen.",
    "experience.e2.i1": "Inbetriebnahme, Upgrades und Validierungsunterstützung",
    "experience.e2.i2": "Konfiguration und prozessnahe Systemtests",
    "experience.e2.i3": "Integrationskontext über Laser-, Scanner-, Motion- und Sicherheitssubsysteme",

    "experience.e3.title": "Wissenschaftliche Hilfskraft",
    "experience.e3.company": "Universitärer Kontext für Optik / Sensorik / Messtechnik",
    "experience.e3.desc": "Entwicklung eines miniaturisierten optischen Messkopfes mit Signalverarbeitung zur Detektion von Schleifbrand sowie vergleichende Sensorik, technische Experimente und automatisierte Testaufbauten.",
    "experience.e3.i1": "Entwicklung eines optischen Messkopfes",
    "experience.e3.i2": "Signalverarbeitung und Sensorvergleich",
    "experience.e3.i3": "Automatisierte Testaufbauten und technische Auswertung",

    "education.kicker": "Akademische Grundlage",
    "education.title": "Ausbildung",
    "education.msc.title": "M.Sc. Microsystems Engineering",
    "education.msc.sub": "Fortgeschrittener interdisziplinärer Engineering-Fokus",
    "education.msc.i1": "Optik, Sensoren und Aktoren",
    "education.msc.i2": "Embedded Systeme und Mikrosystemdesign",
    "education.msc.i3": "Technische Systemintegration und angewandte Analyse",

    "education.bme.title": "B.Sc. Mechatronik",
    "education.bme.sub": "Mechanische, elektrische und softwareorientierte Engineering-Basis",
    "education.bme.i1": "Systembezogenes technisches Denken",
    "education.bme.i2": "Regelung, maschinenbezogenes Engineering und Integrationsverständnis",
    "education.bme.i3": "Schnittstelle zwischen Hardware- und Softwaredomänen",

    "education.bca.title": "B.Sc. Computer Applications",
    "education.bca.sub": "Grundlage in Software und analytischem Computing",
    "education.bca.i1": "Programmierung und Softwaregrundlagen",
    "education.bca.i2": "Analytische Problemlösung und Softwarelogik",
    "education.bca.i3": "Ergänzende Basis für technische Softwareentwicklung",

    "research.kicker": "Exploration",
    "research.title": "Forschung, Papers & Technische Exploration",
    "research.intro": "Die forschungsorientierte Richtung dieses Portfolios konzentriert sich vor allem auf die Photonex Sensor Intelligence Suite, insbesondere auf deren Engineering Mode.",
    "research.r1.title": "Signaldetektierbarkeit & Monitoring-Logik",
    "research.r1.text": "Untersuchung, wie Sensorsignale interpretiert, von Rauschen unterschieden und in nutzbare Engineering-Informationen für Monitoring-Systeme übersetzt werden können.",
    "research.r2.title": "Unsicherheitsbewusste Auswertung",
    "research.r2.text": "Entwicklung technischer Ansätze zur Bewertung von Zuverlässigkeit, Interpretierbarkeit und technischem Vertrauen in gemessene oder abgeleitete Signale.",
    "research.r3.title": "Kalibrierung, Validierung & Sensorentwicklung",
    "research.r3.text": "Engineering-orientierte Arbeit dazu, wie Sensorkonzepte überprüft, kalibriert, validiert und robuster gemacht werden können, bevor sie in operative Workflows eingehen.",
    "research.r4.title": "Paper-verknüpfte Technische Entwicklung",
    "research.r4.text": "Ein Forschungspfad, in dem Simulationen, Engineering-Module und Paper-Themen gemeinsam entwickelt werden, vor allem innerhalb des Engineering Mode der Photonex Sensor Intelligence Suite.",

    "publications.kicker": "Akademischer Kontext",
    "publications.title": "Publikationen & Forschungsbeiträge",
    "publications.f.title": "Formale Publikationen",
    "publications.f.text": "Formale Publikationen, Abschlussarbeiten, ausgewiesene technische Berichte und zukünftige Journal- oder Konferenzbeiträge werden hier aufgeführt.",
    "publications.c.title": "Forschungsbeiträge",
    "publications.c.text": "Dieser Abschnitt unterscheidet auch technische Beiträge, Laborunterstützung, Implementierungsunterstützung und indirekte projektbezogene Forschungsbeiträge, bei denen keine formale Autorschaft beansprucht wird.",
    "publications.p.title": "Paper-Richtung",
    "publications.p.text": "Geplante Paper-Richtungen sind vor allem mit dem Engineering Mode der Photonex Sensor Intelligence Suite verknüpft. Dazu gehören Signaldetektierbarkeit, unsicherheitsbewusste Auswertung, Sensing-Frameworks, Kalibrierungs- und Validierungslogik sowie zukünftige qualitätsorientierte technische Intelligenzstrukturen.",
    "publications.n.title": "Hinweis",
    "publications.n.text": "Publikationen und Beiträge sollten immer klar zwischen formaler Autorschaft, ausgewiesener Arbeit und indirektem technischem Beitrag unterscheiden.",

    "contact.kicker": "Kontaktaufnahme",
    "contact.title": "Kontakt",
    "contact.name": "Name:",
    "contact.location": "Standort:",
    "contact.email": "E-Mail:",
    "contact.github": "GitHub:",

    "sidebar.quick": "Kurzfakten",
    "sidebar.q1": "Software + Systeme + Forschung Profil",
    "sidebar.q2": "Laser- & Additive Fertigung als Domäne",
    "sidebar.q3": "OPC UA, Diagnostik und Maschinenanbindung",
    "sidebar.q4": "Hintergrund in angewandter Optik und Sensorik",
    "sidebar.focus": "Aktueller Fokus",
    "sidebar.stack": "Kern-Stack",
    "sidebar.links": "Profil-Links",
    "sidebar.contactBtn": "Kontakt",

    "footer.note": "Nur per Direktlink geteilt."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");

  updateExpandButtonTexts(lang);
}

function updateExpandButtonTexts(lang) {
  const buttons = document.querySelectorAll(".expand-btn");

  buttons.forEach((btn) => {
    const targetId = btn.dataset.expandTarget;
    const target = document.getElementById(targetId);
    if (!target) return;

    btn.textContent = target.classList.contains("open")
      ? translations[lang]["projects.collapse"]
      : translations[lang]["projects.expand"];
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initExpandables() {
  const buttons = document.querySelectorAll(".expand-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.expandTarget;
      const target = document.getElementById(targetId);
      if (!target) return;

      target.classList.toggle("open");

      const lang = localStorage.getItem("language") || "en";
      btn.textContent = target.classList.contains("open")
        ? translations[lang]["projects.collapse"]
        : translations[lang]["projects.expand"];
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btnEn = document.getElementById("lang-en");
  const btnDe = document.getElementById("lang-de");

  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));
  if (btnDe) btnDe.addEventListener("click", () => setLanguage("de"));

  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initReveal();
  initMenu();
  initExpandables();
});
