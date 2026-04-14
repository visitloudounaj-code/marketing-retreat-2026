# Visit Loudoun — 2026 Marketing Retreat

A four-page static site presenting Visit Loudoun's April 2026 marketing retreat briefing: the digital strategy recommendations, a full sitemap audit, a new holiday content architecture and a prioritized execution plan. Built in Visit Loudoun brand styling (Lora + Source Sans 3, DeepMerlot / EarthyNoir / Blonde Ale palette).

## Short description (for the GitHub repo "About" field)

> Static briefing site for Visit Loudoun's 2026 Marketing Retreat — digital strategy, sitemap audit, holiday content architecture and a combined 90-day action plan.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | **Strategy Brief** — site architecture and digital strategy case: the shift, data context, competitor benchmarks, the proposal, evidence and strategic alignment |
| `sitemap-audit.html` | **Part A: Sitemap Audit & Restructure** — thin content flags, 19 consolidation candidates, content gap priorities and the page inventory |
| `holiday-strategy.html` | **Part B: Holiday Content Strategy** — why blog posts don't compound, hub-and-spoke architecture and the Tier 1/2/3 holiday priority list |
| `action-plan.html` | **Part C: Combined Action Plan** — interactive checklist across Quick Wins, Content Build and Architecture phases, with live progress bars |

A persistent "Questions for Discussion" block lives in the footer of every page so the retreat prompts are always one scroll away, regardless of which section is open.

## File structure

```
site/
├── index.html              # Strategy Brief
├── sitemap-audit.html      # Part A
├── holiday-strategy.html   # Part B
├── action-plan.html        # Part C
├── styles.css              # Shared Visit Loudoun brand stylesheet
├── scripts.js              # Scroll progress, action checklist, progress bars
└── README.md
```

All four HTML pages share `styles.css` and `scripts.js`. The header navigation and footer "Questions for Discussion" are duplicated into each HTML file so the site works as pure static HTML (no build step, no server required).

## Running locally

Open any `.html` file directly in a browser, or serve the folder:

```
npx serve .
# or
python -m http.server 8000
```

## Deploying

### CodeSandbox
1. Create a new sandbox → "Static" template.
2. Drag the `site/` folder contents into the sandbox root.
3. The preview auto-refreshes on every edit.

### GitHub Pages
1. Create a new repo (e.g. `vl-marketing-retreat-2026`).
2. Commit the contents of `site/` to the repo root (or to a `/docs` folder).
3. **Settings → Pages → Source** → select the branch and `/ (root)` (or `/docs` if you used that folder).
4. GitHub publishes at `https://<username>.github.io/<repo-name>/`.

No build step, no framework, no dependencies beyond the two Google Fonts loaded from CDN.

## Brand

- **Colors:** DeepMerlot `#77092E`, EarthyNoir `#3E495B`, Blonde Ale `#D5BC5F`, Bold Sage `#7B8F86`, Ripe Vine `#325A1E`, Toasty Brick `#9D5950`, Morning Sun `#F0E9CC`, Dogwood Blush `#EEE4DA`
- **Fonts:** Lora (serif headlines), Source Sans 3 (body)
- **Voice:** third-person, authoritative, data-backed

Prepared by AJ for the Visit Loudoun Marketing Retreat — April 2026.
