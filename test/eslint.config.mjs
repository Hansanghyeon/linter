import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
  ...hyeonLinter.hansanghyeon,
  {
    ignores: ['node_modules/', 'dist/', '*.config.js', 'src/fixtures/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      camelcase: 'off',
      'lines-around-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_.*$|^_$|^P$',
          args: 'all',
          argsIgnorePattern: '^_.*$|^_$|^P$',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_.*$|^_$|^P$',
          destructuredArrayIgnorePattern: '^_.*$|^_$|^P$',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]
