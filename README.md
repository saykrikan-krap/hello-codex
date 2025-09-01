## hello-codex

Next.js app using the App Router, TypeScript, and ESLint.

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Develop
```bash
npm run dev
# open http://localhost:3000
```

### Build
```bash
npm run build
npm start # serve production build
```

### Project Layout
- `src/app/` – App Router entrypoints (`layout.tsx`, `page.tsx`).
- `public/` – Static assets served from `/`.
- `eslint.config.mjs` – ESLint config; run `npm run lint`.
- `tsconfig.json` – TypeScript settings; run `npm run typecheck`.

The landing page content lives at `src/app/page.tsx`.
