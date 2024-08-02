import stylisticTs from '@stylistic/eslint-plugin-ts'
import tseslint from 'typescript-eslint'
import typescriptParser from '@typescript-eslint/parser'

export default tseslint.config(
  tseslint.configs.base,
  tseslint.configs.eslintRecommended,
  {
    files: ['**/*.{ts,tsx,mtsx}'],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
    },
    rules: {
      '@stylistic/ts/member-delimiter-style': ['error', { multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: false }, multilineDetection: 'brackets' }],
    }
  }
);
