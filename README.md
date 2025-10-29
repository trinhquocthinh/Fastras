## fastras Fitness Website

fastras is now a fully server-rendered Next.js 14 application built with TypeScript and Sass. The site keeps the original fitness and nutrition content while benefiting from improved SEO, modular React components, and reusable data definitions.

![fastras Desktop Demo](./readme-images/desktop.png "Desktop Demo")

### Tech Stack

- Next.js 14 (App Router)
- React 18 with TypeScript
- Sass/SCSS for styling
- React Icons

### Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

### Available Scripts

- `npm run dev` – start the development server
- `npm run build` – create a production build
- `npm run start` – run the production server locally
- `npm run lint` – run Next.js linting
- `npm run type-check` – run TypeScript in no-emit mode
- `npm run format` / `npm run format:check` – apply or verify Prettier formatting

### Deployment

The project ships with `next.config.mjs`, `next-sitemap.config.cjs`, and `netlify.toml` to support GitHub Pages, Netlify, or any platform that can host a Next.js build. Remember to set `NEXT_PUBLIC_SITE_URL` (and optionally `NEXT_PUBLIC_BASE_PATH`) in your environment before deploying.
