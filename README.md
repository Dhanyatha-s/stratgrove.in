# StratGrove

A marketing agency site built with **Next.js 14** (App Router), **React 18**, **TypeScript**, and **Tailwind CSS**.

This project was regenerated from a TanStack Start project to use a standard, deployment-friendly stack. All page content, components, copy, styling, and animations are unchanged — only the framework plumbing was swapped.

## Stack

- **Next.js 14** (App Router) — file-based routing, SSR/SSG
- **React 18** + **TypeScript**
- **Tailwind CSS 3** with the original StratGrove design tokens (oklch colors, custom radius, fonts)
- **Radix UI** primitives + shadcn/ui-style components (unchanged)
- **TanStack Query** (kept, still used)
- **Lucide** icons

## What changed from the original

- TanStack Start → **Next.js App Router** (`src/app/*/page.tsx`)
- TanStack Router file routes → **Next.js file-based routes**
- Removed `@vercel/node`, `nitro`, `@lovable.dev/vite-tanstack-config`, `srvx`, `vite-tsconfig-paths`, `vite`, `@tanstack/react-start`, `@tanstack/router-plugin` — none of these are needed outside the TanStack Start + Vite + Nitro stack
- Tailwind v4 (`@tailwindcss/vite`) → Tailwind v3 with a standard `tailwind.config.ts` + `postcss.config.js` (more universally supported across hosts)
- Images moved from `src/assets` (imported via Vite) to `public/works/` (served statically by Next.js)
- Added `"use client"` directives to interactive components, since Next.js App Router defaults to Server Components
- No design, copy, or animation logic was changed — same pages: Home, About, Services, Portfolio, Contact

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploying

This is now a standard Next.js app, so it deploys cleanly to:

- **Vercel** — zero config, just import the repo
- **Render** — use the "Node" environment, build command `npm run build`, start command `npm start`
- **Cloudflare Pages** — use `@cloudflare/next-on-pages` or deploy via the Next.js framework preset (no `@vercel/node` dependency conflicts anymore)
- Any Node.js host (Railway, Fly.io, a VPS, etc.)

No special adapters, beta packages, or platform-specific plugins are required.
