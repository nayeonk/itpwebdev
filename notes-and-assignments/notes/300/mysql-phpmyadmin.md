phpMyAdmin Interface to MySQL
=============================

You can use the phpMyAdmin interface to look at, maintain and create databases and tables in MySQL. For the purposes of this class, you will have permissions to read any database on the server, and to create any tables and fields within "your" database (your database is named the same as your user login). 

### Logging In

Log into the MySQL database server at http://itp300.usc.edu/phpmyadmin 

Your username is the same as the one for the remote server (your email prefix), although it IS a separate account, and your initial password is "ttrojan" (AGAIN this is a separate account from your main itp300 login). 

So the first thing you want to do when you successfully log in is to click on __Change Password__ under __Actions__. Please note you need to use your username and password when you access MySQL from inside php code, so it is important to remember your username and password. For convenience you might want to change the MySQL password to the same as your USC account. 

Ok, now that you have changed your password from ttrojan you are ready to use the interface. Lets go through its major componnents. 

### Walkthrough

First we'll do a walkthrough on creating new tables and fields, and then examine the structure and data we created. 

On the left navigation, click on the name of your database. Notice right away it prompts you to create a table, since none exist. Just to test it out, lets create a table called "colors" with three fields. 

So type "colors" under the name, and 3 for the number of fields (you can always add, edit and delete fields/columns later). 

Now you should be looking at an interface to create the fields. Ugly interface huh? :>

In the first column, title that field color_id, leave its data type as INT (whole number), and then check the "auto increment" option (that is auto number). 

In the second column, name that field "color_name", set its type to VARCHAR, and restrict its character length to 10. 

In the third column, name that field "webcolor", set its type to VARCHAR, and set its length to 7. 

Then click on Save. 

In the middle of page the structural listing for your new table should list out each field in its own row. Go to the color_id row, and click on the KEY icon (that should give a tooltip of "Primary"). Say OK to the pop-up warning. 

Ok, now you've got a table to put data in. At the top of the page, click on Insert and we will put some data in there. 

On the screen, leave the color_id field blank (because we know it will auto assign a value). Type in a color (like "red" and "#ff0000"), then click Go. 

Now click on the Browse button. See how it lists your new data record, along with icon options to delete or edit the row of data. 