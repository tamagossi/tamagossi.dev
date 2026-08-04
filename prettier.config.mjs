/** @type {import("prettier").Config} */
const config = {
  importOrder: [
    "^react$",
    "^react/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/",
    "",
    "^\\.\\./",
    "^\\./",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
