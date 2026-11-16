# Samuel Uzoma — Portfolio

Personal portfolio site for Samuel Chigemezu Uzoma, mobile & full-stack engineer (Flutter, Next.js, NestJS). Built with Next.js (App Router), TypeScript and Motion for animations.

## Editing content

All text, projects, stats and links live in [`src/data/profile.ts`](src/data/profile.ts). The photo and CV are in `public/`:

- `public/samuel-uzoma.jpg` — profile photo
- `public/Samuel_Uzoma_CV.pdf` — the CV behind every "Download CV" button

Replace those files with the same names to update them.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to the final address (for example `https://samueluzoma.dev`) so link previews, the sitemap and search metadata use the right domain.

- **Vercel (simplest):** import the GitHub repo at vercel.com/new, add the `NEXT_PUBLIC_SITE_URL` environment variable, deploy, then attach a custom domain in Project → Domains.
- **Google Cloud Run:** the site is fully static-friendly and also runs with `npm run build && npm start` in a Node 20+ container.
