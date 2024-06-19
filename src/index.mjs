import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
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
  }
];