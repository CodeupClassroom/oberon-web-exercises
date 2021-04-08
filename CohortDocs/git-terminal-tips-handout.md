##Git Terminal Basics

###Common Commands

- **git init** - Initialize a repository) AVOID NESTED REPO
- **git status** - See which files need to be added or have been added
- **git add <filename>** - Add files to the stsaging area to be committed
- **git diff --cached** - See the changes of the files that will be committed
- **git commit** - Commit the changes to Git
- **git log** - View all previous commits
- **git rm --cached** - Remove files from staging by adding the file name
- **git commit -m ""** - To add commit message without an editor
- **git commit** - Write the commit message and save it in whatever text editor is set as the default

To change your default editor:

[default-git-editor](https://stackoverflow.com/questions/3539594/change-the-default-editor-for-files-opened-in-the-terminal-e-g-set-it-to-text)

### GitHub Set Up

Assuming you have an account and a local repo with committed changes:

1. Create a repository (click plus button at the top of the GitHub nav bar)
2. Paste the commands on GitHub of the second option in your terminal to push initially up to GitHub

### Best Practice

Add and commit frequently any time you complete a small piece of functionality
Write descriptive commit messages
Push commits regularly (at least twice a day)