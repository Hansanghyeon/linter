import arca from 'eslint-plugin-arca';

export default [
  {
    plugins: {
      arca,
    },
    rules: {
      'arca/import-align': ['error', { collapseExtraSpaces: true }],
    }
  }
]