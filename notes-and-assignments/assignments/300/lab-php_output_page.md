php output page
===============

For this lab you are going to create a page that displays info from a submitted form, as well as some miscellaneous information about the user.

First save the form page [searchform.html](http://itpwebdev.usc.edu/notes-examples/300/searchform.html). Save it to your wwwroot folder in your vlab space.

Create a new page in your wwwroot. You can name it something like **forminfo.php** but make sure you name your new file with a php extension.

Edit the form you saved about so that the action attribute of the form tag submits to the name of the new file you created (such as forminfo.php).

Now when you "submit" the form it should bring up/go to the new page you created.

In the new page (that the form submits to), use php to fulfill the following requirements:  

1. Define a variable named $fullname and set it to your name.  
2. Define a variable named $email and set it to your email address.  
3. Use the echo command and the variables above so that the top of the page says:  

``` 
  This page was written by <NAME> (<EMAIL>).   
  This page will summarize info from a submitted film search page.
``` 

4. Use the php date function (reference and lists of masks at http://www.w3schools.com/PHP/func_date_date.asp ) to display the following dynamically (with the live data/time):

```
  It is Wednesday, February 5, 2003 at 12:45 PM
``` 

(NOTE: It is fine if the hour of the time is off by 7 hours or whatnot. By default servers will often use GMT time instead of PST.). BUT, if you want to fix it, try doing something like date("g:i",mktime()-(7*60*60))  

5. Use the appropriate $_SERVER variables to dynamically display the following lines and info (one $_SERVER variable per line):

```
  You are using Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.0.3705).
  You submitted this form from the page searchform.html
```

6. Summarize their form choices such as the sample below:

```
  You searched for title Die Hard
  You searched for genre 2 (ID of the genre)
  You searched for rating R/ (don't worry about the slash)
  You searched for Award: Yes
```

_Note1: The genre values are actually the IDs._

_Note2: The ratings erroneously include slashes in their data. That is fine._

_Note3: If you do not check the checkbox in the form it is OK if your php page throws an error related to that field._

***When done make sure you link both the final php page AND the html form (so we can load and submit your form to your php page.***

 
