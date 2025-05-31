import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslintConfigPrettier,
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      "prettier/prettier": ["error", {
        trailingComma: "all",
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 120,
        arrowParens: "always",
        jsxSingleQuote: false,
        // NestJS 데코레이터 지원을 위한 설정
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        "plugins": [
          "@trivago/prettier-plugin-sort-imports",
          "prettier-plugin-tailwindcss"
        ],
        "importOrder": [
          "^@nestjs/(.*)$",
          "^[^.](.*)$", 
          "^[.]{1,2}/.*$"
        ],
        "importOrderSeparation": true,
        "importOrderSortSpecifiers": true,
        // 데코레이터 관련 설정
        "bracketSpacing": true,
        "bracketSameLine": false,
      }],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': 'error',
      curly: ['error', 'all'],
      'lines-around-comment': ['error', {
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
        // 데코레이터 위의 주석 허용
        allowClassStart: true,
        allowClassEnd: true,
      }],
      'max-len': 'off',
      'no-confusing-arrow': ['error', {
        allowParens: false,
      }],
      'no-mixed-operators': 'error',
      'no-tabs': 'error',
      quotes: ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: false,
      }],
      // NestJS 데코레이터 관련 규칙 완화
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],
    },
  },
] 