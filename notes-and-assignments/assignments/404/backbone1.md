Rotten Tomatoes Search with Backbone
======

In this assignment, you are going to rebuild the Rotten Tomatoes Search assignment using Backbone. The end result from the user's perspective should behave the exact same way. The HTML/CSS and the JSONP call from the previous assignment can still be reused. The main difference is that when the results come back, you are going to create models, collections, and views to render the data.

If you recall the Rotten Tomatoes API data, it looks something like this:

```js
{
	"total": 270,
	"movies": [...]
}
```

When the data comes back, you are going to load that _movies_ property into a collection called _MovieCollection_. This collection will contain a _Movie_ model for each item in that _movies_ array in the json response. You will then create a collection view called _MoviesView_ that will render each movie in a _MovieItemView_.

1. Start by creating a model called _Movie_
2. Create a collection called _MovieCollection_ that uses the _Movie_ model.
3. Create a Backbone View called _MovieItemView_. _MovieItemView_ is responsible for rendering a single movie. It should be backed by a Handlebars template for a single movie.
4. Create a collection view called _MoviesView_ that will be responsible for creating each _MovieItemView_.
5. Lastly, enhance your _Movie_ model so that it sets a property on initialization called _runtimeHours_. This should use the _runtime_ property and create a new property called _runtimeHours_ that computes the runtime into an hourly format. For example, if _runtime_ is 108, _runtimeHours_ should compute to "1 hour 8 minutes". Display _runtimeHours_ in your template for each movie.
