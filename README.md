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
| `src/App.tsx` | The entire page — each section is a local component |
| `src/data/*.ts` | Editable content: projects, experience, skills, achievements. **Edit these, not the JSX.** |
| `src/index.css` | Design tokens + every style rule (hand-written CSS, no Tailwind). Dark by default; `.light` class toggles light mode. |
| `src/components/error-boundary.tsx` | Top-level React error boundary |
| `index.html` | Static `<title>` and social meta tags |
| `public/` | `favicon.svg`, `robots.txt` |

## Before publishing

- Add `public/resume.pdf` and `public/profile.jpg` (referenced by the resume button and About section).
- Fill in the real LinkedIn / email / LeetCode URLs in `src/data/projects.ts` (`projectLinks`).
