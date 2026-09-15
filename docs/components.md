# Components

Every React component under [`src/components/`](../src/components/). Most are **Server Components**. Client islands are marked below.

Composition order is defined in [`src/app/page.tsx`](../src/app/page.tsx).

---

## Shared / chrome

### `site-button.tsx` — `SiteButton`

Reusable pill CTA used across the landing.

| Prop | Role |
|------|------|
| `variant` | `primary` (filled purple) or `ghost` (outline) |
| `size` | `compact` \| `md` \| `lg` \| `block` |
| `showArrow` | Optional Lucide `ArrowRight` with hover nudge |
| `href` | If set, renders `next/link`; otherwise a `<button>` |

**Used by:** hero, Dual-Core, `LoginButton`.

---

### `login-button.tsx` — `LoginButton`

Thin wrapper around `SiteButton` for the nav Login CTA.

- Reads label/href from `navLogin` in `landing.ts`
- `variant="compact"` (desktop) or `"block"` (mobile menu full width)
- Optional `onNavigate` to close the mobile menu after click

---

### `promo-banner.tsx` — `PromoBanner`

Top coupon strip above the navbar.

- Server component; data from `promo`
- Lucide `Sparkles` + gold “Summer coupon” styling
- CTA links to `#pricing`
- CSS sheen animation (respects `prefers-reduced-motion`)
- Rendered as a **child of** `SiteHeader`

---

### `site-header.tsx` — `SiteHeader`

Sticky header + responsive navigation (**client** — `useState` for mobile menu).

- Accepts `children` (the promo banner)
- Desktop (`lg+`): logo \| primary links centered \| Signup / Contact / Login
- Mobile: hamburger (`Menu` / `X`), content-height panel
- Links from `navPrimary`, `navSecondary`, `navLogin`
- Logo via `next/image` → `/assets/images/logo.webp`

---

### `site-footer.tsx` — `SiteFooter`

Site footer after `</main>`.

- Data from `siteFooter`
- Columns: brand + tagline, Product links, Contact (mailto, address, map link), Google Maps iframe
- Bottom bar: copyright, Instagram/LinkedIn SVGs, Privacy / Terms
- Contact block uses `id="contact"` for nav deep-links

---

### `ruby-chatbot.tsx` — `RubyChatbot`

Floating Ruby assistant (**client** — portal + open/close state).

- FAB bottom-right; panel with welcome message + institution/student option buttons
- **UI-only** (no lead submit / mock chat backend)
- Portals to `document.body` after mount
- Copy from `rubyChat`

---

## Landing sections (top → bottom)

### `hero-section.tsx` — `HeroSection`

Full-bleed hero under the header.

- Data: `hero` (title, lead, CTAs, image)
- Background: `images2.webp` with fade overlays
- Dual CTAs via `SiteButton` (`primary` / `ghost`, large, with arrows)

---

### `trust-marquee.tsx` — `TrustMarquee`

Company trust marquee (“Empowering students to crack recruitment at…”).

- Data: `marquee` (`rowOne` / `rowTwo`)
- Two opposing CSS tracks; Lucide icons as monochrome marks
- Hover pauses; reduced-motion wraps and stops loops

---

### `dual-core-section.tsx` — `DualCoreSection`

“One Ecosystem. Two Ways to Win.” (Web Hub + Pro-Suite).

- Data: `dualCore`
- Root `id="ecosystem"` for footer Product → Ecosystem
- Two pillars with product shots (`image7` / `image8`), feature rails, CTAs via `SiteButton`

---

### `monthly-sprint-section.tsx` — `MonthlySprintSection`

Monthly Performance Series intro + Career Rewards.

- Data: `monthlySprint`
- Section `id="explore"`
- Embeds `MonthlyContestCard`

---

### `monthly-contest-card.tsx` — `MonthlyContestCard`

Contest preview card (steel frame, mono challenge title, bounties, leaderboard).

- Nested data: `monthlySprint.contest`
- Wrapper `id="contest"`
- Lucide `Trophy` for bounty list

---

### `ctc-score-section.tsx` — `CtcScoreSection`

“Beyond the Resume: The CTC Score.”

- Data: `ctcScore`
- Section `id="ctc-score"`
- Badge tiles (`images3`–`images6`) with Plus / Equal connectors
- Explains Skills + Practice + Software → verified score

---

### `infra-strip-section.tsx` — `InfraStripSection`

Enterprise infrastructure stats strip.

- Data: `infraStrip`
- Gradient band + three mono stats + footnote
- No images / section id (matches live)

---

### `faq-section.tsx` — `FaqSection`

FAQ list.

- Data: `faq`
- Section `id="faq"`
- Ten static Q&A cards (`dl` / `dt` / `dd`) — not an accordion

---

## App Router files (not under `components/`)

| File | Role |
|------|------|
| [`src/app/layout.tsx`](../src/app/layout.tsx) | Root layout, fonts, SEO metadata, theme color |
| [`src/app/page.tsx`](../src/app/page.tsx) | Composes header → sections → footer → chatbot |
| [`src/app/globals.css`](../src/app/globals.css) | Tokens, marquee/hero/contest/footer/ruby utilities |

## Hash stubs on the home page

`page.tsx` also mounts `sr-only` sections for `#pricing`, `#download`, `#documentation`, `#privacy`, `#terms` so footer/nav hashes resolve on this single-page clone.

---

See also: [Getting started](./getting-started.md) · [Data flow](./data-flow.md)
