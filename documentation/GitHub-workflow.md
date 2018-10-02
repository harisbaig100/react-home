
--connect git--

git init

git clone git@github.com:lcho/react-home.git



-- workflow --

git checkout -b "YOUR_BRANCH_NAME"

git add --all

-- add specific file --
git add "FILENAME"

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

-- tree viewer --
git log --graph

-- getting rid of all change --
git reset --hard 

-- don't get rid of my changes, but i want you to go back x no. of times --
-- in this case HEAD~1, go back 1 commit --
git reset --soft HEAD~1

-- Merge all conflict: Accept all both --
Open command palette: command + shift + p
> Merge Conflict: Accept All Both

-- deleting remote branch --
git push origin --delete "BRANCH_NAME"

-- show all git aliases --
git config --get-regexp alias

-- add alias --
git config --global alias.st status
    -- now type "git st"


-----------------------
-- Git Rebasing Info --
-- 1. rebase multiple commits:
    git rebase --interactive HEAD~2         (rebase 2 commmits)

    pick ca2231s
    s casd221           // squash this one instead of the top one

    :x  // to save and exit from vim


-- 2. rebasing feature branch on top of a hotfix master:
-- current graph looks like
*   6dceb3b (master) prod hotfix
|   * 2b17402 (HEAD -> feature) Adding a feature!
| /
*   74da5ae
*   91be81v
*   dfd0752
*   f4ffbff

-- I want to move my feature on top of the master prod hotfix
    git checkout feature
    git rebase master

-- now logs look like
*   50efca3 (HEAD -> feature) Adding a feature!
*   6dceb3b (master) prod hotfix
*   74da5ae
*   91be81v
*   dfd0752
*   f4ffbff

-- 3. aborting rebase
    git rebase --abort

-- never ever rebase master
-- never ever rebase anything you have already pushed

-----------------------
