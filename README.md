[![Publish Package to Github](https://github.com/hyeon/eslint-config/actions/workflows/deploy.yaml/badge.svg)](https://github.com/hyeon/eslint-config/actions/workflows/deploy.yaml) [![Publish Package to NPM](https://badgen.net/npm/v/@hyeon/eslint-config)](https://www.npmjs.com/package/@hyeon/eslint-config)

# @hyeon/eslint-config

A rule set of hyeon's ESLint configurations

- eslint:recommended [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/)
- @typescript-eslint/recommended [typescript-eslint/packages/eslint-plugin at main · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)

## Installation

```
npm install --save-dev @hyeon/eslint-config
```

or

```
yarn --dev @hyeon/eslint-config
```

## Usage

### Javascript

`.eslintrc.js`
```js
module.exports = {
  extends: [
    '@hyeon/eslint-config'
  ]
}
```

`.eslintrc`
```
{
  "extends": [
    "@hyeon/eslint-config"
  ]
}
```

### @hyeon/eslint-config/typescript

> * @typescript-eslint/eslint-plugin
> * typescript

#### Typescript

`.eslintrc.js`
```js
module.exports = {
  extends: [
    '@hyeon/eslint-config',
    '@hyeon/eslint-config/typescript'
  ]
}
```

`.eslintrc`
```
{
  "extends": [
    "@hyeon/eslint-config",
    "@hyeon/eslint-config/typescript"
  ]
}
```

### @hyeon/eslint-config/react

> * eslint-plugin-react

#### Javascript + React

`.eslintrc.js`
```js
{
  "extends": [
    '@hyeon/eslint-config',
    '@hyeon/eslint-config/react',
  ],
}
```

`.eslintrc`
```
{
  "extends": [
    "@hyeon/eslint-config",
    "@hyeon/eslint-config/react"
  ]
}
```

#### Typescript + React

`.eslintrc.js`
```js
module.exports = {
  extends: [
    '@hyeon/eslint-config',
    '@hyeon/eslint-config/typescript',
    '@hyeon/eslint-config/react'
  ]
}
```

`.eslintrc`
```
{
  "extends": [
    "@hyeon/eslint-config",
    "@hyeon/eslint-config/typescript",
    "@hyeon/eslint-config/react"
  ]
}
```

### @hyeon/eslint-config/prettier

> * eslint-plugin-prettier

#### Prettier

`.prettierrc`
```js
{
  "extends": [
    '@hyeon/eslint-config',
    '@hyeon/eslint-config/prettier',
  ],
}
```
