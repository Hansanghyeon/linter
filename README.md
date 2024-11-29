## Installation

```bash
npm install --save-dev @hyeon/eslint-config
```

## Usage

```js
import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.recommended,
  ...hyeonEslintConfig.react,
  ...hyeonEslintConfig.prettier,
  ...hyeonEslintConfig.typescript,
]
```