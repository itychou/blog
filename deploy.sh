#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件</span>
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:mudfish/java-it-docs.git master:gh-pages

cd -