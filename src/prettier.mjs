import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  eslintConfigPrettier,
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          singleQuote: true,
          semi: false,
          tabWidth: 2,
          printWidth: 120,
          arrowParens: 'always',
          jsxSingleQuote: false,
          plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
          importOrder: ['^[^.](.*)$', '^[.]{1,2}/.*$'],
          importOrderSeparation: false,
          importOrderSortSpecifiers: true,

          /**
           * @see https://github.com/trivago/prettier-plugin-sort-imports/issues/120
           */

          importOrderParserPlugins: ['typescript', 'decorators-legacy', 'jsx', 'classProperties'],
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
      curly: ['error', 'all'],
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          afterBlockComment: true,
          beforeLineComment: true,
          afterLineComment: true,
          allowBlockStart: true,
          allowBlockEnd: true,
          allowObjectStart: true,
          allowObjectEnd: true,
          allowArrayStart: true,
          allowArrayEnd: true,
        },
      ],
      'max-len': 'off',
      'no-confusing-arrow': [
        'error',
        {
          allowParens: false,
        },
      ],
      'no-mixed-operators': 'error',
      'no-tabs': 'error',
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
    },
  },
]
