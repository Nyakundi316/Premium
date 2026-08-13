# Premium Concrete PM — Design System

Source of truth for Stitch generations and manual restyles. Synthesized from the
live codebase (products, services, home sections).

## Brand & Atmosphere
- **Vibe**: Professional / industrial-premium. Trustworthy, high-contrast,
  photography-led. Real yard and installation photos over illustrations.
- **Dark surfaces** carry the brand: deep navy panels with gold accents.

## Palette
| Role | Value | Usage |
|:--|:--|:--|
| Primary Action (Gold) | `#FFC20E` | CTAs, accents, kickers, stat highlights |
| Gold Dark | `#B8860B` | Gradients, hover depth |
| Ink / Panel | `#0A0C10` – `#0D1B30` | Dark hero panels, dark-mode bg |
| Slate body | `slate-600` / `white/70` | Body copy (light / dark surfaces) |
| Surface | `#FFFFFF`, `slate-50` | Cards, info blocks |
| Hairline | `black/10`, `white/10–15` | Borders, dividers |

## Typography
- Default app font (system sans via Next). Culverts page injects
  Barlow Condensed (display) + DM Sans (body) — treat as page-local, not global.
- Headlines: `font-extrabold`, tight leading (≤1.1), two-line split with the
  second line in gold.
- Kickers: 11px, uppercase, `tracking-[0.2em+]`, muted.

## Geometry
- **Pill-shaped** buttons (`rounded-full`), paired: solid gold primary + ghost
  outline secondary.
- **Softly rounded** cards: `rounded-2xl` / `rounded-3xl`.
- Glassmorphism chips: `bg-white/10 backdrop-blur border border-white/15–20`.

## Depth
- Whisper-soft card shadows (`shadow-sm`, hover `shadow-md/lg`).
- Gold CTAs may float: `shadow-lg shadow-amber-500/20`.
- Photos framed with `ring-1 ring-white/15` on dark panels.

## Imagery
- Real product/site photography from `/images/products/**`, descriptive
  kebab-case filenames. Full-bleed hero photos sit under directional gradient
  scrims (`from-black/70 → to-black/20`) so copy stays AA-contrast.

## Motion
- Framer Motion on client pages only: fade-up 10–22px, 0.5s, ease-out,
  staggered children. Server components stay static.

## Voice
- Short, confident, site-practical: "Cast at our yard, delivered to site."
- CTAs: "Call to Order", "Request a Quote", WhatsApp quick quote
  (`tel:+254711789438`, `wa.me/254711789438`).
