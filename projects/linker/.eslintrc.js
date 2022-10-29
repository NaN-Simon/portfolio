module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended' /* 'airbnb-base' */,
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    'no-plusplus': 0,
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
