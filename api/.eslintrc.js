module.exports = {
  extends: [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  rules: {
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        printWidth: 120,
        tabWidth: 2
      }
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "parent",
          ["index", "internal", "sibling"]
        ],
        "newlines-between": "always"
      }
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["return", "if", "switch"] }
    ],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }]
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        moduleDirectory: ["node_modules", "src/"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
