#!/bin/bash

# npm 버전과 package.json 버전이 같은지 아닌지 확인한다
version=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
npm_version=$(npm view @hyeon/eslint-config version)

# version이 npm_version보다 높아야한다
yarn semver "$version" -r ">$npm_version"

if [ $? -eq 1 ]; then
    echo "false"
else
    echo "true"
fi