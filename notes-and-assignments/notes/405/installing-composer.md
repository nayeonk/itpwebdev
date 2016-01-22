Installing Composer
===================

Documentation: https://getcomposer.org/download/

### Mac

Run this in your terminal to get the latest Composer version:

```
curl -sS https://getcomposer.org/installer | php
```

This will download a file composer.phar in your current directory. This is a PHP Archive (like a JAR file if you've worked with Java). You can run this by typing:

```
php composer.phar
```

And that will list out a bunch of different composer commands.

Or you can move it to somewhere in your PATH such as /usr/local/bin:

```
mv composer.phar /usr/local/bin/composer
```

and then type:

```
composer
```

### Windows

Download the [Zip file for PHP 5.5](http://windows.php.net/download/) (either the VC11 x86 Thread Safe or VC11 x64 Thread Safe builds). Extract the zip to a permanent location such as the root C:\ folder.

Then download [the Windows installer for Composer](https://getcomposer.org/doc/00-intro.md#using-the-installer). During the installation process, when prompted for the location of php.exe, point it to the php.exe that is inside the folder you extracted from the PHP Zip file.

After installation completes, navigate to the PHP folder and rename `php.ini-production` to `php.ini`. Then open up the file in a text editor.

Find the line that contains `extension=php_openssl.dll` and uncomment it by removing the semicolon at the beginning of the line. This allows Composer to make https requests when retrieving dependencies for a project.

Then find the line that contains `extension=php_pdo_mysql.dll` and also uncomment it by removing the beginning semicolon. This enables the PDO driver for MySQL.

Then find `extension_dir=` and set the value to the location of the ext folder inside your PHP folder. For example, use the following if the PHP folder is located at the root C:\ drive:

```
extension_dir = "C:\php\ext"
```

Then, open the command prompt and type:

```
composer
```