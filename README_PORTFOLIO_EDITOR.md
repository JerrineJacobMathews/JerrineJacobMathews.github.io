# Portfolio Editor Changes

This package adds a simple CMS-style content editor and visitor counter support to the existing GitHub Pages portfolio.

## New pages and files

- `/jjmcveditor/index.html` — browser-based content editor
- `/jjmcveditor/admin.css` — editor styling
- `/jjmcveditor/admin.js` — editor logic
- `/content/portfolio-content.json` — editable portfolio content
- `/assets/js/visitor-counter.js` — visitor counter frontend logic
- `/cloudflare/portfolio-counter-worker.js` — Cloudflare Worker counter backend
- `/cloudflare/README.md` — Cloudflare setup steps
- `/assets/uploads/` — upload folder for images/screenshots
- `/assets/cv/` — upload folder for CV PDF

## How to edit content

1. Upload the repository files to GitHub.
2. Open: `https://jerrinejacobmathews.github.io/jjmcveditor/`
3. Edit your site content.
4. Click **Export JSON**.
5. Replace `content/portfolio-content.json` in GitHub with the exported file.

## Visitor counter

The page now displays a subtle profile view count in the footer.

Default visible value: **350**

To activate real counting, create the Cloudflare Worker using `cloudflare/portfolio-counter-worker.js`, then put the Worker `/visit` URL into `content/portfolio-content.json` under:

```json
"visitorApiUrl": "https://YOUR-WORKER-URL.workers.dev/visit"
```

Until that URL is replaced, the page safely shows the baseline count.


## Hidden editor path

The content editor is intentionally not linked from the public page. Open it manually at:

```text
https://jerrinejacobmathews.github.io/jjmcveditor/
```

The editor page includes `noindex, nofollow` meta tags and `robots.txt` disallows `/jjmcveditor/`. This hides it from search engines, but it is not real password protection. Anyone who knows the exact URL can still open it. The editor is export-only, so visitors cannot publish changes without GitHub repository access.

## Opening welcome loader

The public portfolio now shows a short welcome/loading screen before the main content appears. Edit the text in `index.html` inside the `portfolio-loader` block.
