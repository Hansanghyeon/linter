A rule set of hyeon's ESLint configurations

- 참고
  - eslint:recommended [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/)
  - @typescript-eslint/recommended [typescript-eslint/packages/eslint-plugin at main · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)

## Installation

```shell
bun install --save-dev @hyeon/eslint-config
```

```shell
npm install --save-dev @hyeon/eslint-config
```

```shell
yarn add --save-dev @hyeon/eslint-config
```

```shell
pnpm add --save-dev @hyeon/eslint-config
```


## Usage

- 🟩 react + typescript

```js
import hyeonEslintConfigBase from '@hyeon/eslint-config'
import hyeonEslintConfigReact from '@hyeon/eslint-config/react'
import hyeonEslintConfigPrettier from '@hyeon/eslint-config/prettier'

export default [
  ...hyeonEslintConfigBase,
  ...hyeonEslintConfigReact,
  ...hyeonEslintConfigPrettier,
]
```

- 🟩 typescript
- 🟥 react

```js
import hyeonEslintConfigBase from '@hyeon/eslint-config'
import hyeonEslintConfigTypescript from '@hyeon/eslint-config/typescript'
import hyeonEslintConfigPrettier from '@hyeon/eslint-config/prettier'

export default [
  ...hyeonEslintConfigBase,
  ...hyeonEslintConfigTypescript,
  ...hyeonEslintConfigPrettier,
]
```