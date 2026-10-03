# TEMAHUX

The repository contains three independent Next.js applications:

| Application | Directory | Production domain |
| --- | --- | --- |
| Main | `apps/main` | `www.temahux.com` and `temahux.com` |
| Services | `apps/services` | `services.temahux.com` |
| Academy | `apps/academy` | `academy.temahux.com` |

Each application retains its own `package.json`, lockfile, Next.js configuration,
routes, components, assets, and environment configuration. Install and run an
application independently from the repository root:

```sh
npm ci --prefix apps/main
npm run dev:main

npm ci --prefix apps/services
npm run dev:services

npm ci --prefix apps/academy
npm run dev:academy
```

Development servers use ports 3000, 3001, and 3002, respectively. To create
production builds, run `npm run build:main`, `npm run build:services`, or
`npm run build:academy`. `npm run build:all` runs all three sequentially.

## Vercel

Create a separate Vercel project for each application, connected to
`Kunj2411/temahux`. Set each project's Root Directory to its application
directory (`apps/main`, `apps/services`, or `apps/academy`) so its build is
independent. Assign only the corresponding production domains listed above.

Services and Academy environment-variable names and setup instructions are
documented in their `.env.example` files and READMEs. Main currently requires
no environment variables. Secret environment files are not part of this
repository.
