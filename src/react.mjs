import react from 'eslint-plugin-react'
import reactJsxruntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'


export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactJsxruntime,
    languageOptions: {
      ...reactJsxruntime.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        }
      ],
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
     },
  },
]
