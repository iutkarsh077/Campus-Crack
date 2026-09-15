# Getting started

Start here if you are new to this CodeCampus / Crack The Campus landing clone.

## What this project is

A **Next.js 16** recreation of the [crackthecampus.com](https://crackthecampus.com/) landing page for a frontend assessment. Focus areas: student-facing UI, performance, CSS motion, and maintainable structure.

More context: root [`README.md`](../README.md) and [`spec.md`](../spec.md).

## Prerequisites

- **Node.js 20+** recommended
- npm (comes with Node)

## Run locally

```bash
cd codecampus
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
|--------|----------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Where to look first (recommended order)

1. **[`src/app/page.tsx`](../src/app/page.tsx)** — how the landing is composed (section order).
2. **[`src/app/layout.tsx`](../src/app/layout.tsx)** — HTML shell, fonts, metadata, theme.
3. **[`src/constants/landing.ts`](../src/constants/landing.ts)** — all copy and structured content.
4. **[`src/interfaces/landingpageinterface.ts`](../src/interfaces/landingpageinterface.ts)** — TypeScript shapes for that content.
5. **[`src/app/globals.css`](../src/app/globals.css)** — design tokens and CSS animations.
6. **[`src/components/`](../src/components/)** — UI pieces (see [components.md](./components.md)).

Then read **[data-flow.md](./data-flow.md)** to see how content moves from constants → components → page.

## Project map (high level)

```
codecampus/
  docs/                 ← you are here
  src/
    app/                # App Router: layout, page, globals
    components/         # Landing UI
    constants/          # landing.ts content
    interfaces/         # shared types
  public/               # images, fonts, favicon, OG assets
  README.md             # assessment write-up
  spec.md               # living implementation notes
```

## Common tasks

| Goal | Start with |
|------|------------|
| Change headline / FAQ / footer copy | `src/constants/landing.ts` |
| Change colors / motion | `src/app/globals.css` |
| Add or reorder a section | `src/app/page.tsx` + new component under `src/components/` |
| Change pill button look | `src/components/site-button.tsx` |
| Change nav links | `navPrimary` / `navSecondary` / `navLogin` in `landing.ts` |
| Change tab title / SEO | `metadata` in `src/app/layout.tsx` |

## Conventions to follow

- Prefer **Server Components**; only `SiteHeader` and `RubyChatbot` are client islands.
- Put **copy in constants**, not hard-coded strings scattered in JSX (except tiny UI chrome).
- Use **token classes** (`bg-nav-login`, `text-sprint-zinc-400`) — avoid raw hex in components.
- Reuse **`SiteButton`** for primary/ghost pill CTAs.

## Next docs

- [Components](./components.md) — what each component does
- [Data flow](./data-flow.md) — how data moves through the app
