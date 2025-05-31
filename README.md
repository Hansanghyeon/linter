## Installation

```bash
npm install --save-dev @hyeon/linter
```

## Usage

```js
import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.react,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
]
```

### NestJS

NestJS 프로젝트에서 데코레이터 관련 Prettier 오류를 해결하려면:

```js
import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.nestjs,
  ...hyeonLinter.typescript,
]
```

또는 직접 import:

```js
import hyeonNestjsConfig from '@hyeon/linter/nestjs'
import hyeonTypescriptConfig from '@hyeon/linter/typescript'

export default [
  ...hyeonNestjsConfig,
  ...hyeonTypescriptConfig,
]
```

## vite

uninstall

```bash
eslint-plugin-react-hooks eslint-plugin-react-refresh typescript-eslint globals @eslint/js
```
