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
mv composer.phar /usr/local/bin/composer.phar
```

and then type:

```
composer
```

### Windows