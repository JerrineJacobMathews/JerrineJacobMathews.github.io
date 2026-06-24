# Visitor Counter Setup

This folder contains the Cloudflare Worker code for the portfolio visitor counter.

## What it does

- Starts from baseline count: **350**
- Stores the visitor count in Cloudflare KV
- Allows only `https://jerrinejacobmathews.github.io` through CORS
- The portfolio page uses browser `localStorage` so the same browser/device is counted only once

## Cloudflare setup

1. Create a Cloudflare account.
2. Go to **Workers & Pages**.
3. Create a KV namespace, for example: `PORTFOLIO_VISITORS`.
4. Create a Worker, for example: `portfolio-counter`.
5. Paste the code from `portfolio-counter-worker.js`.
6. In the Worker settings, add a KV binding:
   - Variable name: `VISITOR_KV`
   - KV namespace: `PORTFOLIO_VISITORS`
7. Deploy the Worker.
8. Copy your Worker URL, for example:
   `https://portfolio-counter.YOURNAME.workers.dev/visit`
9. Open `content/portfolio-content.json` and replace:
   `https://YOUR-WORKER-URL.workers.dev/visit`
   with your real Worker URL.

## Test

Open this in a browser:

`https://YOUR-WORKER-URL.workers.dev/visit`

Expected result:

```json
{"count":350}
```

After the first real visit from your portfolio, it should become 351.
