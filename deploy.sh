#!/bin/sh

rm -rf .tmp
mkdir .tmp
cp -r .git .tmp
cd .tmp
git checkout master
git pull origin master
cp -r ../build/** ./
git add .
git commit -m 'Deploy Documentation Changes'
git push origin master
rm -rf ../tmp
