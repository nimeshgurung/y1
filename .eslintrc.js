/* eslint-env node */
module.exports = {
  root: true,
  ignorePatterns: [
    "**/*.d.ts",
    "build/",
    "vendor/",
    "dist/",
    "coverage/",
    "docs/",
    "html-report/",
    "automation/", // TODO: automation tests needs it's own ESLint config with ESLint Playwright files
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: "readonly",
    $TSFixMe: "readonly",
    $TSFixMeFunction: "readonly",
  },
  overrides: [
    {
      files: ["*.js", "*.ts", "*.jsx", "*.tsx", "*.mjs", "*.cjs"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended", // should always be last
      ],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
        "react-hooks",
        "simple-import-sort",
        "unused-imports",
      ],
      rules: {
        "no-restricted-imports": [
          "warn",
          {
            paths: [
              {
                name: "lodash",
                message:
                  "Please use `import [method] from 'lodash/[method]'` instead.",
              },
              {
                name: "@mui/material",
                message:
                  "Please use `import [package] from '@mui/material/[package]'` instead.",
              },
              {
                name: "@mui/icons-material",
                message:
                  "Please use `import [package] from '@mui/icons-material/[package]'` instead.",
              },
              {
                name: "react",
                importNames: ["default"],
                message:
                  "Please use `import { [function] } from 'react'` instead.",
              },
            ],
            patterns: [
              { group: ["!lodash/*"] },
              { group: ["!@mui/material/*"] },
              {
                group: ["moment"],
                message:
                  "Deprecated. Please use `import dayjs from 'utils/dayjs` instead.",
              },
            ],
          },
        ],
        "no-console": "warn",
        "no-empty-function": "off",
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              [
                "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
              ],
              ["^react", "^@?\\w"],
              [
                "^(assets|components|contexts|hooks|modules|pages|persistedState|services|store|types|utils)(/.*|$)",
              ],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.s?css$"],
            ],
          },
        ],
        "simple-import-sort/exports": "warn",
        "unused-imports/no-unused-imports": "warn",
        "prettier/prettier": [
          "warn",
          {
            endOfLine: "auto",
          },
        ],

        // React rules
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",

        // TypeScript rules
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};