# Alex Kapanadze – Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://www.alexkapanadze.space)

Portfolio site built with React, TypeScript, Vite and Tailwind CSS.

## Development

```bash
npm install
npm run dev     # local dev server
npm run build   # type-check and build
npm run lint
```

## Structure

- `src/data/projects.ts` – the project catalogue. Cards, filters and detail pages all read from it.
- `src/data/socialLinks.ts` – contact links.
- `src/pages` – Home, Projects, project detail, Contact and the not-found page.
- `tailwind.config.js` – colours and fonts.

## Adding a project

Add one entry to the `projects` array in `src/data/projects.ts`. Array order is display order.

- `slug` is the URL (`/projects/<slug>`). Do not change it after publishing.
- `images`, `links`, `decisions` and `ai` are optional. A project without images gets a typographic cover, and only the links you list are shown.
- To add screenshots, put the files in `src/assets/<project>/`, import them at the top of the file and list them in `images`. The first image is the card cover.

Old numeric URLs such as `/projects/3` are redirected through the fixed `legacyIds` map in the same file. Leave that map as it is.
