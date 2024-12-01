## Installation

```bash
npm install --save-dev @hyeon/linter
```

## Usage

```js
import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.react,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
]
```

## vite

```bash
npm uninstall eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslin globals
```