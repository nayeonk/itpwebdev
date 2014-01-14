Virtual Development Environments
================================

### Virtual Machines for Development

* Create virtual machines dedicated for PHP development, Ruby development, Python development, etc, so your computer does not become this massive bucket for all types of code
* Create an isolated development environment that matches a production environment (i.e. a LAMP stack for PHP)
* Get team members up and running on a project quickly with the same exact environment regardless of what machine / OS version they are using

### Why don't all devs use Virtualization?

* Setting up a VM for development can be difficult
* Often times, devs just stuck with using tools like MAMP, WAMP, or XAMPP since they are really easy to use

### Setting up a Virtual Machine

* We are going to be using [Virtual Box](https://www.virtualbox.org/) as our Virtual Machine host (software that allows us to run VM's on our host operating system)
* Vagrant supports Virtual Box out of the box
* In Virtual Box, we will set up a Virtual Machine (VM) that runs Ubuntu (a flavor of Linux)

### So what is Vagrant?

* Vagrant is a useful command line tool to quickly set up and customize that Virtual Machine in Virtual Box
* Projects that use Vagrant will have a _Vagrantfile_ placed in them, and possibly some shell scripts
* I have already set up the Vagrant file and bootstrap shell scripts that will set up your VM for this class
* Once you have Virtual Box and Vagrant installed, run _vagrant up_. See the lab on getting set up for more details.

### More on Vagrant

If you'd like a deeper introduction to Automated development environments, watch this video:

http://www.youtube.com/watch?v=Im4wNqlolqQ