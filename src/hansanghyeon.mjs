import importPlugin from 'eslint-plugin-import';

const _import = [
  importPlugin.flatConfigs.recommended,
  {
    rules: {
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
    'lines-around-comment': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    // 보일러플레이트 코드를 생성할때 {} 를 사용하는 경우가 많아서 off
    '@typescript-eslint/no-empty-object-type': 'off',
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
    'no-confusing-arrow': 'off'
  },
  ignores: [".config/*", "eslint.config.mjs", "eslint.config.js"]
}

export default [
  custom,
  ..._import,
];