# JerrineJacobMathews.github.io

Static GitHub Pages portfolio.

## Editing content

Edit the HTML/CSS/JavaScript files directly in code:

- `index.html` — main portfolio page content
- `assets/css/style.css` — styling
- `assets/js/main.js` — page interactions and language text
- `assets/js/visitor-counter.js` — profile visitor counter frontend
- `cloudflare/portfolio-counter-worker.js` — Cloudflare Worker backend for visitor counting

## Visitor counter

The visitor counter starts from `350` until the Cloudflare Worker is connected.

After creating the Worker, open:

`assets/js/visitor-counter.js`

Replace:

`https://YOUR-WORKER-URL.workers.dev/visit`

with your real Worker `/visit` URL.
