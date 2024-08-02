import * as eslintImport from 'eslint-plugin-import'

export default [
  {
    plugins: {
      import: eslintImport,
    },
    rules: {
      'import/order':      ['error', {
        'newlines-between': 'always',
        groups:             ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize:        { order: 'asc', caseInsensitive: true },
      }],
    },
  },
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
    ]
  }
];