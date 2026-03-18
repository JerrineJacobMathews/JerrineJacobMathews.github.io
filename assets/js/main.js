const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
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
    "hero.focusTitle": "Core Focus",
    "hero.focus1": "Industrial software and machine-connected systems",
    "hero.focus2": "Sensor-driven monitoring, diagnostics, and signal handling",
    "hero.focus3": "Applied optics, technical prototyping, and engineering exploration",
    "hero.stat1Label": "Domain",
    "hero.stat1Value": "Laser & Additive Manufacturing",
    "hero.stat2Label": "Profile",
    "hero.stat2Value": "Software + Systems + Research",
    "hero.stat3Label": "Location",

    "strip.label1": "Current Direction",
    "strip.value1": "Industrial Monitoring & Diagnostics",
    "strip.label2": "Core Technical Areas",
    "strip.value2": "Software, Sensor Systems, Optics, Connectivity",
    "strip.label3": "Flagship Project",
    "strip.value3": "Photonex",

    "about.kicker": "Profile",
    "about.title": "About",
    "about.p1": "I am an engineer with interdisciplinary experience across industrial software, machine systems, additive manufacturing, optics, sensing, embedded-oriented environments, and technical diagnostics.",
    "about.p2": "My background combines practical work on complex production systems with academic specialization in microsystems engineering, optics, sensors, actuators, embedded systems, and system design.",
    "about.p3": "I am particularly interested in software for machine-connected systems, industrial communication, structured signal acquisition, modular platform architecture, applied optics, and research-oriented technical development.",

    "experience.kicker": "Professional Path",
    "experience.title": "Work Experience",
    "experience.e1.period": "Current / Recent",
    "experience.e1.title": "SCC Control / 2nd Level IT Support Service Engineer",
    "experience.e1.company": "Industrial laser manufacturing support environment",
    "experience.e1.desc": "Support and analysis of software- and system-related issues in laser-based manufacturing systems, including OPC UA communication context, industrial network diagnostics, connected system behavior, and customer-facing troubleshooting workflows.",
    "experience.e1.i1": "Software and system issue analysis in machine environments",
    "experience.e1.i2": "Industrial communication and network diagnostics",
    "experience.e1.i3": "Support for machine-connected software behavior and troubleshooting",

    "experience.e2.period": "Previous Role",
    "experience.e2.title": "Additive Manufacturing Software Engineer",
    "experience.e2.company": "SLM / SLS systems and production environments",
    "experience.e2.desc": "Commissioning, upgrade, configuration, testing, and validation support for additive manufacturing systems, with technical context across laser, scanner, motion, safety, and integrated machine subsystems.",
    "experience.e2.i1": "Machine commissioning, upgrades, and validation support",
    "experience.e2.i2": "Configuration and process-oriented system tests",
    "experience.e2.i3": "Integration context across laser, scanner, motion, and safety subsystems",

    "experience.e3.period": "Research Role",
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

    "expertise.kicker": "Capabilities",
    "expertise.title": "Core Expertise",
    "expertise.s1.title": "Software Development",
    "expertise.s1.i1": "C, C++, C#, Python, Lua",
    "expertise.s1.i2": "WPF and desktop-oriented development",
    "expertise.s1.i3": "Modular architecture and technical tooling",
    "expertise.s1.i4": "Diagnostics, logging, and engineering workflows",

    "expertise.s2.title": "Industrial & Machine Systems",
    "expertise.s2.i1": "OPC UA, CAN, Modbus TCP/IP",
    "expertise.s2.i2": "IPC–PLC troubleshooting",
    "expertise.s2.i3": "Machine integration and upgrade context",
    "expertise.s2.i4": "Industrial network and system diagnostics",

    "expertise.s3.title": "Sensors, Optics & Analysis",
    "expertise.s3.i1": "Optical measurement concepts",
    "expertise.s3.i2": "Sensor-oriented technical work",
    "expertise.s3.i3": "Signal handling and monitoring concepts",
    "expertise.s3.i4": "Applied optics and microsystems background",

    "expertise.s4.title": "Engineering Workflow",
    "expertise.s4.i1": "Technical documentation",
    "expertise.s4.i2": "Prototype development and concept validation",
    "expertise.s4.i3": "Interdisciplinary problem solving",
    "expertise.s4.i4": "Research-oriented technical exploration",

    "projects.kicker": "Selected Work",
    "projects.title": "Projects",
    "projects.p1.title": "Photonex",
    "projects.p1.desc": "Independent development project focused on machine connectivity, sensor data acquisition, structured signal handling, diagnostics, and modular industrial monitoring architecture.",
    "projects.p1.i1": "Machine connectivity and structured signal acquisition",
    "projects.p1.i2": "Sensor data modeling and diagnostics",
    "projects.p1.i3": "Architecture for industrial monitoring tools",

    "projects.p2.title": "LicenseHub",
    "projects.p2.desc": "Architecture and product concept work around licensing, entitlements, administration workflows, and pragmatic software platform design for technical products.",
    "projects.p2.i1": "Licensing logic and entitlement models",
    "projects.p2.i2": "Administration and platform workflow thinking",
    "projects.p2.i3": "Client/server-oriented system structure",

    "projects.p3.title": "Industrial Software & Machine Integration Work",
    "projects.p3.desc": "Practical and independent work across additive manufacturing systems, upgrades, troubleshooting, configuration, tests, and machine-related technical validation.",
    "projects.p3.i1": "Commissioning and system upgrades",
    "projects.p3.i2": "Process-oriented technical tests and validation",
    "projects.p3.i3": "Integration context across machine subsystems",

    "research.kicker": "Exploration",
    "research.title": "Research & Technical Exploration",
    "research.tab1": "Monitoring",
    "research.tab2": "Optics & Sensors",
    "research.tab3": "Systems & Communication",
    "research.r1.title": "Sensor-Driven Monitoring",
    "research.r1.text": "Exploration of software and system concepts for machine-connected monitoring, structured signal acquisition, visibility, diagnostics, and quality-oriented technical tooling.",
    "research.r2.title": "Applied Optics & Sensing",
    "research.r2.text": "Technical interest in optical measurement systems, sensor integration, signal handling, measurement-oriented development, and industrial sensing applications.",
    "research.r3.title": "Industrial Communication & Platform Thinking",
    "research.r3.text": "Continued work and interest in OPC UA communication, connected machine architectures, IPC–PLC troubleshooting, modular software systems, and engineering-oriented platform development.",

    "publications.kicker": "Academic Context",
    "publications.title": "Publications & Research Contributions",
    "publications.f.title": "Formal Publications",
    "publications.f.text": "Formal authored publications, theses, credited reports, or conference contributions can be listed here.",
    "publications.c.title": "Research Contributions",
    "publications.c.text": "This section is intended for technical contributions, laboratory support work, implementation support, and project-related research assistance where formal authorship is not claimed.",
    "publications.n.title": "Professional Note",
    "publications.n.text": "Items should clearly distinguish between authorship, credited work, and indirect technical contribution.",

    "contact.kicker": "Get in Touch",
    "contact.title": "Contact",
    "contact.name": "Name:",
    "contact.location": "Location:",
    "contact.email": "Email:",
    "contact.github": "GitHub:",

    "footer.note": "Shared by direct link only."
  },

  de: {
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.education": "Ausbildung",
    "nav.expertise": "Kompetenzen",
    "nav.projects": "Projekte",
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
    "hero.focusTitle": "Schwerpunkte",
    "hero.focus1": "Industrielle Software und maschinenverbundene Systeme",
    "hero.focus2": "Sensorbasiertes Monitoring, Diagnose und Signalverarbeitung",
    "hero.focus3": "Angewandte Optik, technisches Prototyping und Engineering-Exploration",
    "hero.stat1Label": "Domäne",
    "hero.stat1Value": "Laser- & Additive Fertigung",
    "hero.stat2Label": "Profil",
    "hero.stat2Value": "Software + Systeme + Forschung",
    "hero.stat3Label": "Standort",

    "strip.label1": "Aktuelle Ausrichtung",
    "strip.value1": "Industrielles Monitoring & Diagnostik",
    "strip.label2": "Kernbereiche",
    "strip.value2": "Software, Sensorsysteme, Optik, Konnektivität",
    "strip.label3": "Flaggschiffprojekt",
    "strip.value3": "Photonex",

    "about.kicker": "Profil",
    "about.title": "Über mich",
    "about.p1": "Ich bin ein Ingenieur mit interdisziplinärer Erfahrung in industrieller Software, Maschinensystemen, additiver Fertigung, Optik, Sensorik, embedded-nahen Umgebungen und technischer Diagnostik.",
    "about.p2": "Mein Hintergrund verbindet praktische Arbeit an komplexen Produktionssystemen mit akademischer Spezialisierung in Mikrosystemtechnik, Optik, Sensoren, Aktoren, Embedded Systemen und Systemdesign.",
    "about.p3": "Mein besonderes Interesse gilt Software für maschinenverbundene Systeme, industrieller Kommunikation, strukturierter Signalakquisition, modularen Plattformarchitekturen, angewandter Optik und forschungsnaher technischer Entwicklung.",

    "experience.kicker": "Beruflicher Weg",
    "experience.title": "Berufserfahrung",
    "experience.e1.period": "Aktuell / Zuletzt",
    "experience.e1.title": "SCC Control / 2nd Level IT Support Service Engineer",
    "experience.e1.company": "Industrielles Supportumfeld für Laserfertigung",
    "experience.e1.desc": "Unterstützung und Analyse software- und systembezogener Fragestellungen in laserbasierten Fertigungssystemen, einschließlich OPC-UA-Kontext, industrieller Netzwerkdiagnose, vernetztem Systemverhalten und kundenorientierten Troubleshooting-Abläufen.",
    "experience.e1.i1": "Analyse von Software- und Systemproblemen in Maschinenumgebungen",
    "experience.e1.i2": "Industrielle Kommunikation und Netzwerkdiagnose",
    "experience.e1.i3": "Unterstützung bei maschinenverbundenem Softwareverhalten und Fehlersuche",

    "experience.e2.period": "Vorherige Rolle",
    "experience.e2.title": "Additive Manufacturing Software Engineer",
    "experience.e2.company": "SLM- / SLS-Systeme und Produktionsumgebungen",
    "experience.e2.desc": "Inbetriebnahme, Upgrade, Konfiguration, Test und Validierungsunterstützung für additive Fertigungssysteme mit technischem Kontext zu Laser, Scanner, Motion, Sicherheit und integrierten Maschinensubsystemen.",
    "experience.e2.i1": "Inbetriebnahme, Upgrades und Validierungsunterstützung",
    "experience.e2.i2": "Konfiguration und prozessnahe Systemtests",
    "experience.e2.i3": "Integrationskontext über Laser-, Scanner-, Motion- und Sicherheitssubsysteme",

    "experience.e3.period": "Forschungsrolle",
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

    "expertise.kicker": "Fähigkeiten",
    "expertise.title": "Kernkompetenzen",
    "expertise.s1.title": "Softwareentwicklung",
    "expertise.s1.i1": "C, C++, C#, Python, Lua",
    "expertise.s1.i2": "WPF und desktoporientierte Entwicklung",
    "expertise.s1.i3": "Modulare Architektur und technische Tools",
    "expertise.s1.i4": "Diagnostik, Logging und Engineering-Workflows",

    "expertise.s2.title": "Industrie- & Maschinensysteme",
    "expertise.s2.i1": "OPC UA, CAN, Modbus TCP/IP",
    "expertise.s2.i2": "IPC–PLC-Fehlersuche",
    "expertise.s2.i3": "Maschinenintegration und Upgrade-Kontext",
    "expertise.s2.i4": "Industrielle Netzwerk- und Systemdiagnose",

    "expertise.s3.title": "Sensorik, Optik & Analyse",
    "expertise.s3.i1": "Optische Messkonzepte",
    "expertise.s3.i2": "Sensororientierte technische Arbeit",
    "expertise.s3.i3": "Signalverarbeitung und Monitoring-Konzepte",
    "expertise.s3.i4": "Hintergrund in angewandter Optik und Mikrosystemtechnik",

    "expertise.s4.title": "Engineering-Workflow",
    "expertise.s4.i1": "Technische Dokumentation",
    "expertise.s4.i2": "Prototypenentwicklung und Konzeptvalidierung",
    "expertise.s4.i3": "Interdisziplinäre Problemlösung",
    "expertise.s4.i4": "Forschungsnahe technische Exploration",

    "projects.kicker": "Ausgewählte Arbeiten",
    "projects.title": "Projekte",
    "projects.p1.title": "Photonex",
    "projects.p1.desc": "Eigenständiges Entwicklungsprojekt mit Fokus auf Maschinenanbindung, Sensordatenerfassung, strukturierte Signalverarbeitung, Diagnostik und modulare Architektur für industrielles Monitoring.",
    "projects.p1.i1": "Maschinenanbindung und strukturierte Signalakquisition",
    "projects.p1.i2": "Sensordatenmodellierung und Diagnostik",
    "projects.p1.i3": "Architektur für industrielle Monitoring-Werkzeuge",

    "projects.p2.title": "LicenseHub",
    "projects.p2.desc": "Architektur- und Produktkonzeptarbeit rund um Lizenzierung, Entitlements, Administrationsabläufe und pragmatische Softwareplattformen für technische Produkte.",
    "projects.p2.i1": "Lizenzlogik und Entitlement-Modelle",
    "projects.p2.i2": "Administrations- und Plattform-Workflows",
    "projects.p2.i3": "Client-/Server-orientierte Systemstruktur",

    "projects.p3.title": "Industrielle Software- & Maschinenintegrationsarbeit",
    "projects.p3.desc": "Praktische und eigenständige Arbeit an additiven Fertigungssystemen, Upgrades, Fehlersuche, Konfiguration, Tests und maschinenbezogener technischer Validierung.",
    "projects.p3.i1": "Inbetriebnahme und System-Upgrades",
    "projects.p3.i2": "Prozessnahe technische Tests und Validierung",
    "projects.p3.i3": "Integrationskontext über Maschinensubsysteme",

    "research.kicker": "Exploration",
    "research.title": "Forschung & Technische Exploration",
    "research.tab1": "Monitoring",
    "research.tab2": "Optik & Sensorik",
    "research.tab3": "Systeme & Kommunikation",
    "research.r1.title": "Sensorbasiertes Monitoring",
    "research.r1.text": "Exploration von Software- und Systemkonzepten für maschinenverbundenes Monitoring, strukturierte Signalakquisition, Transparenz, Diagnostik und qualitätsorientierte technische Werkzeuge.",
    "research.r2.title": "Angewandte Optik & Sensorik",
    "research.r2.text": "Technisches Interesse an optischen Messsystemen, Sensorintegration, Signalverarbeitung, messtechnischer Entwicklung und industriellen Sensoranwendungen.",
    "research.r3.title": "Industrielle Kommunikation & Plattformdenken",
    "research.r3.text": "Fortlaufende Arbeit und Interesse an OPC-UA-Kommunikation, vernetzten Maschinenarchitekturen, IPC–PLC-Fehlersuche, modularen Softwaresystemen und engineering-orientierter Plattformentwicklung.",

    "publications.kicker": "Akademischer Kontext",
    "publications.title": "Publikationen & Forschungsbeiträge",
    "publications.f.title": "Formale Publikationen",
    "publications.f.text": "Hier können formale Publikationen, Abschlussarbeiten, ausgewiesene Berichte oder Konferenzbeiträge gelistet werden.",
    "publications.c.title": "Forschungsbeiträge",
    "publications.c.text": "Dieser Abschnitt ist für technische Beiträge, Laborunterstützung, Implementierungsunterstützung und projektbezogene Forschungsarbeit gedacht, bei denen keine formale Autorschaft beansprucht wird.",
    "publications.n.title": "Hinweis",
    "publications.n.text": "Einträge sollten klar zwischen Autorschaft, offiziell ausgewiesener Arbeit und indirektem technischem Beitrag unterscheiden.",

    "contact.kicker": "Kontaktaufnahme",
    "contact.title": "Kontakt",
    "contact.name": "Name:",
    "contact.location": "Standort:",
    "contact.email": "E-Mail:",
    "contact.github": "GitHub:",

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

function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const panel = document.getElementById(target);
      if (panel) panel.classList.add("active");
    });
  });
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
  initTabs();
  initMenu();
});
