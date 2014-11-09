Angular.js
==========

### Part 1 - Gradebook Statistics

From the demo we did in class, add 2 more statistics to the summary table: the lowest and highest scores. You will need to add method(s) to the _gradeStats_ service to figure out the lowest and highest scores, and bind these values to your view through the controller.

### Part 2 - Rotten Tomatoes API Search

Create a new angular application that allows you to search the rotten tomatoes API and displays the results on the page. Start by creating a form at the top of the page with an input and a submit button. When the form is submitted, you will make a JSONP request using angular's $http service to fetch results from the Rotten Tomatoes API and bind those results to the view.

Also, be sure to do the following:

* Create a module called 'movies'
* Create a controller called MoviesController
* Use the $http service, namely the [jsonp()](https://docs.angularjs.org/api/ng/service/$http#jsonp) method, to make a JSONP call to the rotten tomatoes API to fetch results for a search term

When you are finished, post links to both pages on your classpage.