jQuery data page
====================================
Create a page that loads one records from a dataset, and use jQ to let the user move between records.

### Create a data-driven jQuery page to save your favorite books/movies/sports/etc
1.	First, think up a dataset that has at least 5 fields. This could be contact data (name, email, phone, age, favcolor, photo), movie data (title, director, year released, genre, summary, movieposter), a sports team (team, playername, playerpositionm playerstats, playerphoto), etc. __NOTE: There needs to be one IMAGE field no matter what dataset you use. __
2.	Then create JS arrays and store the extended data into parallel (or associative) arrays. 
3.	Now, create a web page to display one record of that data. So for a contact page it could be a profile of the person, for a movie it would display one film at a time, etc. Use div's with unique IDs so that you can access and re-write data. You will also want to have all of the record data contained by one div (so that you can easily hide and reveal all of the data at once). 

Now set up Next and Previous buttons at the bottom of your page. 

When your UI is done the idea is that the page explains the data, shows them one "record", and then give them arrows/buttons to move between the different entries. 


#### The jQuery: 

Ok so now you have JS in your page that has all of the data stored in arrays. When the page first loads it can go ahead and display the first record (row 0 in your arrays) in the page. You can hand-code the html (do not have to use document.write or whatnot) to display the initial data. Also set up a global variable (such as "currentrecord") and set it to 0. 

Now, use jQ to bind to the next and previous buttons against a click event. Each time it is clicked your jQ code should:
1.	Increment or decrement your record variable. If the variable goes below 0 it should be reset to the highest row number.
1.	Hide the div that contains all of the data. You can use any of a number of jQ events to hide it (including plain old hide).
1.	Edit the data, replacing the current record data in each field with the new data. USE the HTML method of JS to do this (similar to the innerHTML function in JS).
1.	Animate the div that contains all of the data so that the new record re-appears. You could use a slideIn or any of the ANIMATED effects.

Finally, at the bottom of your page set up a form with text boxes that correspond with each of your data records, and a button that says "Add new record". 

Use jQ to bind to the button a function that takes the data from each of the text fields and adds that data to the correpsonding array. __Note: It is ok to use the Javascript push() method inside your jQ function (see bottom for overview of push). __


#### Overall requirements:
*	Create arrays to store data -- each "record" must have a minimum of five fields AND one of the fields must be an imagepath.
*	Display the first record on the page along with Next and Previous buttons.
*	Use jQ to script the arrows so that they move between records, loading another row of data into the page and animating the appearance.
*	Create an "add record" section at the bottom of the page. Use jQ (and Javascript as well if you like) to add new records to the corresponding arrays... allowing the user to add more records to your page.

#### Note: Short primer on JS push() method:

The "manual" way to populate arrays is through direct setting of rows:  
```js
var colors = New Array;
colors[0]='green'; colors[1]='red'; colors[2]='teal';
```

But you can also add a new row to an array with a rush command. Example:  
```js 
var colors = New Array;
colors.push('green'); colors.push('red'); colors.push('teal');
```

In both of the above code blocks the array is created and green is in row 0, red in row 1, and teal in row 2. And in either method you still retrieve data from the array through row numbers (colors[1] or colors[i]).

push() can often make it easier to add lots of data. But ALSO, such as in your assignment, push makes it easy to ADD additional rows to an existing array without necessarily having to parse out what the top row is and manually set the row numbers for new entries.