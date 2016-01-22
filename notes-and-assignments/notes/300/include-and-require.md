include and require statements
==============================

Rather than repeating code over and over, it is often much more efficient to store some code -- or even straight html -- in a stand-alone file and "include it".

An html example would be if every page has the same header (page top) and footer. Why not offload that html to files that are "included" in every main page. This is more efficient, and of course makes page creation and site changes MUCH easier.

In terms of re-useable code, perhaps there are some common queries you will use over and over. Perhaps there are certain routines, such as a log-in or security check, that you will be using in multiple places. Why not offload them to stand-alone files and include them in pages where needed.

[PHP include statement documentation](http://php.net/manual/en/function.include.php)

There are variations of the include statement:

* require
* require_once
* include
* include_once

__require__ statements will generate a fatal error if it cannot find the file you are trying to include whereas __include__ statements will emit a warning

Common uses for include files are:

*  Page Header html/graphics
*  Page Footer html/graphics
*  Navigations
*  Repeated tables or blocks of information
*  Repeated queries, variable set ups, etc.

Common uses for require files:

*  Security and Login scripts
*  User defined functions and classes
*  MySQL connection information