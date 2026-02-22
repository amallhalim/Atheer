import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // 1. Core JS Recommended Rules
  js.configs.recommended,

  // 2. TypeScript Recommended Rules
  ...tseslint.configs.recommended,

  // 3. React Recommended Rules
  pluginReact.configs.flat.recommended,

  // 4. Next.js Specific Rules
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Add custom rule overrides here
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off",          // We use TypeScript instead
    },
  },

  // 5. Global Ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
]);
