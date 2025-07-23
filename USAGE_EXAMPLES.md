# @hyeon/linter 사용 예제

이 문서는 @hyeon/linter의 실제 사용 패턴과 예제를 제공합니다.

## 기본 사용법

```javascript
import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
  ...hyeonLinter.hansanghyeon,
]
```

## 고급 사용법 (실제 프로젝트 패턴)

```javascript
import hyeonLinter from '@hyeon/linter'

export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.prettier, 
  ...hyeonLinter.typescript,
  ...hyeonLinter.hansanghyeon,
  {
    ignores: ['node_modules/', 'dist/', 'vite.config.ts', 'tailwind.config.js'],
  },
  {
    rules: {
      camelcase: 'off',
      'lines-around-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_.*$|^_$|^P$|^flow$',
          args: 'all', 
          argsIgnorePattern: '^_.*$|^_$|^P$|^flow$',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_.*$|^_$|^P$|^flow$',
          destructuredArrayIgnorePattern: '^_.*$|^_$|^P$|^flow$',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]
```

## 개별 설정 사용

각각의 설정을 개별적으로 사용할 수도 있습니다:

```javascript
// TypeScript만 사용
import hyeonLinter from '@hyeon/linter'
export default [...hyeonLinter.typescript]

// React + TypeScript
import hyeonLinter from '@hyeon/linter'
export default [
  ...hyeonLinter.typescript,
  ...hyeonLinter.react,
]

// 모든 설정 + 커스텀 규칙
import hyeonLinter from '@hyeon/linter'
export default [
  ...hyeonLinter.recommended,
  ...hyeonLinter.prettier,
  ...hyeonLinter.typescript,
  ...hyeonLinter.react,
  ...hyeonLinter.hansanghyeon,
  {
    rules: {
      // 프로젝트별 커스텀 규칙
      'no-console': 'warn',
    },
  },
]
```

## 사용 가능한 설정들

- `hyeonLinter.recommended`: 기본 ESLint 설정
- `hyeonLinter.typescript`: TypeScript 관련 설정
- `hyeonLinter.react`: React 관련 설정
- `hyeonLinter.prettier`: Prettier 통합 설정
- `hyeonLinter.hansanghyeon`: 개인화된 추가 설정

## 일반적인 패턴들

### 1. 변수명 패턴
- `_`로 시작하는 변수: 사용하지 않는 변수로 인식 (경고 무시)
- `P`로 시작하는 변수: Props 타입 등에 사용
- `flow`로 끝나는 변수: Flow 관련 변수

### 2. 파일 무시 패턴
```javascript
{
  ignores: [
    'node_modules/',
    'dist/',
    'build/',
    '*.config.js',
    '*.config.ts',
    'vite.config.*',
    'tailwind.config.*',
  ],
}
```

### 3. 룰 비활성화
```javascript
{
  rules: {
    camelcase: 'off', // snake_case 허용
    'lines-around-comment': 'off', // 주석 주변 빈 줄 강제 안함
    '@typescript-eslint/no-explicit-any': 'off', // any 타입 허용
  }
}
```