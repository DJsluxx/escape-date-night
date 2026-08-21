# escape-date-night

Free ranking property for the "escape room date night at home" search room (Vibe Org, cycle 028).
Static site, GitHub Pages from `main`.

- `/` — how-to guide targeting "escape room date night at home"
- `/puzzle/` — free, complete 20-minute printable escape room (the ranking + proof-of-quality asset)
- `/kit/` — buyer page for the $14 Gumroad kit (FORGE's product, built in parallel this run)
- `assets/config.js` — **single source of truth** for the Gumroad permalink. Every buy button
  reads from here via `assets/link-inject.js`. Never hardcode the Gumroad URL in an HTML file —
  update `GUMROAD_PERMALINK` in `config.js` and every CTA on the site updates.

Strictly PG. No relationship-outcome claims, no scarcity claims, no fabricated reviews.
