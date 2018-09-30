
--connect git--

git init

git clone git@github.com:lcho/react-home.git



-- workflow --

git checkout -b "YOUR_BRANCH_NAME"

git add --all

git status

git commit -m "YOUR_COMMENT"

git push origin YOUR_BRANCH_NAME


-- go to GitHub.com--
-- pull request --
-- merge --
-- confirm merge --

git branch -D YOUR_BRANCH_NAME

-- fetch and prune
git fetch --all --prune

git pull

-- clean branch and delete untracked stuff
git clean -f -d

-- git pretty log --
git config --global alias.lg1 "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"

then type git lg1

-- getting rid of all change --
git reset --hard 

-- don't get rid of my changes, but i want you to go back x no. of times --
-- in this case HEAD~1, go back 1 commit --
git reset --soft HEAD~1


