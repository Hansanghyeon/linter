import hyeonEslintConfigBase from './base.mjs'
import hyeonEslintConfigHansanghyeon from './hansanghyeon.mjs'
import hyeonEslintConfigPrettier from './prettier.mjs'
import hyeonEslintConfigReact from './react.mjs'
import hyeonEslintConfigTypescript from './typescript.mjs'

export default {
  recommended: hyeonEslintConfigBase,
  prettier: hyeonEslintConfigPrettier,
  react: hyeonEslintConfigReact,
  typescript: hyeonEslintConfigTypescript,
  hansanghyeon: hyeonEslintConfigHansanghyeon,
}
