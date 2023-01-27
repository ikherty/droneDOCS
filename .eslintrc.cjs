module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:markdown/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  ignorePatterns: ["!docs/.vitepress", "docs/.vitepress/cache", "docs/.vitepress/dist", "node_modules"],
  plugins: ["vue", "@typescript-eslint", "prettier", "markdown"],
  rules: {
    "prettier/prettier": "warn",
  },
};
