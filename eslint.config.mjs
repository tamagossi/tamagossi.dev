import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";

const noHandlePrefix = {
  rules: {
    "no-handle-prefix": {
      create(context) {
        function report(name, node) {
          context.report({
            data: { name },
            message:
              "Function name '{{ name }}' starts with 'handle'. Use a descriptive name (e.g. 'onSave' or the action itself) instead.",
            node,
          });
        }

        return {
          FunctionDeclaration(node) {
            if (node.id?.name.startsWith("handle")) {
              report(node.id.name, node.id);
            }
          },
          VariableDeclarator(node) {
            if (node.id.type !== "Identifier") {
              return;
            }
            const init = node.init;
            const isFunction =
              init &&
              (init.type === "ArrowFunctionExpression" ||
                init.type === "FunctionExpression");
            if (isFunction && node.id.name.startsWith("handle")) {
              report(node.id.name, node.id);
            }
          },
        };
      },
      meta: {
        docs: {
          description:
            "Disallow function names that start with 'handle'. Use a descriptive name instead.",
        },
        schema: [],
        type: "suggestion",
      },
    },
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    plugins: {
      "import-x": importX,
      local: noHandlePrefix,
      perfectionist,
      "unused-imports": unusedImports,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "import-x/no-default-export": "error",
      "local/no-handle-prefix": "error",
      "no-unused-vars": "off",

      "perfectionist/sort-classes": [
        "error",
        { order: "asc", type: "alphabetical" },
      ],

      "perfectionist/sort-interfaces": [
        "error",
        { order: "asc", type: "alphabetical" },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        { order: "asc", type: "alphabetical" },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          groups: ["prop", "multiline-prop"],
          order: "asc",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        { order: "asc", type: "alphabetical" },
      ],
      "perfectionist/sort-objects": [
        "error",
        { order: "asc", type: "alphabetical" },
      ],
      "perfectionist/sort-union-types": [
        "error",
        { order: "asc", type: "alphabetical" },
      ],
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: [
      "**/page.tsx",
      "**/page.ts",
      "**/layout.tsx",
      "**/layout.ts",
      "**/loading.tsx",
      "**/not-found.tsx",
      "**/error.tsx",
      "**/global-error.tsx",
      "**/template.tsx",
      "**/route.ts",
      "**/default.tsx",
      "next.config.ts",
      "next.config.mjs",
      "next.config.js",
      "postcss.config.mjs",
      "postcss.config.js",
      "prettier.config.mjs",
      "prettier.config.js",
      ".prettierrc",
      ".prettierrc.mjs",
      ".prettierrc.js",
      "eslint.config.mjs",
      "eslint.config.js",
    ],
    rules: {
      "import-x/no-default-export": "off",
    },
  },
  eslintConfigPrettier,
]);

export default eslintConfig;
