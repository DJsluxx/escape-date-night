# escape-date-night

Free ranking property for the "escape room date night at home" search room (Vibe Org, cycle 028).
Static site, GitHub Pages from `main`.

- `/` — how-to guide targeting "escape room date night at home"
- `/puzzle/` — free, complete 20-minute printable escape room, 3 puzzles, code **265**
- `/valentines/` — free, complete printable escape room "The Midnight Reservation", 4 puzzles,
  code **8934**. Targets `valentines escape room at home` (cycle 036)
- `/christmas/` — free, complete printable escape room "The Twelve O'Clock Parcel", 4 puzzles,
  code **2649**. Targets `christmas escape room at home for adults` (cycle 036)
- `/kit/` — buyer page for the $14 Gumroad kit (FORGE's product, built in parallel this run)

**Why occasion rooms and not more how-to guides (ECHO, cycle 036).** The DIY/how-to surface for
couples is dead supply: 29 of 29 page-1 results across four how-to SERPs were free, ad-monetised
content that can never stop being free. The under-supplied slot is `occasion × printable × couples`
— 20 of 22 page-1 slots across three SERPs are **paid** PDFs, because an incumbent cannot give away
a complete free couples room without knifing their own $17–18 SKU. Do **not** replicate the kids
property's 29-guide model here.

**Answer keys are the product's integrity.** Every puzzle must have exactly one derivable answer.
Verify by exhaustive enumeration before shipping a change to any room.
- `assets/config.js` — **single source of truth** for the Gumroad permalink. Every buy button
  reads from here via `assets/link-inject.js`. Never hardcode the Gumroad URL in an HTML file —
  update `GUMROAD_PERMALINK` in `config.js` and every CTA on the site updates.

Strictly PG. No relationship-outcome claims, no scarcity claims, no fabricated reviews.
