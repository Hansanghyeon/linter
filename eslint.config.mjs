import hyeonLinter from './src/index.mjs'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.prettier,
  {
    ignores: ['node_modules/', 'dist/', 'test/', '*.config.js'],
  },
  {
    files: ['src/**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
  },
]