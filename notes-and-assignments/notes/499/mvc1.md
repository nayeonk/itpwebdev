MVC and Laravel
===============

### Overview

* Installation w/ new Vagrantfile
* MVC theory (slides)
* Routes
* Views
* Database access
	* [Query Builder](http://laravel.com/docs/queries)
	* Models
* Controllers

Laravel Documentation: http://laravel.com/docs

### Installation

Once you have composer installed, run the following command:

```
composer create-project laravel/laravel 499-laravel
```

This will create a folder called 499-laravel containing your framework installation.

Next, download the following vagrant file and associated shell script. 

* [Vagrantfile](https://raw2.github.com/skaterdav85/Vagrant-Setup/master/Vagrantfile)
* [install.sh](https://raw2.github.com/skaterdav85/Vagrant-Setup/master/install.sh)

When you download the Vagrantfile, it might download as a txt file. Save it as just Vagrantfile. You can use the command:

```
mv Vagrantfile.txt Vagrantfile
```

Finally, run vagrant up and browse to: http://localhost:8080/