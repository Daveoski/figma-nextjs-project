# TOTC – Online Learning Platform (Figma to Next.js)

A multi-page e-learning website built from a Figma design with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

**Live demo:** https://figma-nextjs-project.vercel.app

## Pages

- Marketing: home, about, careers, pricing
- Courses: catalogue and course detail (`/courses/[slug]`)
- Blog: list and post detail (`/blog/[slug]`), plus instructor profiles (`/instructors/[slug]`)
- Learning: student dashboard, virtual classroom, lessons, calendar and events
- Account: login, register, checkout
- Legal: privacy policy, terms and conditions

## Highlights

- Reusable UI kit in `src/components/ui`: buttons, accordion, carousel, pagination, form fields, star ratings
- Content kept in typed data modules (`src/data/*.ts`) and kept out of the components
- Dynamic routes rendered from that data
- Shared layout with navbar and footer

## Getting started

```bash
bun install        # or: npm install
bun dev            # or: npm run dev
```

Open http://localhost:3000.

## Project structure

```text
src/
├── components/   # auth, cards, classroom, home, legal, ui
├── data/         # blog, classroom, courses, marketing, site content
├── layout/       # layout, navbar, footer
├── pages/        # Next.js Pages Router routes
└── styles/       # Tailwind global styles
```

## Tech stack

Next.js 16 (Pages Router) · React 19 · TypeScript · Tailwind CSS v4 · Vercel

## License

[MIT](LICENSE)
