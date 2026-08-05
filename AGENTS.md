# AGENTS.md

Guidelines for AI agents and contributors working in this repository.

## Tooling

- **Lint:** `npm run lint` (ESLint flat config, `eslint.config.mjs`)
- **Auto-fix:** `npm run lint:fix`
- **Format:** `npm run format` (Prettier + `@ianvs/prettier-plugin-sort-imports` + `prettier-plugin-tailwindcss`)
- **Format check:** `npm run format:check`
- **Build:** `npm run build`

ESLint and Prettier are run separately. Prettier handles formatting and import
ordering; ESLint handles lint rules (unused imports, sorting, conventions).

## Conventions

These are enforced by ESLint/Prettier where possible; the rest are manual
rules to follow when writing code.

### Components & exports

- Component files are **PascalCase** (e.g. `src/components/sections/hero.tsx`
  contains `Hero`).
- **Always use named exports** — `export const Foo = () => { ... }`. Never
  `export default` (except Next.js App Router files and root config files,
  which require it).
- Function and variable names must be **self-explanatory**. Avoid generic
  names (`data`, `temp`, `value`, `handle`). In particular, function names
  must **not start with `handle`** — use `on*` (e.g. `onSave`) or a
  descriptive action name (e.g. `sortBy`) instead.

### Hooks & component body order

- `use*` hooks come **first**, immediately after the opening of the component
  function.
- `useState` is grouped after other `use*` hooks, separated by a blank line.
- `useEffect` (and any other setup) goes **before** the `return` statement.
- **Sort functions alphabetically** within a component body, within hooks, and
  within context providers.

### Objects, types, props

- Object keys are sorted **alphabetically** (`perfectionist/sort-objects`).
- Interface/type members are sorted **alphabetically**
  (`perfectionist/sort-interfaces`, `sort-object-types`, `sort-union-types`,
  `sort-intersection-types`).
- **Multiline members go last** — for rules that support it (`sort-objects`,
  `sort-interfaces`, `sort-object-types`, `sort-jsx-props`), non-multiline
  members sort alphabetically first, then multiline members sort alphabetically
  in the last group.
- JSX props are sorted **alphabetically**, multiline props last
  (`perfectionist/sort-jsx-props`).
- Tailwind classes are sorted via `prettier-plugin-tailwindcss` (logical
  grouping). Run `npm run format` after editing `className` strings.

### Imports

Import groups are sorted by `@ianvs/prettier-plugin-sort-imports` in this order:

1. `react`
2. (blank line)
3. Third-party libraries
4. (blank line)
5. Absolute imports (`@/`)
6. (blank line)
7. Relative `../` then `./` imports

## Architecture notes

- Next.js 16 (App Router), static export (`output: "export"`).
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`).
- Path alias: `@/*` → `./src/*`.
