# Rainbow Valley Lodge

Website for Rainbow Valley Lodge in Ennis, Montana: rooms, suites and cabins, Madison River fly fishing, local day trips, a trip planner and contact details. Bookings are completed in the lodge's existing Checkfront system; this site does not take reservations or send messages.

Built with Next.js (App Router) as a fully static export: `npm run build` writes plain HTML, CSS and JS to `out/`, which any static host can serve.

## Getting started

Requires Node.js 20.9 or later (`.nvmrc` pins the version used in CI).

```bash
npm install
npm run dev        # http://localhost:3000
```

To check the production output locally:

```bash
npm run build
npm run preview    # serves out/ on http://localhost:3000
```

## Scripts

| Script                 | What it does                                                                      |
| ---------------------- | --------------------------------------------------------------------------------- |
| `npm run dev`          | Development server with hot reload.                                               |
| `npm run build`        | Static export to `out/`, then `postbuild` runs `scripts/fix-export-segments.mjs`. |
| `npm run preview`      | Serves `out/` with `serve` (fetched on demand via `npx`, not a dependency).       |
| `npm run lint`         | ESLint (Next.js core-web-vitals and TypeScript rules).                            |
| `npm run typecheck`    | Generates route types, then runs `tsc --noEmit`.                                  |
| `npm run format`       | Formats the repository with Prettier.                                             |
| `npm run format:check` | Fails if any file is not Prettier-formatted.                                      |
| `npm run check`        | `typecheck`, `lint` and `format:check` together. CI runs this.                    |

`scripts/fix-export-segments.mjs` works around a Next.js static-export bug on Windows, where prefetch files are written into nested folders (`__next.about/__PAGE__.txt`) instead of `__next.about.__PAGE__.txt`, so client-side prefetches return 404. It does nothing on other platforms.

## Structure

```
src/
  app/                  Routes (one folder per page), root layout, not-found,
                        icon.svg, robots.ts, sitemap.ts
    stay/[slug]/        Stay detail pages, generated from content/stays.ts
  components/
    layout/             Header (with mobile menu) and footer
    sections/           Sections shared by several pages (intro, FAQ, closing
                        call to action, photo gallery and viewer)
    home/ plan/ stay/ explore/
                        Page-specific components
    forms/              Shared date-range rules for the booking forms
    ui/                 Small building blocks: SmartLink, ArrowLink, Photo, Brand
    seo/                JSON-LD
  config/
    site.ts             Business details and navigation (safe for client code)
    deployment.ts       Environment-driven settings (server only)
  content/              Typed copy and data: stays, FAQ, destinations,
                        itineraries, gallery, photo registry
  lib/                  Framework-free helpers: metadata, dates, trip summary
  styles/               globals.css importing ordered partials
  assets/               images/ and fonts/ (static imports)
scripts/                fix-export-segments.mjs
docs/                   verification.md (migration parity results),
                        asset-sources.json (where each photo came from)
```

## Conventions

- **Server Components by default.** Client components exist only for real interactivity: header menu, home booking strip, trip planner, stay filter, itinerary picker, photo viewer.
- **Content lives in `src/content/`**, business details in `src/config/site.ts`. Edit copy there rather than in components where possible.
- **CSS order matters.** `src/styles/globals.css` imports the partials in the order their rules appeared in the original single stylesheet, so equal-specificity rules keep the same cascade. Four rules marked `Legacy cascade` restate values that a global `.section`/`.container` override used to win; keep them unless you change those overrides too.
- **Text nodes:** where literal text meets an element, render one string (`{"to the "}<em>…</em>`) so the DOM keeps a single text node, matching the original markup.
- **Photos:** use `<Photo photo={photos.x} />`. It reads dimensions from the static import via `getImageProps` and emits a `srcset` with the 720px `-small` variant when one exists (plain `next/image` can't produce a `srcset` in an unoptimized static export). Register new photos in `src/content/photos.ts`.
- **Links:** `SmartLink` and `ArrowLink` use `next/link` for internal paths (`/…`) and plain anchors for `tel:`, `mailto:`, hash and external URLs.
- **Fonts:** Inter is self-hosted with `next/font/local` and exposed as `--font-inter`; CSS uses the `--font` token. `adjustFontFallback` is off so characters Inter lacks (arrows) fall back to plain Arial, as in the original design.
- **No invented facts.** Every policy, hour, number and name on the site was carried over from the original site's source. Don't add new ones (prices, reviews, ratings, awards…) unless the owner has confirmed them.

## Routes

| Path                          | Page                                                                                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `/`                           | Home                                                                                                                               |
| `/stay/`                      | Stays, with a filter by type                                                                                                       |
| `/stay/lodge-rooms/`          | Lodge rooms                                                                                                                        |
| `/stay/suites/`               | Suites & kitchens                                                                                                                  |
| `/stay/trapper-cabin/`        | Trapper Cabin                                                                                                                      |
| `/stay/c-bar-3/`              | C Bar 3 Cabin                                                                                                                      |
| `/fishing/`                   | Madison River fly fishing                                                                                                          |
| `/explore/`                   | Day trips and suggested three-day itineraries                                                                                      |
| `/about/`                     | Our story and the hosts                                                                                                            |
| `/gallery/`                   | Photo journal with viewer                                                                                                          |
| `/plan/`                      | Trip planner, arrival details, policies and FAQ. Accepts `?arrival=YYYY-MM-DD&departure=YYYY-MM-DD&guests=1-5` from the home page. |
| `/contact/`                   | Phone, email and directions                                                                                                        |
| `/privacy/`                   | Privacy information                                                                                                                |
| `/robots.txt`, `/sitemap.xml` | Generated from `src/app/robots.ts` and `sitemap.ts`                                                                                |

Unknown URLs get the styled 404 page (`out/404.html`).

## Configuration

Copy `.env.example` to `.env.local` for local overrides. Both variables are read at build time.

| Variable         | Default                                                                          | Purpose                                                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SITE_URL`       | `https://$VERCEL_PROJECT_PRODUCTION_URL` on Vercel, else `http://localhost:3000` | Public origin, no trailing slash. Used for canonical URLs, Open Graph images, JSON-LD, robots and sitemap.                                             |
| `SITE_INDEXABLE` | `false`                                                                          | `true` allows search engines (`index, follow`, a permissive `robots.txt` with the sitemap). Anything else keeps `noindex, nofollow` and `Disallow: /`. |

The build fails if `SITE_INDEXABLE=true` while `SITE_URL` still resolves to localhost.

## Before launch

- [ ] Owner approves all copy, facts and photography on the site.
- [ ] Owner confirms current rates, policies (deposit, cancellation, pets, check-in/out), office hours and phone numbers.
- [ ] Owner supplies or approves a privacy policy for this domain (`/privacy/` currently links to the policy on rainbowvalleylodge.com).
- [ ] Decide what happens to the current website and the links that point to it ("Original lodge website", "Original accommodation details", "See the full collection", Virginia City and creek pages).
- [ ] Connect the production domain in Vercel and set `SITE_URL` to it.
- [ ] Set `SITE_INDEXABLE=true` for production only, then redeploy.
- [ ] Check `robots.txt`, `sitemap.xml` and the canonical URLs on the live domain.
- [ ] Once the domain is final, consider extending HSTS in `vercel.json` with `includeSubDomains` (only if every subdomain serves HTTPS).
- [ ] Submit the sitemap in Google Search Console.

## CI

`.github/workflows/ci.yml` runs on pushes to `main` and on pull requests: `npm ci`, `npm run check`, `npm run build`, then uploads `out/` as the `site` artifact. Dependabot (`.github/dependabot.yml`) opens weekly npm updates (Next, React and their types grouped) and monthly GitHub Actions updates.

## Hosting

Any static host can serve `out/`; it must serve `index.html` for directory URLs and `404.html` for unknown paths.

On Vercel, import the repository with the **Next.js** framework preset; the static export is detected automatically. `vercel.json` adds security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, `Strict-Transport-Security`). There is no Content Security Policy yet: Next's inline bootstrap scripts need a tested hash- or nonce-based policy first.

### Deployment

Preview URL: _not deployed yet_.
