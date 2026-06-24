(function () {
  const FALLBACK_BASELINE = 350;
  const STORAGE_KEY = "jerrine_portfolio_unique_visit_v1";
  const countEl = document.getElementById("visitor-count");

  function setCount(value) {
    if (!countEl) return;
    const number = Number(value);
    countEl.textContent = Number.isFinite(number) ? number.toLocaleString() : FALLBACK_BASELINE.toLocaleString();
  }

  async function loadCounterConfig() {
    try {
      const response = await fetch("content/portfolio-content.json", { cache: "no-store" });
      if (!response.ok) throw new Error("No config");
      const content = await response.json();
      return content?.settings || {};
    } catch {
      return {};
    }
  }

  async function initVisitorCounter() {
    const settings = await loadCounterConfig();
    const apiUrl = settings.visitorApiUrl || "";
    const baseline = Number(settings.visitorBaseline || FALLBACK_BASELINE);
    const alreadyCounted = localStorage.getItem(STORAGE_KEY) === "true";

    setCount(baseline);

    if (!apiUrl || apiUrl.includes("YOUR-WORKER")) {
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: alreadyCounted ? "GET" : "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (!response.ok) throw new Error("Counter unavailable");
      const data = await response.json();
      setCount(data.count ?? baseline);
      if (!alreadyCounted) localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      setCount(baseline);
    }
  }

  document.addEventListener("DOMContentLoaded", initVisitorCounter);
})();
