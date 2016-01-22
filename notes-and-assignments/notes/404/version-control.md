##Version Control

Allows for collaboration on projects on the same file without the fear of overwriting other team members' work

Serves as a timeline for your project and reasons why they changed

Great for experimenting without the fear of breaking your code. You can always revert back

Central Repository System vs Distributed Version Control System

* Local repositories
* Staging
* Commits (saving to a repository)
* Branching
* Merging

##Command line intro
* cd = change directory
* ls = list files in the current directory
	* li -a
	* ls -l
* pwd = print working directory

##Git Distributed Version Control System
First, you'll need to set some basic information:

* git config --global user.name "David Tang"
* git config --global user.email dtang@usc.edu
* git config --global color.ui true

###Workflow
* Initialize a local repository: git init
* Add files to staging area: git add --all
* Commit changes (a snapshot of what is on the stage): git commit -m 'some message'
* git status
* git branch
* git checkout
* git merge

The workflow for using Git is that you do some work, stage the changes when you've finished a particular feature, and make a commit. Then you continue to make changes, stage, and commit, and you repeat this process, creating a timeline of snapshots for your project.

##GitHub

* Remote repositories
* Cloning remote repos - git clone
* Pushing to remote repos - git push origin master

##Deployment to the cloud
* PHPFog (PHP)
* Heroku
* AppFog
* Pagoda Box (PHP)


##Reading
* [Feature detection is not browser detection](http://www.nczonline.net/blog/2009/12/29/feature-detection-is-not-browser-detection/)
* [DOM events: bubbling vs capturing](http://www.quirksmode.org/js/events_order.html)
* [FTP to Git](http://net.tutsplus.com/articles/from-ftp-to-git-a-deployment-story/)
* [Git - The Simple Guide](http://rogerdudler.github.com/git-guide/)
* [Pro Git](http://git-scm.com/book) - This is more of a reference book that covers everything you'd ever want to know about Git

##Links
* [Git](http://git-scm.com/)
* [GitHub](https://github.com/)
* [Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys)
* Git Cheatsheet (in repository)