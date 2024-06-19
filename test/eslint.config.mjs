import hyeonEslintConfigBase from '@hyeon/eslint-config'
import hyeonEslintConfigReact from '@hyeon/eslint-config/react'
import hyeonEslintConfigTypescript from '@hyeon/eslint-config/typescript'
import hyeonEslintConfigPrettier from '@hyeon/eslint-config/prettier'

export default [
  ...hyeonEslintConfigBase,
  ...hyeonEslintConfigReact,
  ...hyeonEslintConfigTypescript,
  ...hyeonEslintConfigPrettier,
]
