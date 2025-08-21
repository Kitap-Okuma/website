import typescript from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import markdown from "eslint-plugin-markdown";
import css from "eslint-plugin-css";
export default typescript.config(
  js.configs.recommended,
  ...typescript.configs.recommended,
  ...svelte.configs.recommended,
  {
    plugins: {
      prettier,
    },
    languageOptions: { parserOptions: { project: "./tsconfig.json" } },
    rules: {
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"],
        parser: typescript.parser,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
    },
  },

  {
    files: ["**/*.json", "**/*.jsonc", ".prettierc"],
    plugins: {
      jsonc,
      prettier,
    },
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
      "jsonc/sort-keys": "warn",
      "jsonc/no-comments": "off",
      "jsonc/comma-dangle": ["error", "never"],
      "jsonc/quote-props": ["error", "always"],
      "jsonc/quotes": ["error", "double"],
    },
  },

  {
    files: ["**/*.html"],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: {
      "@html-eslint": html,
      prettier,
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
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
      markdown,
      prettier,
    },
    processor: "markdown/markdown",
    rules: {
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
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
      prettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
    },
  },

  {
    files: ["**/*.md/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: [".svelte"],
        parser: typescript.parser,
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
      "svelte/valid-compile": "off",
    },
  },
  {
  files: ["**/*.css"],
  plugins: {
    css,     
    prettier,
  },
  extends: [css.configs["flat/recommended"]],
  rules: {
      "prettier/prettier": [
        "warn",
        {},
        {
          usePrettierrc: true,
          fileInfoOptions: {
            withNodeModules: true,
          },
        },
      ],
  },
}
);
