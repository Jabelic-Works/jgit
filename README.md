# JabGit

## global config

- account name: string
- workspace
  - name: string
  - Connection method: https, ssh

git@github.com:Jabelic-Works/jgit.git


## local config

- repository name: string
- Connection method?: https, ssh


## commit

Conventional Process

- git add < filename >
- git commit -b "commitment"
- git push origin  < branchname >

## initial git commitment

Conventional Process

- gh repo create [<name>] [flags]
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin git@github.com:Jabelic-Works/jgit.git
- git push -u origin main

jgit process

- jgit 
  - initial y/n
    - .gitがないことを検知して,表示. nで何もしない. yで進む.
  - repository name: 
    - 入力
  - origin: 自動で生成して, それで正しいかを確認する y/n


