import hyeonEslintConfigBase from './base.mjs'
import hyeonEslintConfigPrettier from './prettier.mjs'
import hyeonEslintConfigReact from './react.mjs'
import hyeonEslintConfigTypescript from './typescript.mjs'
import hyeonEslintConfigHansanghyeon from './hansanghyeon.mjs'
import hyeonEslintConfigNestjs from './nestjs.mjs'

export default {
  recommended: hyeonEslintConfigBase,
  prettier: hyeonEslintConfigPrettier,
  react: hyeonEslintConfigReact,
  typescript: hyeonEslintConfigTypescript,
  hansanghyeon: hyeonEslintConfigHansanghyeon,
  nestjs: hyeonEslintConfigNestjs,
}