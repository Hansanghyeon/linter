import hyeonEslintConfigBase from './base.mjs'
import hyeonEslintConfigHansanghyeon from './hansanghyeon.mjs'
import hyeonEslintConfigPrettier from './prettier.mjs'
import hyeonEslintConfigReact from './react.mjs'
import hyeonEslintConfigTypescript from './typescript.mjs'

// 기존 사용자를 위한 객체 형태 유지 (각 속성이 flat config 배열)

const configs = {
  recommended: hyeonEslintConfigBase,
  prettier: hyeonEslintConfigPrettier,
  react: hyeonEslintConfigReact,
  typescript: hyeonEslintConfigTypescript,
  hansanghyeon: hyeonEslintConfigHansanghyeon,
}

// Default export는 설정 객체

export default configs

// Named exports로도 개별 설정 제공

export {
  hyeonEslintConfigBase as recommended,
  hyeonEslintConfigPrettier as prettier,
  hyeonEslintConfigReact as react,
  hyeonEslintConfigTypescript as typescript,
  hyeonEslintConfigHansanghyeon as hansanghyeon,
}
