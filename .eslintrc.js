module.exports = {
  env: {
    browser: true,
    es2021: true,
    "cypress/globals": true,
  },
  ignorePatterns: [".eslintrc.js"],
  extends: [
    "plugin:cypress/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": 0,
    "eol-last": 0,
    quotes: 0,
    semi: 0,
    "react/prop-types": 0,
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/destructuring-assignment": 0,
    "@typescript-eslint/no-floating-promises": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
