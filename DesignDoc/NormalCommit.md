# NormalCommit

add と commit がセットで対話形式で行う。

## jgit process

```
$ jgit adc
> ? add to staging
*  src/index.ts
   src/feature1/index.ts
*  src/feature2/index.ts
   src/feature3/index.ts
```

- add する file は複数選択可能

## Design

- git add -p
- git add < filename >
