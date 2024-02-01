# initial git commitment

## Conventional Process

- gh repo create [name] [flags]
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin git@github.com:Jabelic-Works/jgit.git
- git push -u origin main

## jgit process

command: `$ jgit init`

- `.git` があれば上書きして良いか確認: y/n
- repository-name: 入力
- username: 入力
- organization name: 入力
- origin(自動で生成して, それで正しいかを確認する): y/n
  - git@github.com:<workspace>/<repository-name>.git
  - git@github.com:<username>/<repository-name>.git

## Design

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```
