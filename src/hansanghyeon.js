export default [
  {
    rules: {
      'no-empty-pattern': 'off',
      'lines-around-comment': ['error', { 'beforeBlockComment': true }],
      'simple-import-sort/imports': [
        'error',
        {
          'groups': [
            // 그룹 설정을 비움
          ],
        }
      ],
    },
  },
];