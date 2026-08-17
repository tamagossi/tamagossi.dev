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

## Verification & gotchas

- **No test suite.** `package.json` has no `test` script. Type errors surface
  only in `npm run build` (there is no separate typecheck script) — always
  build after changing code, not just lint.
- **Static export** (`output: "export"` in `next.config.ts`): `npm run start`
  will not work. Preview a build with `npx serve out`.
- **`images: { unoptimized: true }`** — no image optimization; `next/image` is
  a pass-through. Don't assume build-time image processing.

## Content notes

- **Blog posts are MDX** in `src/posts/*.mdx` (compiled via `@next/mdx`
  `createMDX` in `next.config.ts`). Each post exports `metadata`
  (date/excerpt/tags/title — NOT YAML frontmatter) and renders its body as the
  default export. The typed registry `src/lib/posts.ts` statically imports all
  posts; add a post = one `.mdx` file + one registry entry. Detail page:
  `src/app/blog/[slug]/page.tsx` (`generateStaticParams`, `dynamicParams =
false`). Global MDX element styling lives in `src/mdx-components.tsx`.
- **Case-study source material lives in `.agents/docs/`.** Pages under
  `src/app/case-studies/` are written from planning docs there (e.g.
  `Next Upgrade Plan …md` → `nextjs-migration`). Treat those docs as the source
  of truth for case-study content.
