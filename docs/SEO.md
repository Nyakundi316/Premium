# Premium Cabro — SEO Guide

Last updated: 2026-07-17

## Canonical domain

The preferred canonical domain is **`https://www.premiumcabro.com`**.

- All canonicals, Open Graph URLs, the sitemap and JSON-LD use this value.
- It is defined once in `app/lib/site.ts` (`SITE.url`). Never hard-code the
  domain anywhere else.
- Both `premiumcabro.com` and `www.premiumcabro.com` currently return 200
  with no redirect. **Recommended:** configure a permanent (301) redirect
  from `premiumcabro.com` → `www.premiumcabro.com` at the hosting/DNS level
  so Google sees only one version.

## Primary keyword groups and target pages

| Keyword group | Target page |
|---|---|
| cabro blocks Kenya, cabros Kenya, paving blocks Kenya, interlocking paving blocks Kenya, cabro suppliers Kenya, cabro blocks near me | `/products/cabro` (primary) + homepage `/` |
| cabro prices in Kenya, cabro blocks prices, cabro driveway cost | `/cabro-blocks-prices-kenya` |
| cabro paving Nairobi, cabro installation Nairobi | `/cabro-installation-nairobi` |
| 60mm cabro blocks, 80mm cabro blocks | `/guides/60mm-vs-80mm-cabro` (+ comparison sections on `/products/cabro` and homepage) |
| cabro patterns / designs | `/patterns` |
| brand searches (Premium Cabro) | `/` and `/about` |

One page per intent — do **not** create additional near-duplicate location
pages ("cabro blocks Ruiru", "cabro blocks Thika", …). Thin doorway pages
can trigger Google spam policies and hurt the whole site.

## Where things live in the code

- `app/lib/site.ts` — canonical URL, business name, phone, email, address,
  service areas, social profiles, default title/description.
- `app/lib/schema.ts` — LocalBusiness, WebSite, BreadcrumbList and FAQPage
  JSON-LD builders.
- `app/lib/cabro-faqs.ts` — FAQs rendered on `/products/cabro` and mirrored
  into FAQPage structured data. Edit only this file to change both.
- `app/sitemap.ts` — sitemap entries. When you meaningfully change a page,
  update its `lastModified` date there.
- `app/robots.ts` — robots rules (login/register are disallowed and also
  `noindex` via their layouts).

## Google Search Console setup (manual, one-time)

1. Go to https://search.google.com/search-console and add a **Domain**
   property for `premiumcabro.com` (covers www and non-www).
2. Verify via the DNS TXT record Google provides (added at your DNS host).
3. Submit the sitemap: **Indexing → Sitemaps →** enter `sitemap.xml`
   (full URL: `https://www.premiumcabro.com/sitemap.xml`).
4. Use **URL Inspection** on these URLs and click *Request indexing*:
   - `https://www.premiumcabro.com/`
   - `https://www.premiumcabro.com/products/cabro`
   - `https://www.premiumcabro.com/cabro-blocks-prices-kenya`
   - `https://www.premiumcabro.com/cabro-installation-nairobi`
   - `https://www.premiumcabro.com/guides/60mm-vs-80mm-cabro`

## Google Business Profile checklist (manual)

A Business Profile is the biggest lever for "cabro blocks near me" and map
results — the website alone cannot rank in the map pack.

- [ ] Claim/create the profile at https://business.google.com for the yard
      on Githunguri Road, Kiambu.
- [ ] Use **exactly** the same business name, address and phone number as
      the website (`0711 789 438`). Consistency matters.
- [ ] Set categories (e.g. "Paving materials supplier", "Paving contractor").
- [ ] Add opening hours matching the contact page (Mon–Sat 8:00–17:00).
- [ ] Link the website: `https://www.premiumcabro.com`.
- [ ] Upload real photos of the yard, products and completed installations —
      and keep adding new project photos regularly.
- [ ] Ask genuine customers to leave reviews after completed jobs (a simple
      WhatsApp message with the review link works well). **Never** buy or
      fabricate reviews — Google removes them and may suspend the profile.

## Monthly reporting metrics

From Search Console (Performance report):

- Impressions and clicks for the queries above
- CTR and average position per target page
- Pages with impressions but low CTR (title/description candidates)

From Google Analytics (`G-REPZTGDZ4Z`):

- Organic sessions, quote-form submissions, WhatsApp/phone clicks

## Safe content publication guidance

- Publish real project write-ups (location area, pattern, thickness, scope)
  with your own photos — these are the most valuable pages you can add.
- Keep every claim accurate: no invented prices, certifications, warranties
  or project details.
- Write for customers first; mention keywords naturally, once or twice.

**Do not:** stuff keywords, hide text, buy backlinks, post fake reviews,
duplicate the same page per town, or auto-generate thin pages. These
violate Google's spam policies and risk manual penalties that are far more
costly than any short-term gain.

## Known follow-ups (found during the SEO audit)

- **NAP inconsistency:** the contact page shows `+254 721 150 988` and
  `info@premiumconcretepm.co.ke`, while the rest of the site (and JSON-LD)
  uses `0711 789 438` and `info@premiumcabro.com`. Confirm which are
  correct and make them consistent everywhere, including Business Profile.
- **Working hours** differ between the contact page (Mon–Sat 8–5) and the
  WhatsApp widget (Mon–Sat 8–18). Align them.
- **Projects page data:** several portfolio entries carry specific locations
  and dates but the code comments say no completed projects exist yet.
  Replace with genuinely completed projects (real photos, real areas) before
  giving them dedicated detail pages or sitemap entries.
- **Social profiles** in the footer (Instagram/Facebook/LinkedIn) should be
  verified as live accounts; remove any that don't exist.
- Add the www → non-www 301 redirect at the host (see above).

## What code changes can and cannot do

Everything in this repo (titles, canonicals, structured data, content,
internal links, sitemap) makes the site *eligible* to rank and easy to
crawl. Actual rankings depend on indexing time, Business Profile signals,
genuine reviews, backlinks from real Kenyan sites (suppliers, directories,
press) and content freshness. Expect movement over weeks-to-months, not
days, and never trust any promise of a guaranteed #1 position.
