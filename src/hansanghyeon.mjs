import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from 'eslint-plugin-import';

/**
 * import관련 플러그인, 설정
 * simpleImportSort - https://github.com/lydell/eslint-plugin-simple-import-sort
 */
const _import = [
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            // 부수 효과가 있는 import.
            ["^\\u0000"],
            // `node:`로 시작하는 Node.js 기본 모듈.
            ["^node:"],
            // 패키지들.
            // 문자(또는 숫자, 밑줄)로 시작하거나 `@` 뒤에 문자가 오는 항목.
            ["^@?\\w"],
            // 절대 경로 import 및 Vue 스타일의 `@/foo`와 같은 기타 import.
            // 다른 그룹에서 매칭되지 않는 모든 항목.
            ["^"],
            // 상대 경로 import.
            // 점(`.`)으로 시작하는 모든 항목.
            ["^\\."],
          ],
        }
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off"
    },
  },
]

const custom = {
  rules: {
    'no-empty-pattern': 'off',
    'lines-around-comment': ['error', { 'beforeBlockComment': true }],
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_.*$|^_$|^P$|^flow$|^pipe$',
        args: 'all',
        argsIgnorePattern: '^_.*$|^_$|^P$|^flow$|^pipe$',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_.*$|^_$|^P$|^flow$|^pipe$',
        destructuredArrayIgnorePattern: '^_.*$|^_$|^P$|^flow$|^pipe$',
        ignoreRestSiblings: true,
      },
    ],
    'react/display-name': 'off',
  },
  ignores: [".config/*", "eslint.config.mjs", "eslint.config.js"]
}

export default [
  custom,
  ..._import,
];