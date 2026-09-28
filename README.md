# Apex — Landing Page (Next.js)

Responsive landing page for Apex car parts, converted from a Pen.dev canvas design
to a component-based Next.js app.

**Live:** deployed on Vercel
**Static HTML original:** [shavon-465/Apex](https://github.com/shavon-465/Apex)

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-based `@theme` config)
- **TypeScript**
- **next/font** — Geist self-hosted (no CDN, zero layout shift)

## Breakpoints

Custom breakpoints map 1:1 to the three Pen.dev canvas frames:

| Token | Width | Canvas frame |
|---|---|---|
| base | 390px | Mobile breakpoint |
| `md:` | 834px | Tablet breakpoint |
| `lg:` | 1440px | Desktop/Final 1440px |

Defined in `app/globals.css` via Tailwind v4's `@theme`:

```css
@theme {
  --breakpoint-md: 834px;
  --breakpoint-lg: 1440px;
}
```

## Structure

```
app/
├── layout.tsx              # Root layout + Geist font + metadata
├── page.tsx                # Composes the 4 sections
├── globals.css             # Tailwind import, @theme, .rot1/.rot2 helpers
└── components/
    ├── Navbar.tsx          # Logo + MENU + hamburger
    ├── Hero.tsx            # Headline, subtext, CTA, hero visual
    ├── Categories.tsx      # Section + responsive 1/2/3-col grid
    ├── CategoryCard.tsx    # Reusable card (number badge + label)
    ├── WhyUs.tsx           # 3 feature cards on dark background
    ├── CtaFooter.tsx       # CTA panel + footer (nav, socials, legal)
    └── Icons.tsx           # All SVGs extracted verbatim from canvas
```

## Notable fixes carried over from the static build

- **Card title clipping** — the raw Pen.dev export emitted `gap-[242px]` together
  with `justify-between` on the "Why us" cards. In real CSS flexbox that forces
  content past the fixed card height and clipped every title. Using
  `justify-between` alone (`gap-0`) produces the intended spacing.
- **Responsive grid** — the static version needed duplicated row markup with
  `hidden`/`md:flex` toggles to change column counts. Here a single CSS grid
  (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) handles all three breakpoints
  from one array of data.
- **Fluid text widths** — fixed pixel widths were capped with `max-w-*` so text
  blocks don't overflow below 390px.
- **Image optimization** — source PNGs were 2400×1600 (~5 MB each) but render at
  620px max; resized to 1200px JPEG at 80% quality (14 MB → 556 KB total).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```
