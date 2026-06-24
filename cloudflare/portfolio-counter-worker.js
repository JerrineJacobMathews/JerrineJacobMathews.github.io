// Cloudflare Worker for jerrinejacobmathews.github.io profile visitor counter
// KV binding required: VISITOR_KV
// Public route: https://YOUR-WORKER-URL.workers.dev/visit

const BASELINE_COUNT = 350;
const COUNT_KEY = "profile_visitor_count";
const ALLOWED_ORIGIN = "https://jerrinejacobmathews.github.io";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    if (url.pathname !== "/visit") {
      return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers });
    }

    let count = Number(await env.VISITOR_KV.get(COUNT_KEY));
    if (!Number.isFinite(count) || count < BASELINE_COUNT) {
      count = BASELINE_COUNT;
    }

    if (request.method === "POST") {
      count += 1;
      await env.VISITOR_KV.put(COUNT_KEY, String(count));
    }

    return new Response(JSON.stringify({ count }), { headers });
  }
};
