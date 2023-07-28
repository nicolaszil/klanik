module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: '*.test.tsx',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        curly: ['error', 'multi'],
        '@typescript-eslint/no-shadow': 'off',
        'no-undef': 'off',
        'no-shadow': 'off',
        "no-alert": "error",
        "no-bitwise": "error",
        "no-console": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "error",
        "no-param-reassign": "error",
        "no-self-compare": "error",
        'object-curly-spacing': ["error", "always"],
        'arrow-body-style': ['error', 'as-needed'],
        'linebreak-style': ['error', 'unix'],
        'max-len': [
          'error',
          {
            code: 200,
            tabWidth: 2,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
          },
        ],
      },
    },
  ],
}
