module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
    },
    root: true,
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "no-console": 0,
    },
}