module.exports = {
  env: {
    es2021: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    'max-len': [
      'error',
      80,
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    "semi": ["error", "never"],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
      }
    ],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
  },
}
