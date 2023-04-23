module.exports = {
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
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
