module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    '@hyeon/eslint-config/prettier',
    'prettier/react',
  ],
  plugins: ['import', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      }
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
