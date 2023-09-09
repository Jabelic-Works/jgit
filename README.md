echo "# jgit" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Jabelic-Works/jgit.git
git push -u origin main