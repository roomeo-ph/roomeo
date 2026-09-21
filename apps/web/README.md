# Roomeo web

Run commands from the repository root after `bun install`:

| Command | Purpose |
| --- | --- |
| `bun run dev:web` | Start Vite with hot reload |
| `bun run check:web` | Run TypeScript and ESLint checks |
| `bun run build:web` | Type-check and build into `apps/web/dist` |
| `bun run preview:web` | Preview the production build locally |

`bun run start:web` also previews an existing build; run `build:web` first. Preview is for local verification, not production hosting. Deploy `apps/web/dist` with your hosting provider.

On Windows PowerShell, if the `bun.ps1` shim is blocked by execution policy, use `bun.cmd` in place of `bun`.

## Source layout

- `src/main.tsx`: browser entry point and global CSS import.
- `src/app/`: application composition; add routing and providers here as needed.
- `src/pages/`: route-level screens.
- `src/widgets/`: sections composed from multiple features.
- `src/features/`: user actions and their UI/logic.
- `src/entities/`: domain models and reusable domain UI.
- `src/shared/components/ui/`: shadcn/Base UI primitives.
- `src/shared/lib/`: generic helpers, including `cn`.
- `src/index.css`: Tailwind imports, theme tokens, and global styles.
- `public/`: assets served by URL without bundling.

Create feature directories when they are needed; empty directories are not tracked by Git. Keep shared code independent of features and pages. Use `@/web/...` for imports from `src`; the alias is configured in Vite, TypeScript, and `components.json`.

## Styling and components

Tailwind v4 runs through `@tailwindcss/vite`. A separate PostCSS configuration is unnecessary. Theme colors and typography live in `src/index.css`; prefer semantic utilities such as `bg-primary` and `text-muted-foreground` in new components.

To add a shadcn component, run the installed CLI from `apps/web`:

```sh
bun run shadcn add input
```

`components.json` places generated UI components under `src/shared/components/ui`. Keep component modules limited to component exports for Fast Refresh; put shared variant definitions in a separate module when needed.

## API integration

Vite proxies `/api` requests to `http://127.0.0.1:3000` during development and preserves the `/api` path. The backend and shared API client are currently placeholders, so this setup does not yet provide working endpoints. Start the backend separately with `bun run dev:api` once endpoints are implemented.

The development proxy is not included in the production bundle. Configure `/api` routing on the production host when connecting the backend. Never place secrets in frontend code or `VITE_*` variables, which are exposed to the browser.
