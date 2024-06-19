import tseslint from 'typescript-eslint'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
  }
);
