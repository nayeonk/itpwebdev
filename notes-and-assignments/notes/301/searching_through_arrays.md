###Searching through arrays:

*	So we have used arrays to store data. And we've learned to create dynamic pages based around that data by either picking one random row of an array and using that information, or creating a condtional loop that parses through ALL data in array/s. The next step would be to set up a loop that SEARCHES through an array for a particular piece of data.
 
*	Ok, so lets imagine a set of parralel arrays that have sports information. The arrays store: sport names, sport object names, point/scoring names, and building names:
	
	```js
	var sportname = new Array         // the name of a sport such as baseball
	var sportarena = new Array         // the name of a location for the sport
	var sportobject = new Array       // the name of the object players manipulate
	var sportpoint = new Array        // what you call a point

	sportname[0] = "football"; 	sportarena[0] = "stadium" ; 	sportobject[0] = "pigskin";	 sportpoint[0] = "touchdown"
	sportname[1] = "basketball";	sportarena[1] = "court" ; 	sportobject[1] = "bball";	 sportpoint[1] = "baskets"
	sportname[2] = "baseball" ; 	sportarena[2] = "field" ; 	sportobject[2] = "stitch";	 sportpoint[2] = "runs"
	sportname[3] = "hockey" ; 	sportarena[3] = "rink" ;	sportobject[3] = "puck";	sportpoint[3] = "goal"
	```
	
	*	A starter page with the above data already entered is here.
	*	So lets image we have a page in which a user types in sport name, and we search to see if that name is contained in the sportname array -- i.e. if we have information for that sport.
	*	We could set up a for loop based around that array, and each time through the loop have an IF statement that checks to see if the word we are looking for is equal to the sportname from that row.
		```js
		var findsport = function(sporttofind){
			for(i=0;i<4;i=i+1){ 
				if(sporttofind.toUpperCase() == sportname[i].toUpperCase()){ 
					alert('The sport ' + sportname[i] + ' is played with a ' + sportobject[i] + ' inside a ' + sportarena[i] + ' and is won by scoring more ' + sportpoint[i] + ' than the other team.')
				}
			}
		}
		```
		
	*	So when the function is called a string is passed in that is the name of the sport that you want to "search for" within the array data. To test this, we would set up a textbox that onChange calls the findsport function and pass to that function the contents of the textbox.
	*	Of course, one problem with this is that if it does NOT find the sport, it does not do anything else. So we might want to set up a variable that we can set to something (like 0), then if a match is found set to 1, then after the loop is done check to see if that variable is still 0 (which means it did not find the sport) or 1 (which meant it did find the sport), and then continue accordingly.
	*	The complete version of the above page is [here](http://webdev.usc.edu/itp301/lecture_examples/sport2.html).
	*	One drawback to this little "search routine" is that it only searches for sport names, as opposed to searching through all of the array fields. You could set up the loops to search through ALL of the arrays, so that it could match hockey OR puck OR goal. Of course, you mgiht also then get multiple hits (for instance soccer and hockey but have "goals". 
 
*	Ok, lets try a similar workflow/application but working with an example from the first week of class. Imagine you have one array that has U.S. social security prefixes (the first three numbers), and a parralel array with corresponding state names. So if you could find a prefix in one array, you could use that row number to find the corresponding state from the other array, and tell the person the state that generated that social security number!
	*	A starter file with the social/state data already entered is [here](http://webdev.usc.edu/itp301/lecture_examples/ssn_start.html). The starter page has the functionality of calling a function that brings up an alert with what the user typed into the box.
	*	To make this page work you need to:
		1.	Figure out how the states correspond to the SSNs. If you know that 552 is within California, that should let you figure out the relationship.
		1.	Rather than exact matches, you are going to need to set up equal or greater routines.
		1.	Since the user might type in a full SSN, you should use substring to first just take the first three characters from what they types in, and then of course convert that to a number since the ssn data is numeric (and we are matching with math evaluations).
		1.	Set up a temporary variable, set to 0, so you can track if you found the correct position.
		1.	Set up a loop based around the number of ssn records, then each time through the loop see if the number you are searching for is less than the one in the current position. If so do the appropriate adjustment and tell the user you found their value.
		1.	But wait. Once it finds the correct number, it CONTINUES to match because all higher numbers continue to be greater than the one you are searching for! So you need to "stop" the loop once you find a match! You do this using the "break" command.

 
*	break
	*	The "break" command "stops" a loop. It is mainly used when searching through a loop for data so that once you find the information it does not continue searching.
	*	If you WANTED to be able to have multiple matches (find more than one match), then you would NOT use the break command.

 
#### Custom building content into a container (div)

Ok so now we've twice built small projects that search for and return data. But the output has been to alerts or document.write into the middle of a page.

But how about creating a "search" interface into an existing page? For that we cannot use document.write because it would EMPTY the document (clear the current page) and start building a new one. Reminder: if you use document.write AFTER a page has loaded it wipes out/clears the current page and writes to a new (blank) document.

OK so we are going to build a new project that searches through Photo Descriptions (from arrays). Load [updogsearch_start.html](http://webdev.usc.edu/itp301/lecture_examples/dogsearch_start.html). Open the page. Notice there is a blank area where the dog photos should display. Now look at the code. Notice there is a div IDed as "contentbox". The idea is to output the dog photos INSIDE that div. Press the "Search" button. Notice all of the dog images appear on the page (inside the "contentbox" div).

So the existing functionality is what you have done before -- a loop that outputs ALL dog photos. In the example below it "builds up" all of the html (the img tags) into a variable, then outputs it all at once at the end (this makes it easier to debug, btw, since you can bring up an alert to look throught he final HTML output).The twist is that instead of outputting the img tags (for the images) through dociment.write, it writes those img tags to the innerHTML property of the div (its content):

```js
var wpath = "http://webdev.usc.edu/itp301/dogs/"

newhtml = ""

for (i=0; i<imgname.length; i=i+1)
	{
	newhtml = newhtml + "<img src='" + wpath + imgname<i> + "'/> "
	}
// alert (newhtml);	
document.getElementById('contentbox').innerHTML = newhtml
```

When you press the Search button on the page it runs a function with the above code and ouputs ALL of the photos.

Take a closer look at the function it calls. See how it actually passes the search phrase to the function (evne though it is not using it)?

Ok, so what we need to do:
*	Inside the current for loop, create an if statment and wrap it around the current the line that "adds" to the newhtml variable.
*	Set the condition of the if statment to be if the searchphrase is located inside the imgdescr for that row. Something like:
	```js
	imgdescr.indexOf(searchphrase) > -1
	```
	
*	Now it will only "run" that line (adds that row's image) if it found a corresponding search term in that image's description.

You can see the final version of the code in [dogsearch_end.html](http://webdev.usc.edu/itp301/lecture_examples/dogsearch_end.html)

 