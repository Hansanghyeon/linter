#!/bin/bash

# ../../package.json에 있는 version을 가져온다.
version=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
echo $version