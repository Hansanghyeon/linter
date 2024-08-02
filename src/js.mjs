import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent':                 ['error', 2],
      '@stylistic/js/semi':                   ['error', 'never'],
      '@stylistic/js/key-spacing':            ['error', { beforeColon: false, afterColon: true, align: 'value' }],
      '@stylistic/js/quote-props':            ['error', 'as-needed'],
      '@stylistic/js/no-multi-spaces':        ['error', {
        exceptions: {
          // https://github.com/eslint-stylistic/eslint-stylistic/issues/245
          TSTypeAnnotation:  true,
          ImportDeclaration: true,
        },
      }],
    },
  },
];