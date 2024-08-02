A rule set of hyeon's ESLint configurations

## Installation

```shell
npm install --save-dev @hyeon/eslint-config
```

## Usage

- 🟩 react + typescript

```js
import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.base,
  ...hyeonEslintConfig.react,
  ...hyeonEslintConfig.typescript,
  ...hyeonEslintConfig.plus, // optional
]
```

- 🟩 javascript

```js
import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.base,
  ...hyeonEslintConfig.js,
  ...hyeonEslintConfig.plus, // optional
]
```

- 🟩 typescript
- 🟥 react

```js
import hyeonEslintConfig from '@hyeon/eslint-config'

export default [
  ...hyeonEslintConfig.base,
  ...hyeonEslintConfig.typescript,
  ...hyeonEslintConfig.plus, // optional
]
```
