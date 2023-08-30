A rule set of hyeon's ESLint configurations

- 참고
  - eslint:recommended [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/)
  - @typescript-eslint/recommended [typescript-eslint/packages/eslint-plugin at main · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)

## Installation

```shell
npm install --save-dev @hyeon/eslint-config
```

```shell
yarn --dev @hyeon/eslint-config
```

## Usage

### @hyeon/eslint-config

javascript 프로젝트에서 사용추천

```js
module.exports = {
  extends: [
    "@hyeon/eslint-config"
  ]
}
```

### @hyeon/eslint-config/typescript

typescript 프로젝트에서 사용추천

```js
module.exports = {
  extends: [
    "@hyeon/eslint-config",
    "@hyeon/eslint-config/typescript"
  ]
}
```

### @hyeon/eslint-config/react

react 프로젝트에서 사용추천

```js
module.exports = {
  "extends": [
    "@hyeon/eslint-config",
    // "@hyeon/eslint-config/typescript", // 타입스크립트 프로젝트에서 주석제거
    "@hyeon/eslint-config/react",
  ],
}
```

### @hyeon/eslint-config/prettier

```js
module.exports = {
  "extends": [
    "@hyeon/eslint-config",
    "@hyeon/eslint-config/prettier",
  ],
}
```

#### @hyeon/eslint-config/prettier-config

```js
// .prettierrc.cjs
module.export = require('@hyeon/eslint-config/prettier.config')
```


### @hyeon/eslint-config/nextjs

```js
module.exports = {
  extends: [
    "@hyeon/eslint-config/nextjs",
  ]
}
```
