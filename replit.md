# Vaishnavi Gaikwad — Portfolio

A single-page personal portfolio for Vaishnavi Gaikwad (Full Stack Developer), showcasing
selected work, experience, skills, and editable case studies.

## Run & Operate

- `pnpm --filter @workspace/vaishnavi-portfolio run dev` — dev server (port 3000, or `$PORT`)
- `pnpm --filter @workspace/vaishnavi-portfolio run build` — production build to `dist/public`
- `pnpm --filter @workspace/vaishnavi-portfolio run serve` — preview the production build
- `pnpm run typecheck` — typecheck all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspace (single package: `artifacts/vaishnavi-portfolio`)
- React 19 + TypeScript, built with Vite 7
- Icons: `lucide-react`
- Styling: hand-written CSS in `src/index.css` with a CSS custom-property theme
  (dark by default, `.light` class for light mode). No Tailwind, no UI framework.

## Where things live

- `src/App.tsx` — the entire page; each section is a local component
- `src/data/*.ts` — all editable content (projects, experience, skills, achievements).
  Edit these, not the JSX.
- `src/index.css` — design tokens + every style rule
- `src/components/error-boundary.tsx` — top-level error boundary
- `index.html` — static `<title>` and social meta
- `public/` — `favicon.svg`, `robots.txt`. Add `resume.pdf` and `profile.jpg` here
  (referenced by the resume button and About section).

## Gotchas

- `projectLinks` in `src/data/projects.ts` still has placeholder LinkedIn / email /
  LeetCode URLs — update before publishing.
- `public/resume.pdf` and `public/profile.jpg` are referenced but not yet added.
