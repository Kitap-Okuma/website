import { defineConfig } from "eslint/config";
import esTs from "typescript-eslint";
import esPrettier from "eslint-plugin-prettier";
import esJs from "@eslint/js";
import esSvelte from "eslint-plugin-svelte";
import esHtml from "@html-eslint/eslint-plugin";
import esMd from "eslint-plugin-markdown";
import esJsonc from "eslint-plugin-jsonc";
import svelteParser from "svelte-eslint-parser";
import svelteRunes from "eslint-plugin-svelte-runes";
import jsoncParser from "jsonc-eslint-parser";
import htmlParser from "@html-eslint/parser";
const prettierConfig = {
  usePrettierrc: true,
  fileInfoOptions: { withNodeModules: true },
};

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.js", "**/**.mjs"],
    plugins: { prettier: esPrettier },
    languageOptions: {
      parser: esTs.parser,
      parserOptions: { project: "./tsconfig.json" },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        location: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
      },
    },
    extends: [esJs.configs.recommended],
    rules: {
      "prettier/prettier": ["warn", {}, prettierConfig],
    },
  },
  {
    files: [
      "**/*.svelte",
      "*.svelte",
      // Need to specify the file extension for Svelte 5 with rune symbols
      "**/*.svelte.js",
      "*.svelte.js",
      "**/*.svelte.ts",
      "*.svelte.ts",
    ],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        extraFileExtensions: [".svelte"],
        parser: esTs.parser,
        globals: {
          window: "readonly",
          document: "readonly",
          navigator: "readonly",
          location: "readonly",
          localStorage: "readonly",
          sessionStorage: "readonly",
        },
      },
    },
    plugins: {
      svelte: esSvelte,
      prettier: esPrettier,
      "svelte-runes": svelteRunes,
    },
    extends: [svelteRunes.configs.recommended],
    rules: {
      "prettier/prettier": ["warn", {}, prettierConfig],
    },
  },

  {
    files: ["**/*.json", "**/*.jsonc", ".prettierc"],
    plugins: {
      jsonc: esJsonc.meta,
      prettier: esPrettier,
    },
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      "prettier/prettier": ["warn", {}, prettierConfig],
      "@/sort-keys": ["warn"],
      "@/no-comments": ["off"],
      "@/comma-dangle": ["error", "never"],
      "@/quote-props": ["error", "always"],
      "@/quotes": ["error", "double"],
    },
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: {
      "@html-eslint": esHtml,
      prettier: esPrettier,
    },
    rules: {
      "prettier/prettier": ["warn", {}, prettierConfig],
      "@html-eslint/require-closing-tags": "off",
      "@html-eslint/require-doctype": "error",
      "@html-eslint/require-lang": "error",
      "@html-eslint/require-title": "error",
      "@html-eslint/no-duplicate-id": "error",
      "@html-eslint/no-inline-styles": "warn",
      "@html-eslint/require-img-alt": "error",
      "@html-eslint/no-obsolete-tags": "error",
      "@html-eslint/indent": ["error", 2],
    },
  },
  {
    files: ["**/*.md"],
    plugins: {
      markdown: esMd,
      prettier: esPrettier,
    },
    processor: "markdown/markdown",
    rules: {
      "prettier/prettier": ["warn", {}, prettierConfig],
    },
  },

  {
    files: ["**/*.md/*.js", "**/*.md/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      prettier: esPrettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "prettier/prettier": ["warn", {}, prettierConfig],
    },
  },

  {
    files: ["**/*.md/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: [".svelte"],
        parser: esTs.parser,
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      prettier: esPrettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "prettier/prettier": ["warn", {}, prettierConfig],
      "svelte/valid-compile": "off",
    },
  },
]);
