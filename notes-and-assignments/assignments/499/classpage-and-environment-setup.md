### 1. Create classpage.html on aludra.usc.edu

Create a classpage.html file and upload it to aludra.usc.edu in a folder called _itp499_.  This page should have your name, email address, and possibly a contact phone number. Verify that you can click on your name on the class home page and it takes you to this page. This is where you will post github links to your assignments. Your student page URL will be the following, with your own supplied username (email prefix).

http://www-scf.usc.edu/~dtang/499/classpage.html

### 2. Integrated Development Environment (IDE)

You are welcome to use whatever IDE / editor you like. In this class I will be using PHPStorm. You can download it from the website and I can send you an academic license.

http://www.jetbrains.com/phpstorm/

### 3. Environment setup

1. Install [Git](http://git-scm.com/downloads) - will discuss later
2. Create a [Github account](https://github.com/) - will discuss later
3. Install [Virtual Box](https://www.virtualbox.org/)
4. Install [Vagrant](http://www.vagrantup.com/)

We will be using the command line interface (CLI) in this class. For Windows users, you might want to explore [cmder](http://bliker.github.io/cmder/). Mac users have the Terminal.

Once installed, verify that Vagrant works by going to the command line and entering:

```
	vagrant -v
```

You should see an output like:

```
	Vagrant 1.3.5
```

Next, head over to [https://github.com/skaterdav85/vagrant-499](https://github.com/skaterdav85/vagrant-499). Download the repository to your local computer, cd into the directory (refer to the command line basics resource page), and run 'vagrant up'. This will take a while the first time. If everything works ok, you should be able to browse to http://localhost:3333/phpinfo.php and see the index.php page running. 

__Before class each week, you should start up the virtual machine so that your environment is all ready and we can get started immediately. We will be using the above repository to set up our environment for the next few weeks. Then I will point you to another repository that will be used to set up our environment for Laravel.__

### 4. MySQL Database

You will be connecting to a remote MySQL server that I have set up. There are a few databases on there. One is called 'music' and the other is called 'dvd'. We will use both throughout the semester. For these databases, you only have SELECT and INSERT priveleges. 

* host = itp460.usc.edu
* username = student
* password = ttrojan

There are a number of tools you can use to access these databases.

* Mac: [Sequel Pro](http://www.sequelpro.com/)
* Windows: [MySQL Workbench](http://dev.mysql.com/downloads/tools/workbench/5.2.html)
* Web GUI: [PHPMyAdmin](http://itp460.usc.edu/phpmyadmin/)
* Command Line (CLI): Once you download and install MySQL locally, you will have access to a mysql CLI. Then you can run:

```
mysql --host=itp460.usc.edu --user=student --password=ttrojan
```