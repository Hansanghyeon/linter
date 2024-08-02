import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.base,
  ...hyeonEslintConfig.react,
  ...hyeonEslintConfig.typescript,
  ...hyeonEslintConfig.plus, // optional
]
