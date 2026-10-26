# Migration verification

Parity checks between the original generated site (`build.py` → `dist/`) and the Next.js static export (`out/`), run on 26 October 2026 before the legacy files were removed.

## Setup

- Both sites served locally by the same small Node static server (directory index files, `404.html` fallback).
- Browser: Google Chrome 155.0.8059.85 (system install) driven by `playwright-core` 1.64.1. Pixel diffs with `pixelmatch` 8.
- Capture settings: reduced motion, every image forced eager and decoded, `document.fonts.ready` awaited, form controls re-laid-out after the font swap.
- Chrome flags for deterministic rendering: `--disable-checker-imaging --disable-gpu --disable-gpu-rasterization --force-color-profile=srgb --disable-partial-raster`. Without them, two captures of the **same** legacy page differed by up to 785,562 pixels (asynchronous image rasterisation), so results without them aren't meaningful. With them, 4 repeat captures per site and width differ by 0 pixels.

## 1. Full-page pixel diff

15 URLs (14 routes plus `/plan/?arrival=2027-06-10&departure=2027-06-13&guests=4`) × 6 widths (1600, 1280, 1024, 768, 390, 320 px) = 90 full-page comparisons, strict pixelmatch (`threshold: 0`, anti-aliasing counted).

| Result                                     |                 Count |
| ------------------------------------------ | --------------------: |
| Page height identical                      |                 90/90 |
| Pixel-identical                            |                 87/90 |
| With differences (home at 1600, 1024, 390) | 3 (4 pixels in total) |

The 4 remaining pixels are each ±1 in a single 8-bit colour channel, inside the home page's "adventure card" photos. Cause: Next's CSS minifier (Lightning CSS) rewrites `linear-gradient(0deg, #102a20d9, transparent 90%)` to the mathematically equivalent `linear-gradient(#0000 10%, #102a20d9)`, and Chrome rounds the two forms differently. Proof: injecting only the rewritten gradient into the **legacy** page makes it pixel-identical (0 pixels) to the Next build at all three affected widths. All image files in the export are byte-identical to the originals.

Issues found and fixed along the way:

| Symptom                                                           | Cause                                                                                                                         | Fix                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Arrow glyphs (← → ↗) and the text after them shifted by about 1px | `next/font` injected a size-adjusted "Inter Fallback" face; glyphs missing from Inter rendered with it instead of plain Arial | `adjustFontFallback: false`                                   |
| `<select>` text 1px lower at ≤640px                               | Chrome keeps pre-font-swap metrics in form controls; the two captures caught different states (legacy is affected too)        | Capture fix: re-lay-out controls after `document.fonts.ready` |
| Large low-amplitude diffs inside photos, varying between runs     | Non-deterministic rasterisation (legacy against itself differed too)                                                          | Capture fix: Chrome flags above                               |

## 2. CSS split (computed styles)

The single minified `styles.css` was split into 31 ordered partials by a PostCSS script. Every rule is classified by selector prefix, unclassified selectors fail the script, and selector/declaration pairs are counted (1,217 in; 1,222 out = +1 `--font` token, +4 compensations). Then the computed style of **every element and `::before`/`::after`**, for **every property**, was compared between the original file and the concatenated partials, on all 14 routes at all 6 widths (`<details>` opened):

- Initial split: 38 differences, from four places where a global `.section`/`.container` rule inside a later `@media` block beat a component rule. Co-located media blocks can't keep that interleaving, so the four winning values are restated as commented "legacy cascade" rules.
- Final: **0 differences**.

## 3. DOM structure

The hydrated `<body>` of each route (1280 and 390 px) was walked node by node: element, attributes, and **each text node separately**, so JSX splitting one text run into several nodes would show up.

- Structural or text-node differences: **0**.
- Attribute differences (all intended): empty `class=""` dropped on images; IDs only the old `app.js` used dropped (`filter-status`, `itinerary-result`, `trip-form`, `trip-error`, `trip-summary`, `trip-dates`, `trip-details`, `edit-trip`, `photo-dialog`, `large-photo`, `photo-caption`, `photo-position`) — no CSS selector referenced them; the logo `<img>` gains `decoding`/`style` from `next/image`; query-string presets are rendered as `value`/`selected` attributes instead of set as properties.
- Computed styles of matched elements: only `background-position` reported as `0px 0px` instead of `0% 0%` (minifier writes `background:none` as `background:0 0`; same rendering), the gradient rewrite above, and the logo's transparent text colour from `next/image`.

## 4. Behaviour

The same scripted interactions ran on both sites and the JSON outcomes were compared field by field:

- Mobile menu: open/close, `aria-expanded`, label swap, Escape closes and returns focus to the toggle, menu links.
- Stay filter: every button by mouse, Enter and Space; `aria-pressed`, status text ("Showing 2 featured stay options"), visible cards.
- Itinerary: every trip style by mouse and Space; pressed state and all day texts.
- Home booking strip: `min` dates (today / tomorrow), departure `min` follows arrival, departure pushed to the day after a later arrival, submit to `/plan/?arrival=2027-06-12&departure=2027-06-15&guests=4`, plan form pre-filled.
- Trip planner: empty submit blocked natively; review text ("Jun 10, 2027 – Jun 13, 2027", "3 nights · 4 guests · Trapper Cabin", "1 night · 1 guest · …", "5 nights · 5+ guests · …" across a year boundary); focus moves to the summary; Edit restores the form with values kept and focuses Arrival; departure before arrival blocked (`Value must be 06/11/2027 or later.`); past-date preset ignored invalid `guests=9` and is blocked on submit; custom-validity fallback message and inline error.
- Photo viewer: open, next, ArrowRight, wrap-around with ArrowLeft, Escape returns focus to the active tile, backdrop click and close button, gallery wrap from 12/12 to 1/12.
- In-page `#welcome` link.

Result: **all fields identical except one intended change**. The mobile menu now closes when the window is widened to desktop width. Legacy left it open, which the brief asked to fix.

Screenshots of open states (menu at 390px, photo viewer, trip review, "Private cabins" filter, "Here to fish" itinerary): **0 pixel differences** on all five.

## 5. Navigation (Next build)

18/18 checks passed: header, card, footer and logo links navigate client-side (a `window` marker survives), titles and `aria-current` update (stay detail pages keep "Stay" current), detail pages start at the top, Back restores the previous page and title, `/explore/#virginia-city` lands at the same offset as legacy (230px), the mobile menu closes after navigating, and an unknown URL returns a 404 status with the styled page and title.

Across every route, plus scrolling to trigger viewport prefetches: **0 responses ≥ 400** (prefetch segment files included), **0 console errors or warnings** (hydration included), **0 page errors**.

## 6. Head tags

Identical on every route: `<title>`, description, `robots` (`noindex, nofollow`), `theme-color`, viewport, charset, `og:title`, `og:description`, `og:type`, `og:image` (same photo) and canonical **path**.

Intended changes: the canonical/OG origin now comes from `SITE_URL` instead of the old `chatgpt.site` preview URL; `og:image:width/height` and Next's derived `twitter:*` tags were added; the favicon URL is content-hashed; the home page has `LodgingBusiness` JSON-LD (only details shown on the site); the 404 page no longer declares a canonical URL or OG tags.

## 7. Build checks

`npm run build` and `npm run check` (typecheck, ESLint, Prettier) pass.

## 8. After cleanup (re-run)

Approved copy changes: the footer note "Private design preview. Property photography and lodge details are sourced from Rainbow Valley Lodge. Reservations are completed through the lodge’s existing booking service." was removed with its CSS; the footer link "Privacy & preview information" became "Privacy"; `/privacy/` lost its preview wording ("ABOUT THIS EXPERIENCE", "preview information.", "A proposed website experience for Rainbow Valley Lodge.", "in this preview"). The note was the last element in the footer with nothing fixed below it, so no spacing had to move.

All checks were re-run with the same edits applied to the legacy pages in the browser, so only unintended changes would show:

- Pixel diff: 81/90 identical; all 90 heights match. `/privacy/` differs at all 6 widths only inside the four rewritten strings (kicker, second heading line, intro sentence, photography sentence). Home keeps the same 4 gradient pixels described above.
- DOM: the only text-node differences are those four strings on `/privacy/`; attribute and computed-style differences are unchanged from section 3.
- Behaviour: identical except the intended menu-on-resize change; the 5 state screenshots are pixel-identical.
- Navigation: 18/18 checks, 0 responses ≥ 400, 0 console errors or warnings, 0 page errors.
- `npm audit --omit=dev` and `npm audit`: 0 vulnerabilities.
