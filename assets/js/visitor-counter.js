(function () {
  // Edit these two values directly in code.
  // Keep the placeholder URL until your Cloudflare Worker is created.
  const VISITOR_API_URL = "https://YOUR-WORKER-URL.workers.dev/visit";
  const BASELINE_COUNT = 350;
  const STORAGE_KEY = "jerrine_portfolio_unique_visit_v1";

  const countEl = document.getElementById("visitor-count");

  function setCount(value) {
    if (!countEl) return;
    const number = Number(value);
    countEl.textContent = Number.isFinite(number)
      ? number.toLocaleString()
      : BASELINE_COUNT.toLocaleString();
  }

  async function initVisitorCounter() {
    const alreadyCounted = localStorage.getItem(STORAGE_KEY) === "true";

    setCount(BASELINE_COUNT);

    if (!VISITOR_API_URL || VISITOR_API_URL.includes("YOUR-WORKER")) {
      return;
    }

    try {
      const response = await fetch(VISITOR_API_URL, {
        method: alreadyCounted ? "GET" : "POST",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) throw new Error("Counter unavailable");

      const data = await response.json();
      setCount(data.count ?? BASELINE_COUNT);

      if (!alreadyCounted) {
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } catch {
      setCount(BASELINE_COUNT);
    }
  }

  document.addEventListener("DOMContentLoaded", initVisitorCounter);
})();
