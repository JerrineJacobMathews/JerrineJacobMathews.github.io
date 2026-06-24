const state = {
  settings: { visitorBaseline: 350, visitorApiUrl: "https://YOUR-WORKER-URL.workers.dev/visit" },
  en: {
    site: {},
    hero: { recruiterStats: [], tags: [] },
    about: {},
    projects: [],
    richSections: [],
    contact: {}
  },
  de: { site: {}, hero: { recruiterStats: [], tags: [] }, about: {}, projects: [], richSections: [], contact: {} }
};

const $ = (id) => document.getElementById(id);

function activeLang() { return "en"; }
function langData() { return state[activeLang()]; }

function bindTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      $("panel-" + tab.dataset.panel).classList.add("active");
    });
  });
}

function setupRichToolbar() {
  document.querySelectorAll(".toolbar button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const toolbar = button.closest(".toolbar");
      const editor = $(toolbar.dataset.editor);
      if (!editor) return;
      editor.focus();
      const cmd = button.dataset.cmd;
      const format = button.dataset.format;
      const action = button.dataset.action;
      if (cmd) document.execCommand(cmd, false, null);
      if (format) document.execCommand("formatBlock", false, format);
      if (action === "link") {
        const url = prompt("Enter link URL:");
        if (url) document.execCommand("createLink", false, url);
      }
      if (action === "image") {
        const url = prompt("Enter image URL or path, for example assets/uploads/project.png:");
        if (url) document.execCommand("insertImage", false, url);
      }
      if (action === "table") {
        document.execCommand("insertHTML", false, `<table><thead><tr><th>Column 1</th><th>Column 2</th></tr></thead><tbody><tr><td>Value</td><td>Description</td></tr></tbody></table>`);
      }
    });
  });
}

function readFormToState() {
  const data = langData();
  data.site = {
    name: $("site-name").value,
    location: $("site-location").value,
    email: $("site-email").value,
    github: $("site-github").value,
    linkedin: $("site-linkedin").value,
    cvUrl: $("site-cv").value
  };
  data.hero.kicker = $("hero-kicker").value;
  data.hero.title = $("hero-title").value;
  data.hero.intro = $("hero-intro").value;
  data.hero.tags = $("hero-tags-input").value.split(",").map(x => x.trim()).filter(Boolean);
  data.about = {
    kicker: $("about-kicker").value,
    title: $("about-title").value,
    html: $("about-html").innerHTML
  };
  state.settings.visitorBaseline = Number($("visitor-baseline").value || 350);
  state.settings.visitorApiUrl = $("visitor-api").value;

  data.hero.recruiterStats = [...document.querySelectorAll(".recruiter-item")].map(card => ({
    title: card.querySelector("[data-field='title']").value,
    text: card.querySelector("[data-field='text']").value
  })).filter(x => x.title || x.text);

  data.projects = [...document.querySelectorAll(".project-item")].map(card => ({
    title: card.querySelector("[data-field='title']").value,
    summary: card.querySelector("[data-field='summary']").value,
    problem: card.querySelector("[data-field='problem']").value,
    solution: card.querySelector("[data-field='solution']").value,
    technologies: card.querySelector("[data-field='technologies']").value.split(",").map(x => x.trim()).filter(Boolean),
    image: card.querySelector("[data-field='image']").value,
    videoUrl: card.querySelector("[data-field='videoUrl']").value,
    link: card.querySelector("[data-field='link']").value,
    featured: card.querySelector("[data-field='featured']").checked
  })).filter(x => x.title || x.summary);

  data.richSections = [...document.querySelectorAll(".section-item")].map(card => ({
    kicker: card.querySelector("[data-field='kicker']").value,
    title: card.querySelector("[data-field='title']").value,
    html: card.querySelector(".rich-editor").innerHTML
  })).filter(x => x.title || x.html);

  data.contact = {
    email: data.site.email,
    location: data.site.location,
    availability: "Open to relevant industrial software, automation and technical product opportunities."
  };
}

function writeStateToForm() {
  const data = langData();
  $("site-name").value = data.site?.name || "";
  $("site-location").value = data.site?.location || "";
  $("site-email").value = data.site?.email || "";
  $("site-github").value = data.site?.github || "";
  $("site-linkedin").value = data.site?.linkedin || "";
  $("site-cv").value = data.site?.cvUrl || "";
  $("hero-kicker").value = data.hero?.kicker || "";
  $("hero-title").value = data.hero?.title || "";
  $("hero-intro").value = data.hero?.intro || "";
  $("hero-tags-input").value = (data.hero?.tags || []).join(", ");
  $("about-kicker").value = data.about?.kicker || "";
  $("about-title").value = data.about?.title || "";
  $("about-html").innerHTML = data.about?.html || "";
  $("visitor-baseline").value = state.settings?.visitorBaseline || 350;
  $("visitor-api").value = state.settings?.visitorApiUrl || "";
  renderRecruiterList(data.hero?.recruiterStats || []);
  renderProjectsList(data.projects || []);
  renderSectionsList(data.richSections || []);
}

function renderRecruiterList(items) {
  const host = $("recruiter-list");
  host.innerHTML = "";
  items.forEach(addRecruiterCard);
}
function addRecruiterCard(item = { title: "", text: "" }) {
  const card = document.createElement("div");
  card.className = "repeat-card recruiter-item";
  card.innerHTML = `<div class="repeat-card-head"><strong>Recruiter card</strong><button class="remove-btn">Remove</button></div><div class="grid two"><label>Title <input data-field="title" value="${escapeAttr(item.title)}"></label><label>Text <input data-field="text" value="${escapeAttr(item.text)}"></label></div>`;
  card.querySelector(".remove-btn").addEventListener("click", () => card.remove());
  $("recruiter-list").appendChild(card);
}

function renderProjectsList(items) {
  const host = $("projects-list");
  host.innerHTML = "";
  items.forEach(addProjectCard);
}
function addProjectCard(item = {}) {
  const card = document.createElement("div");
  card.className = "repeat-card project-item";
  card.innerHTML = `
    <div class="repeat-card-head"><strong>Project / case study</strong><button class="remove-btn">Remove</button></div>
    <div class="grid two">
      <label>Title <input data-field="title" value="${escapeAttr(item.title)}"></label>
      <label>Technologies, comma separated <input data-field="technologies" value="${escapeAttr((item.technologies || []).join(", "))}"></label>
      <label>Image path <input data-field="image" value="${escapeAttr(item.image)}" placeholder="assets/uploads/project.png"></label>
      <label>Video URL <input data-field="videoUrl" value="${escapeAttr(item.videoUrl)}"></label>
      <label>Project link <input data-field="link" value="${escapeAttr(item.link)}"></label>
      <label class="check"><input type="checkbox" data-field="featured" ${item.featured === false ? "" : "checked"}> Featured</label>
    </div>
    <label>Summary <textarea rows="3" data-field="summary">${escapeText(item.summary)}</textarea></label>
    <label>Problem <textarea rows="3" data-field="problem">${escapeText(item.problem)}</textarea></label>
    <label>Solution <textarea rows="3" data-field="solution">${escapeText(item.solution)}</textarea></label>`;
  card.querySelector(".remove-btn").addEventListener("click", () => card.remove());
  $("projects-list").appendChild(card);
}

function renderSectionsList(items) {
  const host = $("sections-list");
  host.innerHTML = "";
  items.forEach(addSectionCard);
}
function addSectionCard(item = {}) {
  const id = "rich-section-" + Math.random().toString(36).slice(2);
  const card = document.createElement("div");
  card.className = "repeat-card section-item";
  card.innerHTML = `
    <div class="repeat-card-head"><strong>Rich section</strong><button class="remove-btn">Remove</button></div>
    <div class="grid two"><label>Kicker <input data-field="kicker" value="${escapeAttr(item.kicker)}"></label><label>Title <input data-field="title" value="${escapeAttr(item.title)}"></label></div>
    <div class="rich-editor-box"><div class="toolbar" data-editor="${id}"><button data-cmd="bold"><b>B</b></button><button data-cmd="italic"><i>I</i></button><button data-cmd="insertUnorderedList">• List</button><button data-format="h2">H2</button><button data-format="p">P</button><button data-action="link">Link</button><button data-action="image">Image</button><button data-action="table">Table</button><button data-action="video">Video</button></div><div id="${id}" class="rich-editor" contenteditable="true">${item.html || ""}</div></div>`;
  card.querySelector(".remove-btn").addEventListener("click", () => card.remove());
  $("sections-list").appendChild(card);
  setupCardToolbar(card);
}

function setupCardToolbar(card) {
  card.querySelectorAll(".toolbar button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const toolbar = button.closest(".toolbar");
      const editor = $(toolbar.dataset.editor);
      editor.focus();
      if (button.dataset.cmd) document.execCommand(button.dataset.cmd, false, null);
      if (button.dataset.format) document.execCommand("formatBlock", false, button.dataset.format);
      if (button.dataset.action === "link") {
        const url = prompt("Enter link URL:");
        if (url) document.execCommand("createLink", false, url);
      }
      if (button.dataset.action === "image") {
        const url = prompt("Enter image path or URL:");
        if (url) document.execCommand("insertImage", false, url);
      }
      if (button.dataset.action === "table") document.execCommand("insertHTML", false, `<table><thead><tr><th>Column 1</th><th>Column 2</th></tr></thead><tbody><tr><td>Value</td><td>Description</td></tr></tbody></table>`);
      if (button.dataset.action === "video") {
        const url = prompt("Enter YouTube embed URL or direct video URL:");
        if (url) document.execCommand("insertHTML", false, `<p><iframe src="${url}" width="100%" height="360" loading="lazy" allowfullscreen></iframe></p>`);
      }
    });
  });
}

function escapeAttr(value="") { return String(value).replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }
function escapeText(value="") { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }

async function loadCurrentJson() {
  const response = await fetch("../content/portfolio-content.json", { cache: "no-store" });
  const json = await response.json();
  Object.assign(state, json);
  writeStateToForm();
}

function exportJson() {
  readFormToState();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "portfolio-content.json";
  a.click();
  URL.revokeObjectURL(url);
}

function init() {
  bindTabs();
  setupRichToolbar();
  $("load-default").addEventListener("click", () => loadCurrentJson().catch(() => alert("Could not load current JSON. Open this page from GitHub Pages, not from local file.")));
  $("export-json").addEventListener("click", exportJson);
  $("add-recruiter").addEventListener("click", () => addRecruiterCard());
  $("add-project").addEventListener("click", () => addProjectCard({ featured: true }));
  $("add-section").addEventListener("click", () => addSectionCard());
  loadCurrentJson().catch(() => writeStateToForm());
}

document.addEventListener("DOMContentLoaded", init);
