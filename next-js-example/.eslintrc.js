module.exports = {
  extends: [
    "plugin:react/recommended",
    "react-app",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false }
    ],
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
    "no-param-reassign": 0,
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
