Rotten Tomatoes API
===================

For this assignment, you will display Rotten Tomato data on the DVD Details Page and cache it for subsequent requests for 60 minutes.

### Displaying Rotten Tomato data on the DVD Details Page

Head over to the [Rotten Tomatoes API site](http://developer.rottentomatoes.com/) and register for an account. You will get an API key to be used in API requests. Here is an example call for the move Die Hard:

```
http://api.rottentomatoes.com/api/public/v1.0/movies.json?page=1&apikey=YOUR-API-KEY-HERE&q=die+hard
```

Replace __YOUR-API-KEY-HERE__ with your own API key.

On the dvd details page, display the following data:

* Ratings
	* Critic Score (ratings.critics_score)
	* Audience Score (ratings.audience_score)
* One of the images in the the posters property
* Runtime (runtime property)
* Abridged Cast (abridged_cast property)

When you make the API call, you are going to get back an array of movies that match the search. For example, in the example call above, I get back 18 results and Die Hard is the 2nd result in the list. It is up to you to find the correct movie in the array. If there are no matches, don't attempt to display anything on the page from Rotten Tomatoes.

### Caching Rotten Tomato Calls

If a successful match is found, cache that dvd title for 60 minutes using [Laravel's Cache class](http://laravel.com/docs/5.0/cache). On subsequent requests for the same dvd search, return the data from the cache instead of making another API call.

### Refactor

However you got the above working, now refactor your code so that the Rotten Tomatoes API call and the caching lives in the class `App\Services\RottenTomatoes`. Create a method called `search($dvd_title)`. Now, your controller can simply consume this class instead of dealing with the API call and caching directly and this service can be reused in other parts of your application if need be.

### Styling

This page does have a lot of content on it so be sure to style it a little to make it presentable and easy to use.

### Submission

To submit, push this code up to the same repository as last week named __itp405-spring2015-mvc__.