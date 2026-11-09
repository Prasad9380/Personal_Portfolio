# Prasad Manjunath Kandagal — Portfolio

A premium, animated developer portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to double-check it
```

The build output goes to `dist/` — this is what you deploy.

## Deploying

This is a static site, so it works on any static host:

- **Vercel** — import the repo, framework preset "Vite", no config needed.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — build with `npm run build`, then publish the `dist/` folder (e.g. via the `gh-pages` package or a GitHub Action).

## Project structure

```
src/
  components/
    sections/     one file per page section (Hero, About, Skills, ...)
    ui/            reusable pieces (cards, graph, cursor, icons)
  data/
    resume.ts      all real content — edit this file to update the site
  hooks/            small reusable React hooks
public/
  resume/           the downloadable resume PDF
```

## Editing content

All resume-derived content (name, experience, projects, skills, education,
certifications) lives in `src/data/resume.ts`. Update that file and the whole
site updates — no need to touch individual components.

To swap the downloadable resume, replace the PDF in `public/resume/` and
update `resumeFile` in `src/data/resume.ts` if you rename it.

## Notes

- Dark theme only, by design (matches the "developer" brief).
- Custom cursor, particle-heavy effects, and heavy 3D tilt are automatically
  disabled on touch/mobile devices for performance.
- Respects `prefers-reduced-motion`.
- The contact form has no backend — submitting it opens the visitor's email
  client with the message prefilled (`mailto:`). Wire it to a real form
  service (Formspree, Resend, etc.) if you want submissions collected
  without opening an email client.
