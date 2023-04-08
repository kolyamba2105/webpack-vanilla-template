module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
  overrides: [
    {
      files: ["*.js"],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
    },
    {
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      files: ["./**/*.ts*"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      plugins: ["@typescript-eslint"],
    },
  ],
};
