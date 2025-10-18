# My Portfolio (SvelteKit + Tailwind)

A modern, responsive developer portfolio built with SvelteKit, TypeScript and Tailwind CSS. This repo is a revamp of an earlier static site and includes a responsive navbar, dark mode, and interactive UI components.

## Quick summary

- Framework: SvelteKit + TypeScript
- Styling: Tailwind CSS (custom color scales)
- Key components: `Navbar` (with dark mode), `ScrollToTop` (floating action)
- Pages: Home, About, Projects, Services, Contact

## What I changed / added

- Responsive navbar with dark mode toggle — `src/lib/components/ui/navbar.svelte`
- Floating scroll-to-top button — `src/lib/components/ui/scroll-to-top.svelte`
- Global layout wiring (navbar + scroll-to-top) — `src/routes/+layout.svelte`
- Placeholder pages and sections for Home, About, Projects, Services, Contact — `src/routes/*`
- Tailwind config with custom primary (`#10b981`) and secondary color scales — `tailwind.config.js`

## Directory structure

(only the most relevant files/folders shown)

```
my-portfolio-v2/
├─ tailwind.config.js            # Tailwind custom color config (primary: #10b981)
├─ package.json
├─ tsconfig.json
├─ svelte.config.js
├─ vite.config.ts
├─ src/
│  ├─ app.css
│  ├─ app.d.ts
│  ├─ lib/
│  │  ├─ index.ts
│  │  ├─ assets/
│  │  │  └─ favicon.svg
│  │  └─ components/
│  │     ├─ sections/
│  │     │  ├─ hero.svelte
│  │     │  ├─ faqs.svelte
│  │     │  └─ cta.svelte
│  │     └─ ui/
│  │        ├─ navbar.svelte
│  │        └─ scroll-to-top.svelte
│  └─ routes/
│     ├─ +layout.svelte
│     ├─ +page.svelte             # Home
│     ├─ about/+page.svelte
│     ├─ projects/+page.svelte
│     ├─ services/+page.svelte
│     └─ contact/+page.svelte
└─ static/
   ├─ images/
   │  └─ me.webp
   └─ robots.txt
```

## Local development

Requirements
- Node.js 18+ (or the runtime you prefer)
- npm / pnpm / yarn

Install dependencies and run dev server:

```bash
npm install
npm run dev -- --open
```

Build & preview production:

```bash
npm run build
npm run preview
```

## Tailwind color notes

Primary color: `#10b981` (teal/green)
- Custom shades exposed as `primary-50` … `primary-900` in `tailwind.config.js`.

Secondary color: a neutral/blue-gray scale (`secondary-50` … `secondary-900`) to balance the palette.

If you want different shades, I can generate alternatives or switch to a different hue.

## Component mapping

- `Navbar` — global navigation + dark mode toggle
- `ScrollToTop` — floating quick-nav action
- `hero`, `cta`, `faqs` — reusable page sections

## Next steps (recommended)

- Replace placeholder content with real projects, images and copy
- Create a `ProjectCard` component and load project data from a JSON/YAML file
- Add entrance animations (hero, project cards) and small micro-interactions
- Implement contact form submission (server endpoint or third-party service)
- Add tests and CI (linting, typecheck, build)

---

If you'd like, I can now:
- Implement a polished hero section inspired by the Dribbble design
- Create animated project cards and wire them to real project data
- Improve accessibility and run a11y checks

Tell me which task to do next and I’ll start it.
