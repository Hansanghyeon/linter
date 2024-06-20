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
      // tailwindcss를 사용하기때문에 최대길이 제한은 제거함
      // 'max-len': [
      //   'warn',
      //   120,
      // ],
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: true,
        },
      ],
    },
  }
];