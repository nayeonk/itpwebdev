### 1. Integrated Development Environment (IDE)

You are welcome to use whatever IDE / editor you like. In this class I will be using PHPStorm. You can download it from the website and I can send you an academic license.

http://www.jetbrains.com/phpstorm/

### 2. Tools

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

### 3. LAMP stack setup

You have a few options here in recommended order.

#### Option 1. Vagrant / VirtualBox

__Non-framework setup:__ https://github.com/skaterdav85/vagrant-php-env

__Laravel setup:__ https://github.com/skaterdav85/vagrant-laravel-env

Windows users, you will likely need to delete the 4 lines for config.vm.synced_folder in Vagrantfile. See Vaprobash for details why.

#### Option 2. PHP on your local machine

If you install PHP >= 5.4, php offers a built in web server that you can use by running the following command in your project directory (with whatever port you want):

```
php -S localhost:4000
```

__Mac__

Open up Terminal and run php -v. If you want to upgrade to 5.5 and include other extensions that you will probably need with Laravel, visit http://php-osx.liip.ch/ for instructions.

__Windows__

Download the latest PHP executable http://windows.php.net/download/ and see documentation.

#### Option 3

The following are 1-click installs to have php, apache, and mysql installed locally on your machine.

MAMP (mac), XAMPP (windows and mac), WAMP (windows).

### 3. MySQL Database

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
