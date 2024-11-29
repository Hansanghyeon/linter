import js from '@eslint/js';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
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
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            // 그룹 설정을 비움
          ],
        }
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": [2, { ignore: ['\\.img$', '\\.svg$'] }]
    },
  }
];