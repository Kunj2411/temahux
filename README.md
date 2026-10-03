# TEMAHUX

One Next.js application serves the three parts of the Temahux website:

| Route | Site |
| --- | --- |
| `/` | Main Temahux experience |
| `/services` | Temahux Services |
| `/academy` | TEMAHUX Academy |

All routes are served from `https://www.temahux.com`. The Services and Academy
sites retain their own nested routes, components, styles, assets, and content.

## Run locally

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. To create a production build and run it locally:

```sh
npm run build
npm start
```

## Vercel

Connect the `Kunj2411/temahux` repository to one Vercel project and use `.`
as the Root Directory. Assign `www.temahux.com` to that project.

## Environment

See `.env.example` for the environment variables used by the Services enquiry
forms and Academy administration/catalogue. Keep the Supabase service-role key
server-only.
