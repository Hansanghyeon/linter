import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.recommended,
  ...hyeonEslintConfig.typescript,
  ...hyeonEslintConfig.prettier,
]
