import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier",
  ),

  // Add custom configurations
  {
    plugins: {
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      "tailwindcss/classnames-order": [
        "warn",
        {
          officialSorting: true,
        },
      ],
      "tailwindcss/enforces-shorthand": "off",
      "tailwindcss/no-custom-classname": "off",
      "n/no-missing-import": "off",
    },
  },
];

export default eslintConfig;
