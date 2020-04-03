module.exports =  {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'airbnb',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/react', // disables react-specific linting rules that conflict with prettier
  ],
  plugins: [
    'react',
    'prettier'
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports,
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
    project: './tsconfig.json'
  },
  rules:  {
    // 'prettier/prettier': ['warn', { singleQuote: true, semi: true }],
    // 'no-console': 'off',
    // "import/prefer-default-export": 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "@typescript-eslint/no-unused-vars" : "off"
    // semi: ["warn", "always"],
    // 'no-unused-vars': 'warn',
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": "off",
    // 'no-bitwise': 'off',
    // "interface-name": [1, "always-prefix"]
  },
  settings:  {
    react:  {
      version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};