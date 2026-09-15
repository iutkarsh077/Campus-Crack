# CodeCampus — Crack The Campus landing clone

Student-focused recreation of the [Crack The Campus](https://crackthecampus.com/) **main landing page** (promo, nav, hero, company trust marquee, Dual-Core Structure, Monthly Performance Series, CTC Score, Enterprise Infrastructure, FAQ, footer, Ruby chatbot). Built as a Frontend Developer Assessment submission: design quality balanced with performance, maintainable architecture, and CSS-first motion.

Reference brief: [`.cursor/rules/projectrules.md`](.cursor/rules/projectrules.md). Working notes / changelog: [`spec.md`](spec.md).

**Developer docs:** [`docs/getting-started.md`](docs/getting-started.md) · [`docs/components.md`](docs/components.md) · [`docs/data-flow.md`](docs/data-flow.md)

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local development (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

**Requirements:** Node 20+ recommended.

---

## Technology choices

| Choice | Why |
|--------|-----|
| **Next.js 16 (App Router)** | Assessment-friendly React stack; file-based routes; `next/image` for LCP; easy Vercel deploy |
| **React 19 + TypeScript** | Typed props/content; Server Components by default to keep JS small |
| **Tailwind CSS 4** | Fast UI iteration; utility classes mapped to CSS variables in `@theme` |
| **lucide-react** | Tree-shakeable icons only (promo sparkle, nav Menu/X, CTA arrows, marquee marks, contest Trophy, score Plus/Equal). No animation UI kit |
| **No Framer Motion / GSAP** | Assessment scores animation *and* performance; CSS `transform` / `opacity` is enough |

Self-hosted fonts (Inter, JetBrains Mono, Golos Text) via [`public/assets/styles/fonts.css`](public/assets/styles/fonts.css) — avoids runtime Google Fonts / Turbopack fetch failures and keeps privacy + LCP predictable.

---

## Architecture overview

```
src/
  app/
    layout.tsx          # Root shell, font preload, metadata
    page.tsx            # Composes landing sections
    globals.css         # Design tokens + CSS motion
  components/
    promo-banner.tsx    # Top promo strip (server)
    site-header.tsx     # Sticky header + responsive nav (client island)
    login-button.tsx    # Shared Login CTA
    site-button.tsx     # Reusable primary/ghost pill buttons
    hero-section.tsx    # Hero (server)
    trust-marquee.tsx   # Dual-row logo marquee (server)
    dual-core-section.tsx # Web Hub + Pro-Suite pillars (server)
    monthly-sprint-section.tsx # Monthly Performance Series (server)
    monthly-contest-card.tsx   # Contest frame + leaderboard (server)
    ctc-score-section.tsx      # The Why / CTC Score badges (server)
    infra-strip-section.tsx    # Enterprise stats strip (server)
    faq-section.tsx            # FAQ static Q&A cards (server)
    site-footer.tsx            # Brand / product / contact / map footer (server)
    ruby-chatbot.tsx           # Ruby FAB + chat panel (client, dynamic)
  constants/
    landing.ts          # All landing copy and structured content
  interfaces/
    landingpageinterface.ts
public/assets/
  images/               # logo.webp, images2–6.webp, image7.png, image8.png, font files
  styles/fonts.css      # @font-face (latin + latin-ext)
```

**Patterns**

- **Data-driven UI:** Copy and nav live in `constants/landing.ts`; types in `interfaces/`. Swap content without rewriting markup.
- **Tokens, not hex in JSX:** Colors in `:root` / `@theme` (`globals.css`); components use classes like `bg-nav-login`, `text-hero-muted`.
- **Minimal client JS:** `SiteHeader` (mobile menu) and dynamically loaded `RubyChatbot` (`ssr: false`). Promo, hero, marquee, Dual-Core, Monthly Sprint, CTC Score, Infra Strip, FAQ, and Site Footer are Server Components.
- **Section composition:** [`src/app/page.tsx`](src/app/page.tsx) mounts sections in order under sticky header + `<main>`.

---

## Section documentation

### 1. Promo banner (`PromoBanner`)

| | |
|--|--|
| **File** | [`src/components/promo-banner.tsx`](src/components/promo-banner.tsx) |
| **Data** | `promo` in [`landing.ts`](src/constants/landing.ts) |
| **Purpose** | Conversion strip: summer coupon + link to pricing |
| **UI** | Purple gradient bar, Lucide `Sparkles`, gold title, muted body, underlined CTA |
| **Motion** | CSS sheen (`transform` only); disabled under `prefers-reduced-motion` |
| **Notes** | Server component; no dismiss control (matches reference strip) |

### 2. Site header / navbar (`SiteHeader`)

| | |
|--|--|
| **File** | [`src/components/site-header.tsx`](src/components/site-header.tsx) |
| **Data** | `navPrimary`, `navSecondary`, `navLogin` |
| **Purpose** | Sticky navigation; student CTAs (Signup / Contact / Login) |
| **Desktop (`lg+`)** | 3-column grid: logo \| Institution–Download centered \| divider + Signup/Contact + Login pill |
| **Mobile (`< lg`)** | Logo + hamburger (`Menu` / `X`); content-height panel (not full viewport); `useState` only — no `window` / `matchMedia` for layout |
| **Logo** | `next/image` → `/assets/images/logo.webp` |
| **Padding** | `px-4 sm:px-6 lg:px-8` so logo / Login sit near the viewport edges like live CTC |
| **Related** | [`login-button.tsx`](src/components/login-button.tsx) — compact vs block Login variants |

### 3. Hero (`HeroSection`)

| | |
|--|--|
| **File** | [`src/components/hero-section.tsx`](src/components/hero-section.tsx) |
| **Data** | `hero` (title, lead with **Corporate Pathways** emphasis, subline, CTAs, image) |
| **Purpose** | Primary student value prop + dual CTAs |
| **Layout** | Full-bleed photo (`images2.webp`, `priority` LCP); left→right dark fade; purple rail on copy stack |
| **CTAs** | Start Upskilling → `#explore`; Get Started → `#signup`; Lucide `ArrowRight` with hover nudge |
| **Height** | Live-like `svh` formulas so the hero fills the first viewport under the header |

### 4. Trust logo marquee (`TrustMarquee`)

| | |
|--|--|
| **File** | [`src/components/trust-marquee.tsx`](src/components/trust-marquee.tsx) |
| **Data** | `marquee` — eyebrow + `rowOne` / `rowTwo` companies |
| **Purpose** | Social proof: “Empowering students to crack recruitment at…” |
| **Motion** | CSS-only; row 1 LTR (`.trust-marquee-track-reverse`, 52s), row 2 RTL (`.trust-marquee-track`, 42s); mobile 40s / 34s |
| **UX** | Hover zone pauses; edge mask fade; tracks repeat logos so the strip stays full-width |
| **a11y** | `prefers-reduced-motion` stops animation, wraps marks, hides duplicate segment; company names `sr-only` |
| **Constraint** | Lucide has no official brand SVGs — monochrome Lucide icons stand in for company marks |

### 5. Dual-Core Structure (`DualCoreSection`)

| | |
|--|--|
| **File** | [`src/components/dual-core-section.tsx`](src/components/dual-core-section.tsx) |
| **Data** | `dualCore` — eyebrow, heading, subcopy, two `pillars` |
| **Purpose** | Explain Web Hub vs Pro-Suite before deeper product sections |
| **Layout** | Centered intro with hairline eyebrow; `lg` two-column grid; Software column `lg:border-l` full height (stacked `border-t` on mobile) |
| **Media** | `image7.png` (Web) / `image8.png` (Software); `next/image` with intrinsic size, no `priority` |
| **Copy stack** | Index → shot → caption → title + muted `(suffix)` → subtitle → blurb → 4 left-rail features → CTA |
| **CTAs** | Explore Courses & Pathways (ghost + `ArrowRight` → `#explore`); Download Software Suite (purple glow, no arrow → `#download`) |
| **Token** | `--dual-muted` for captions, suffixes, blurbs, feature bodies |

### 6. Monthly Performance Series (`MonthlySprintSection` + `MonthlyContestCard`)

| | |
|--|--|
| **Files** | [`monthly-sprint-section.tsx`](src/components/monthly-sprint-section.tsx), [`monthly-contest-card.tsx`](src/components/monthly-contest-card.tsx) |
| **Data** | `monthlySprint` — intro, Career Rewards tiers, nested `contest` |
| **Purpose** | Monthly Corporate Pathway contests + reward tiers + contest preview |
| **Layout** | Soft blue section wash; centered intro with under hairline; `max-w-6xl` / live type scale; rewards list with purple rails |
| **Contest card** | Steel 2px gradient frame; square Completed badge; JetBrains Mono challenge title (3 lines); Lucide `Trophy` bounties; CSS-grid leaderboard |
| **Anchors** | `id="explore"` on section; `id="contest"` on card wrapper |
| **Tokens** | `--contest-accent`, contest panel/frame utilities, sprint zinc scale |

### 7. CTC Score (`CtcScoreSection`)

| | |
|--|--|
| **File** | [`src/components/ctc-score-section.tsx`](src/components/ctc-score-section.tsx) |
| **Data** | `ctcScore` — eyebrow, lead, three input badges, result badge, footer spans |
| **Purpose** | Explain how Skills + Practice + Software performance become the CTC Score |
| **Media** | `images3.webp`–`images5.webp` inputs; `images6.webp` result (framed tiles, no `priority`) |
| **Layout** | Purple section wash; mobile stack with vertical Plus rules; desktop row with hairline+Plus connectors; Equals rail; glowing result tile |
| **Copy** | Mono `0.0 to 10.0`; footer emphasizes **verified credential** |
| **Anchor** | `id="ctc-score"` |

### 8. Enterprise Infrastructure (`InfraStripSection`)

| | |
|--|--|
| **File** | [`src/components/infra-strip-section.tsx`](src/components/infra-strip-section.tsx) |
| **Data** | `infraStrip` — heading, lead, three stats, footnote |
| **Purpose** | Trust / scalability proof: drives, proctoring, uptime |
| **Layout** | `border-y` + vertical gradient band; centered header; 1→3 column mono stats; muted footnote |
| **Type** | Stat values `font-mono`; labels / footnote `text-sprint-zinc-500` |
| **Out of scope** | Icons, images, section hash id (live has none) |

### 9. FAQ (`FaqSection`)

| | |
|--|--|
| **File** | [`src/components/faq-section.tsx`](src/components/faq-section.tsx) |
| **Data** | `faq` — eyebrow, heading, intro, 10 Q&A items |
| **Purpose** | Answer common product questions in a scannable list |
| **Layout** | Centered `max-w-3xl` header; purple `FAQ` eyebrow; always-open rounded cards in a semantic `dl` |
| **Interaction** | None — not an accordion (matches live CTC) |
| **Anchor** | `id="faq"` |
| **Note** | Institution/download URLs left as plain text (matches live FAQ cards) |

### 10. Site Footer (`SiteFooter`)

| | |
|--|--|
| **File** | [`src/components/site-footer.tsx`](src/components/site-footer.tsx) |
| **Data** | `siteFooter` — brand, product links, contact, map embed, social, legal |
| **Purpose** | Close the landing with product nav, office contact, and legal/social links |
| **Layout** | `max-w-7xl` 12-col grid (brand 3 / product 2 / contact+map 7); bottom © + social + Privacy/Terms |
| **Map** | Live Google Maps iframe (`loading="lazy"`); Larger map → external goo.gl |
| **Tokens** | `--footer-email`, `--footer-email-hover`, `--footer-surface`; `.footer-map-panel` |
| **Anchors** | `#contact` in footer; Dual-Core `id="ecosystem"`; hash stubs for download/docs/privacy/terms |
| **Note** | Privacy/Terms are in-page hash stubs (landing clone) |

### 11. Ruby Chatbot (`RubyChatbot`)

| | |
|--|--|
| **File** | [`src/components/ruby-chatbot.tsx`](src/components/ruby-chatbot.tsx) |
| **Data** | `rubyChat` — copy, form placeholders, validation, mock replies |
| **Purpose** | Floating assistant for institution/student lead capture + mock Q&A |
| **Mount** | Direct client import from the server page; `createPortal` to `document.body` after mount |
| **Flow** | Open/close FAB; static welcome + role option UI (no lead submit / mock chat) |
| **Tokens** | `contest-accent` FAB; `--ruby-header-from`, `--ruby-option-hover`, `.ruby-fab-glow`, `.ruby-panel-enter` |
| **Persistence** | None (UI-only) |
| **Note** | Presentation only — option buttons and forms are visual, no business logic |

---

## Dependencies used and why

| Package | Role |
|---------|------|
| `next`, `react`, `react-dom` | App framework |
| `lucide-react` | Icons only (small, tree-shakeable) |
| `tailwindcss`, `@tailwindcss/postcss` | Styling |
| `typescript`, `eslint`, `eslint-config-next` | Typecheck + lint |

**Not used:** animation libraries, UI kits, CMS, analytics SDKs — keep the bundle lean for Lighthouse.

---

## Performance optimizations

- **Server Components** for promo, hero, marquee, Dual-Core, Monthly Sprint, CTC Score, Infra Strip, FAQ, Site Footer → less client JS.
- **Two client islands:** sticky nav menu + dynamically loaded Ruby chatbot (`ssr: false`).
- **`next/image`** for logo, hero (`priority` + `sizes`), Dual-Core shots, and CTC Score badges (`fill` + `sizes`, no priority).
- **Self-hosted woff2** (latin subsets) + Inter preload in root layout.
- **CSS variables / Tailwind** instead of large third-party CSS dumps (e.g. skipped shipping the full 155KB utility dump as runtime CSS).
- **GPU-friendly motion** (`transform` / `opacity`); no layout-thrashing animation libs.
- **Marquee:** pure CSS; pause on hover; full disable when reduced motion is preferred.

**Known weight:** `images2.webp` is ~1.2MB — acceptable for a timed clone; compress further for production Lighthouse.

---

## Animation approach

| Location | Technique |
|----------|-----------|
| Promo sheen | Infinite `transform` translate; `prefers-reduced-motion: none` |
| Hero CTA arrow | Group hover `translateX`; reduced-motion disables |
| Trust marquee | Opposing `translate(-50%)` loops; zone hover `animation-play-state: paused` |
| Header | Sticky blur; no heavy scroll libraries |

Principle: meaningful motion that supports hierarchy, never animation-for-its-own-sake.

---

## Assumptions and design decisions

1. **Landing only** — nav links are in-page hashes (`#explore`, `#pricing`, …); no real Institution/Signup routes.
2. **Visual parity over pixel theft** — layout/copy/motion match CTC; Lucide substitutes brand logos; no hotlinking their CDN.
3. **Tokens in CSS** — changing brand purple means editing `globals.css`, not hunting hex in components.
4. **Content in constants** — scalable if courses/companies/CTAs grow.
5. **Mobile menu height** — content-sized (not `100dvh`) after UX feedback; still covers promo + links + Login.

---

## Known limitations

- Company marquee uses Lucide stand-ins, not official wordmarks.
- Hero asset not heavily compressed.
- No Lighthouse report checked in until a production deploy exists.
- Hash CTAs do not open real product flows (Privacy/Terms are stubs).
- Ruby chatbot is UI-only (open/close + static welcome/options; no lead/chat logic).

---

## What I would improve with more time

1. Compress / serve AVIF+WebP variants of the hero; measure LCP on mobile.
2. Optional official SVG brand set (or Simple Icons) behind the same `marquee` data shape.
3. Deploy to Vercel and attach Desktop + Mobile Lighthouse scores (assessment deliverable #4).
4. Wire Ruby leads to a real API and richer retrieval for chat answers.
5. Light scroll-reveal on below-fold sections with Intersection Observer + CSS only.
6. Add Playwright smoke tests for nav open/close and reduced-motion marquee.

---

## Deploy

```bash
npm run build
```

Deploy the `.next` output with [Vercel](https://vercel.com) (or Netlify / Cloudflare Pages). After deploy, run Lighthouse (Desktop + Mobile) on the live URL and attach results for the assessment performance report.
