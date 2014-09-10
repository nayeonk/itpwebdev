Rotten Tomatoes Search
======================

Create a JavaScript application that allows a user to search for a movie from the Rotten Tomatoes JSONP API.

```
http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=test&page_limit=40&page=1&apikey=YOUR-KEY-HERE&callback=renderMovies
```

### 1. The Form

Create a form where the user can type in a movie into a text input. Listen for the submit event on the form.

### 2. Results

* Display the results on the page using the Handlebars client-side templating library
* At minimum you should have a template for each movie and display the following properties:
	* poster image
	* title
	* audience rating
	* audience score
	* the name of each actor/actress in the abridged_cast within an unordered list
		* hint: look at Handlebars "each" helper
	* synopsis (if there isnt one, display the text "Synopsis unavailable.")
		* hint: look at Handlebars if/else helpers
* Display a loading indicator while the jsonp request is being made

### App organization

Try breaking up your code into objects with related responsiblities. Here is one way you could do it:

* movieList object
	* template (that contains an individual, compiled Handlebars movie template) 
	* setLoading()
	* render() 
* rottenTomatoes
	* search(term) - responsible for making the jsonp request
	
There are many ways you could break up your code into related objects. At minimum, create 1 custom object with at least 1 method and 1 property.


Post a link of the assignment to your classpage for submission.
