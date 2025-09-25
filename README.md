# React + TypeScript + Vite (Ultracite Linting)

This app uses Vite + React (SWC) and Ultracite as the single tool for linting and formatting on top of Biome. Ultracite enforces strict a11y, TypeScript, React, and code-quality rules with subsecond performance and zero config.

The project-level config is in `biome.jsonc`:

- `extends: ["ultracite"]` – enables the full rule set

## Quick start

Install deps, run the dev server, build, and preview:

```sh
# install
bun install

# dev server
bun run dev

# type-check + build
bun run build

# preview production build
bun run preview
```

If you prefer npm or pnpm, replace `bun` with your package manager.

## Linting and formatting with Ultracite

Run checks without writing changes:

```sh
npx ultracite check
```

Auto-fix issues and format the codebase (also available as a script):

```sh
# fixes and formats all files
npx ultracite fix

# or via package.json
bun run lint
```

Notes:

- Pre-commit: `lint-staged` is configured to run Ultracite on staged files. If you use Husky, wire `lint-staged` in a pre-commit hook to enforce this locally.
- Editor: For best experience, install a Biome/Ultracite-compatible VS Code extension and enable format-on-save.

## React + SWC note

This project uses `@vitejs/plugin-react-swc` for Fast Refresh. The React Compiler is not yet compatible with SWC; see the tracking issue: [vite-plugin-react issue #428](https://github.com/vitejs/vite-plugin-react/issues/428).

## What Ultracite enforces (high level)

- Accessibility: meaningful alt text, valid ARIA, focus management, keyboard handlers for interactive elements
- TypeScript: no `any`, strict and safe patterns, no non-null assertions
- React: stable hooks, correct deps, safe keys, no dangerous props
- Code quality and style: no unused vars/imports, safe comparisons, consistent formatting via Biome

## Project scripts

- `dev` – start Vite dev server
- `build` – type-check and build
- `preview` – preview the production build
- `lint` – run `ultracite fix`

## Migrating from ESLint (optional)

This project uses Ultracite instead of ESLint. If you don’t need ESLint anymore, you can remove any ESLint-specific config or dependencies left from the template.
