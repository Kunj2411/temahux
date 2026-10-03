# TEMAHUX Platform

Next.js App Router site for TEMAHUX digital services, products and Academy. The downloaded Veltro website is a static HTML reference, so the site keeps its editorial hierarchy and interaction quality while using TEMAHUX content, visual assets and a blue/navy design system.

## Run locally

```bash
npm install
npm run dev
```

The development script uses Next.js Webpack in this nested workspace so Tailwind resolves from this app. For a production build and lint pass:

```bash
npm run lint
npm run build
npm start
```

## Contact forms

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` and in the Vercel project environment before building for production. The key is intended for client-side use by Web3Forms. `.env.example` documents the variable. Contact, project consultation, and the Services page consultation forms report when delivery is not configured and never claim an unsent enquiry succeeded.

## Structure

- `src/app/` — route pages, metadata, sitemap and robots rules
- `src/components/` — shared navigation, footer, product and service components
- `src/lib/` — centralized site, service, product, industry and insight content
- `public/temahux-wordmark.png` — supplied TEMAHUX wordmark used in the light navigation

Product exploration pages describe direction rather than availability. The portfolio links to TEMAHUX product pages while there are no verified client case studies cleared for publication. Add project screenshots and evidence through the centralized portfolio content when they are available.

The privacy and terms pages contain general site information. Before launch, confirm them against the actual contact-form provider, retention practices, analytics configuration and applicable legal requirements.
