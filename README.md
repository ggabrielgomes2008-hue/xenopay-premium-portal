# Xenopay Portal

[cloudflarebutton]

A production-ready full-stack application built with Cloudflare Workers, React, and Convex. Features secure user authentication, file upload/storage, and a modern responsive UI. Deploy instantly to Cloudflare's global edge network.

## Features

- **Secure Authentication**: Email/password with OTP verification, password reset, and anonymous sign-in using Convex Auth.
- **File Management**: Upload, list, download, and delete user files with Convex Storage and Database.
- **Modern UI**: Built with Tailwind CSS, shadcn/ui components, dark mode support, and responsive design.
- **Real-time Sync**: Convex backend for instant data synchronization across devices.
- **Edge Deployment**: Lightning-fast global performance via Cloudflare Workers and Pages.
- **Type-Safe**: Full TypeScript support with generated types from Convex and Workers.
- **Developer Experience**: Hot reload, error reporting, and easy deployment workflows.

## Tech Stack

- **Frontend**: React 18, Vite, React Router, TanStack Query, shadcn/ui, Tailwind CSS, Lucide Icons
- **Backend**: Convex (queries, mutations, auth, storage), Hono (API routing)
- **Deployment**: Cloudflare Workers, Wrangler
- **Tools**: Bun (package manager), TypeScript, ESLint, Convex CLI

## Prerequisites

- [Bun](https://bun.sh) (recommended package manager)
- [Cloudflare Account](https://dash.cloudflare.com) with Workers enabled
- [Convex Account](https://dashboard.convex.dev) (free tier available)
- Cloudflare API Token with Workers/Pages edit permissions

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd xenopay-portal-0g8qcu6oe6srhscekr8j5
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Set environment variables**:
   Create `.env` or set via Cloudflare dashboard:
   ```
   VITE_CONVEX_URL=https://your-project.convex.site
   ANDROMO_SMTP_URL=https://your-smtp-service.com
   ANDROMO_SMTP_API_KEY=your-smtp-api-key
   ```

4. **Deploy backend** (Convex):
   ```bash
   bun run backend:deploy
   ```
   Note the generated `VITE_CONVEX_URL` and update your env.

5. **Run locally**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

## Development

- **Start dev server**: `bun dev` (auto-deploys Convex on change)
- **Type generation**: `bun run cf-typegen` (Cloudflare bindings)
- **Lint**: `bun lint`
- **Build**: `bun build`
- **Preview**: `bun preview`

**Hot Reload**: Frontend auto-reloads. Backend syncs via `npx convex dev --once` in scripts.

**Custom Routes**: Add to `worker/userRoutes.ts` (Hono app). Core logic protected.

**UI Customization**: Edit Shadcn components in `src/components/ui`. Tailwind config in `tailwind.config.js`.

**Convex Functions**: Extend in `convex/` (auth.ts, files.ts). Schema in `convex/schema.ts`.

## Deployment

Deploy to Cloudflare in one command:

```bash
bun deploy
```

Or manually:

1. **Backend** (Convex): `bun run backend:deploy`
2. **Frontend** (Workers/Pages):
   ```bash
   bun run build
   wrangler deploy
   ```

**Custom Domain**: Update `wrangler.jsonc` and run `wrangler deploy`.

[cloudflarebutton]

**Production Config**:
- Set secrets: `wrangler secret put ANDROMO_SMTP_URL`
- Assets served via Cloudflare ASSETS binding (SPA mode).

## Environment Variables

| Variable              | Description                          | Required |
|-----------------------|--------------------------------------|----------|
| `VITE_CONVEX_URL`     | Convex deployment URL                | Yes     |
| `ANDROMO_SMTP_URL`    | SMTP service base URL                | Prod    |
| `ANDROMO_SMTP_API_KEY`| SMTP API authentication key          | Prod    |

## Troubleshooting

- **Auth Issues**: Verify Convex deploy and SMTP env vars.
- **CORS/Worker Errors**: Check `wrangler tail` for logs.
- **Types Missing**: Run `bun run cf-typegen && npx convex dev --once`.
- **Bun Issues**: Ensure Bun >=1.0 (`bun --version`).

## Contributing

1. Fork & clone
2. `bun install`
3. Create feature branch
4. `bun dev` & test
5. PR with clear description

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Built with ❤️ by Andromo. Questions? [Contact us](mailto:support@andromo.com).