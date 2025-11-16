# GUPTHA TRAVELS

A full-stack Vite + React + Express project for GUPTHA TRAVELS - a premium travel and transportation website. This project contains a client (React + TypeScript + Tailwind) and server/API code intended to be built and deployed as a server-rendered or static site.

## Overview

- Client: `client/` — React + TypeScript frontend using Vite, TailwindCSS, and Radix UI components.
- Server: `server/` and `api/` — Express or serverless handler for API routes and server-side build output.
- Netlify / Vercel support via config files (`netlify/`, `vercel.json`, `netlify.toml`).
- Shared types and API helpers in `shared/`.

## Requirements

- Node.js (recommended 18+)
- pnpm (recommended version pinned: see `package.json`)

## Install

Install dependencies using pnpm:

```bash
pnpm install
```

If you prefer npm or yarn, you can use them, but pnpm is recommended because it's the package manager recorded in this repo.

## Scripts (from package.json)

- pnpm dev — run the Vite dev server for the client
- pnpm build — build both client and server
- pnpm build:client — build the client (Vite)
- pnpm build:server — build the server (Vite using `vite.config.server.ts`)
- pnpm start — start the built server (runs `node dist/server/node-build.mjs`)
- pnpm test — run unit tests with Vitest
- pnpm format.fix — run Prettier to format files
- pnpm typecheck — run TypeScript type checking

## Development

Start the dev server (client):

```bash
pnpm dev
```

Open http://localhost:5173 (or the address Vite prints) to view the site.

To build for production (both client and server):

```bash
pnpm build
```

To run the built server:

```bash
pnpm start
```

## Project structure (high level)

- `client/` — React app (components, hooks, pages)
- `server/` — server entry and build helpers
- `api/` — serverless functions or API handlers
- `public/` — static assets
- `netlify/`, `vercel.json` — deployment configs for serverless platforms

## Notes

- TypeScript is used across the project. Run `pnpm typecheck` before large changes.
- Tests are configured with Vitest. Add unit tests under `client/lib` or new `__tests__` folders.
- The repo uses TailwindCSS and several Radix UI components for UI primitives.

## Contributing

For development and improvements, keep changes well-organized and include tests for new logic.

---

For additional documentation, screenshots, or environment setup details, please refer to the project maintainers.