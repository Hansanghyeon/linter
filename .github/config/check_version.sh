#!/bin/bash

# npm 버전과 package.json 버전이 같은지 아닌지 확인한다
version=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
npm_version=$(npm view @hyeon/eslint-config version)

# 두개의 버전이 같다면 false를 리턴한다
if [ "$version" = "$npm_version" ]; then
    echo "false"
else
    echo "true"
fi