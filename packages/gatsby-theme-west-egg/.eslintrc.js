module.exports = {
    env: {
      "browser": true,
      "es6": true
    },
    extends: ["plugin:import/typescript", "prettier/@typescript-eslint", "plugin:prettier/recommended", "prettier", "prettier/react"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      process: true,
      logger: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: "module",
      project: "./tsconfig.json"
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prefer-arrow", "promise", "no-null", "import", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/ban-types": [
        "warn",
        {
          "types": {
            "Object": "Use {} instead",
            "String": {
              "message": "Use string instead",
              "fixWith": "string"
            }
          }
        }
      ],
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/explicit-member-accessibility": ["error", { "accessibility": "no-public" }],
      "@typescript-eslint/no-inferrable-types": ["error", { "ignoreParameters": true, "ignoreProperties": true }],
      "no-param-reassign": 0,
      "@typescript-eslint/no-var-requires": 0,
      "prefer-arrow/prefer-arrow-functions": 0,
      "@typescript-eslint/promise-function-async": 0,
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/await-thenable": "error",
      "no-restricted-imports": "error",
      "no-new-wrappers": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "no-template-curly-in-string": "error",
      "@typescript-eslint/no-object-literal-type-assertion": "error",
      "no-return-await": "error",
      "no-throw-literal": "error",
      "@typescript-eslint/no-this-alias": 0,
      "@typescript-eslint/no-extraneous-class": "error",
      "prefer-object-spread": "error",
      "@typescript-eslint/no-require-imports": 0,
      "@typescript-eslint/array-type": ["error", "array-simple"],
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/explicit-function-return-type": 0,
      "no-undef-init": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "warn",
      "jsx-alignment": true,
      "jsx-boolean-value": [true, "never"],
      "jsx-curly-spacing": [true, "never"],
      "jsx-equals-spacing": [true, "never"],
      "jsx-key": true,
      "jsx-no-bind": true,
      "jsx-no-lambda": true,
      "jsx-no-string-ref": true,
      "jsx-self-close": true,
      "jsx-space-before-trailing-slash": true,
      "jsx-wrap-multiline": [
        true,
        {
          "declaration": "parens",
          "assignment": "parens",
          "return": "parens",
          "arrow": "parens-new-line",
          "condition": "ignore",
          "logical": "ignore",
          "prop": "ignore"
        }
      ],
      "import/no-cycle": ["error", { "maxDepth": 1 }],
      "import/no-self-import": "error",
    }
  }
  