### 1. Integrated Development Environment (IDE)

You are welcome to use whatever IDE / editor you like. In this class I will be using PHPStorm. You can download it from the website and I can send you an academic license.

http://www.jetbrains.com/phpstorm/

### 2. Tools

1. Install [Git](http://git-scm.com/downloads) - will discuss later
2. Create a [Github account](https://github.com/) - will discuss later

We will be using the command line interface (CLI) in this class. For Windows users, you might want to explore [cmder](http://bliker.github.io/cmder/). Mac users have the Terminal.

### 3. Installation

#### Mac

1. Install PHP 5.5 or 5.6 on your machine by following these instructions http://php-osx.liip.ch/

2. Open up Terminal and run the following to verify you have installed the latest php correctly. You should see the version of php installed output to the terminal.

```
php -v
```

If you have trouble with this, simply run the following command in Terminal and I'll help you finish it on the first day of class. Remember to bring your laptop!

```
curl -s http://php-osx.liip.ch/install.sh | bash -s 5.6
```

#### Windows

Your TA, Priyanka created installation instructions for [Windows](/PHP5_CommandLine.pdf). If you have any questions, feel free to email here at: priyankv@usc.edu.

If you have both a mac and a windows machine, I recommend using the mac throughout this class. If not, don't worry and we'll figure out how to get it running on Windows.

#### MAMP and XAMPP

The following are 1-click installs to have php, apache, and mysql installed locally on your machine. This will work for the first few weeks of class, but won't suffice after that.

* MAMP (mac) http://www.mamp.info/en/
* XAMPP (windows and mac) https://www.apachefriends.org/index.html

### 3. MySQL Tooling

Throughout this clas, you will be connecting to a remote MySQL server that I have set up. There are a few databases on there. One is called 'music' and the other is called 'dvd'. We will use both throughout the semester. For these databases, you only have SELECT and INSERT priveleges. 

* host = itp460.usc.edu
* username = student
* password = ttrojan

There are a number of tools you can use to access these databases. Download one of them:

* Mac: [Sequel Pro](http://www.sequelpro.com/)
* Windows: [MySQL Workbench](http://dev.mysql.com/downloads/tools/workbench/5.2.html)
* Web GUI: [PHPMyAdmin](http://itp460.usc.edu/phpmyadmin/)
* Command Line (CLI): Once you download and install MySQL locally, you will have access to a mysql CLI. Then you can run:

```
mysql --host=itp460.usc.edu --user=student --password=ttrojan
```
