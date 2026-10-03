This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## TEMAHUX Academy

TEMAHUX Academy is a Next.js App Router application for technology programs, classes, projects, and learning roadmaps. Existing local catalog content remains available without a backend; when configured, Programs and Roadmaps use the same Supabase integration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3002`. Validate the production app with `npm run build` and code quality with `npm run lint`.

## Supabase catalog

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local` and provide `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `ADMIN_EMAILS`.
3. To enable admin CRUD, add `SUPABASE_SERVICE_ROLE_KEY` from Supabase project API settings to `.env.local`. This key is server-only and must never use a `NEXT_PUBLIC_` prefix.
4. Run `supabase/schema.sql` in the Supabase SQL editor to apply tables, public-read policies, and service-role write grants, followed by `supabase/seed.sql` to migrate the current program, roadmap, class, and project catalog. Re-run the schema after updating an existing Supabase project.
5. Restart the Next.js server.

The public client uses only the Supabase anon key. Row-level security restricts public reads to published catalog records. Keep service-role keys out of browser and server environment variables used by this app. Without both environment values, the application uses its local catalog in `data/site-data.ts`.

## Public forms

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` for local form submissions and in the Vercel project environment before building for production. This Web3Forms key is intended for client-side use. Academy signup and contact forms report configuration or delivery errors instead of claiming an unsent submission succeeded.

## Admin access

1. Add the administrator email to the server-only `ADMIN_EMAILS` value in `.env.local` (comma-separated if there is more than one).
2. Create that same email as a user in Supabase Authentication and set its password.
3. Open `/admin/login`. The former `/login` route redirects there; it is not a learner login.

Admin authorization is checked on the server against the authenticated Supabase user's email. The `ADMIN_EMAILS` list and service-role key are not exposed to the browser. The admin console can create, edit, publish, unpublish, and delete programs and roadmaps, including roadmap stages. The learner signup form is still a non-authenticated inquiry form, and enrollment checkout is not implemented.
