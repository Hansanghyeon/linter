#!/bin/bash

# make check_changeset 실행 결과물로 echo "true" 또는 echo "false"를 리턴한다.
# 그때 결과물을 $GITHUB_OUTPUT에 저장한다.
# changeset의 변경사항을 확인해보는 방법은 .changeset 디렉토리 내부에 README.md 파일을 제외하고 *.md 파일이있는지 확인해보면된다.

# Navigate to the .changeset directory
cd .changeset

# Check if there are any .md files (excluding README.md)
if [ "$(ls -A | grep -E '.*\.md$' | grep -v 'README\.md')" ]; then
    echo "true"
else
    echo "false"
fi