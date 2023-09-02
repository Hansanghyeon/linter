module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    'max-len': [
      'warn',
      120,
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
  },
};
