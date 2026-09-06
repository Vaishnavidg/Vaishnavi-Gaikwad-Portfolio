# Vaishnavi Gaikwad — Portfolio

A single-page personal portfolio built as a standalone Vite + React + TypeScript app.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000  (override with PORT=xxxx pnpm dev)
```

## Other commands

```bash
pnpm build      # production build to dist/
pnpm preview    # serve the production build
pnpm typecheck  # tsc --noEmit
```

Requires Node.js 22+.

## Layout

| Path | What |
|---|---|
| `src/App.tsx` | Composition only — stitches the sections together |
| `src/sections/*.tsx` | One file per page section: `Navbar`, `Hero`, `ProofStrip`, `About`, `Experience`, `Work`, `Toolkit`, `Fundamentals`, `Signals`, `Contact`, `Footer` |
| `src/components/*.tsx` | Shared pieces reused across sections: `SectionHeading`, `TerminalVisual`, `HeroPortrait`, `CaseStudyModal`, `ContactForm`, `error-boundary` |
| `src/data/*.ts` | Editable content: navigation, projects, experience, skills, achievements. **Edit these, not the JSX.** |
| `src/hooks/*.ts` | `useTheme` (light/dark), `useScrollReveal` (fade-in on scroll) |
| `src/lib/*.ts` | `scroll` (anchor scrolling), `resume` (open the PDF) |
| `src/index.css` | Design tokens + every style rule (hand-written CSS, no Tailwind). Dark by default; `.light` class toggles light mode. |
| `src/assets/` | Bundled images (hero portrait) |
| `index.html` | Static `<title>` and social meta tags |
| `public/` | `favicon.svg`, `robots.txt` |

Nav is anchor-based scrolling on one page (not a router), so "sections" are components, not routes.

## Before publishing

- Add `public/resume.pdf` (referenced by the Resume buttons).
- Fill in the real LinkedIn / email / LeetCode URLs in `src/data/projects.ts` (`projectLinks`).
