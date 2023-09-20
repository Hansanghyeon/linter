module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@hyeon/eslint-config/prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    },
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
    }],
  }
}
