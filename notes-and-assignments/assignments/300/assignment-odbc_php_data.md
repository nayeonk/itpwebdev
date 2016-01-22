__FIRST OFF__, make sure that __all of the files for this assignment are stored in their own directory__ in your wwwroot space (a sub-folder), for instance in a directory named "phpaccessselect". Some of these pages you may revisit to create second-generation versions of the files for future assignments, and the versions from this assignment should stay SEPARATE from the ones for next week and beyond.

The dvd database has an ODBC name of "dvd" and contains a view named "dvd_view". The contents of the view is below: 

![DVD DB relationship chat](/images/dvd_view_content.gif)


For this first "full" php+database assignment, you will set up a search form. That page will submit to a second (php) page that you create, which is where most of your work will be. In the "results" php page you will:
* Connect to a database (and store the connection in a variable)
* Write a SELECT statement, submit the select statements to the database and store the results in a variable
* Take the database results, stored in a variable above, and display those results on a Web page using HTML to "format" the data (i.e. not just a plain text dump).
 

#### You will do this against two different databases -- the DVD and your personal class/schedule one. 

The DVD database has an odbc name of "dvd". Your own schedule database should be hooked up under the name NAME\_schedule.... so for instance mine would be "dent\_schedule". To test if odbc datasource names exist you can go to the following URL: http://itp300.usc.edu/dent/testodbc.php _(Note: If you did not post your schedule/class database, then the datasource under your name should still exist but it is not pointed to a database.)_

====


### Part I: DVD Pages 

Create a form/criteria page called "dvd\_criteria.php" that has a series of drop-down menus that lets someone specify the following criteria: genre, company (label), rating, sound and format. You can hand-create the values for the data (i.e. you can hand-create the option entries for the genres). __On the longer select menus (like genre) you can just create 5-10 options/entries.__


The form page should submit to a second page (that you created) named "dvd_titles.php".  


__Note: You can use the search \+ results pages from lecture as starter pages.__


The "results" page (dvd_titles.cfm) has the following requirements:
* The main SELELCT statement for the page must be dynamic such that it has WHERE clauses uses each of the crieria from the form ($_REQUEST["genre"], etc.).
* The results of the query must be formatted in columns that list each of the values in the query, and uses colors to offset each column of data. You can set up custom divs (with fixed widths) for the columns, or if you know the older html table tags can use them.
  __NOTE: You can see the search-results example at the bottom of this week's lecture for a sample of setting up divs (with css classes) for separate and color-coded output.__
* Include column labels in your page (title, genre, etc.)
* Before the query output, include a line that lists how many records (titles) were returned AND that reminds the person what criteria they selected. If you are stuck on this part save it for last.

====

### Part II: Class schedule 

First off, you need to have your class database defined as a datasource. Everyone should have a datasource created under name\_schedule such as dent\_schedule. (See the assigned lab this week.) 

Create a page called "schedule\_criteria.php" that allows one to select a particular class (ITP300, ITP104 etc.) or meeting type (lecture, lab, etc.). So that form would have two drop-down/select form objects... one that lists all classes and one that list the different lecture/lab options. ***(If you get stuck on this part just have the one class listing drop-down.)*** This form should submit to "schedule\_results.php". 

Your result page (schedule_results.php) will feature a dynamic SELECT statement that you submit to the database, following the same general workflow as you did in the DVD section of this assignment in Part I. There will be a dynamic WHERE clause that will check for class type or class criteria. That SELECT statement should ORDER the results by the meeting date and then the meeting time. 

The content of your "results" page should have na output of the class meetings that meet your criteria. The results should contain ALL of the data in your table (values but not ID keys). Also, you need to list THREE different values (in different table cells) for the date and time: DAY of the week (like Monday), DATE (in Jan 2, 2001 format) and TIME (in 3:33 PM format). 
 
