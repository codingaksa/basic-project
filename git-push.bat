@echo off
chcp 65001 >nul
cd /d "C:\Users\afurk\Desktop\eren için"
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/codingaksa/basic-project.git
git push -u origin main
pause
