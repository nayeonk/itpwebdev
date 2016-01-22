RESTful Web Services part 2
===========================

### Overview

* PHP REST and web services review
* Twitter REST API overview
* What is OAuth?
* Caching API calls

### REST Overview & PHP

* REST makes use of simple URL's to identify the things we want to operate on.
* Each URL identifies a __resource__
* Resources are thought of as __nouns__
* REST makes use of the request type or HTTP verb to dictate how a request should be handled
* We can use file_get_contents() or cURL library in PHP to get the contents of a URL

### Twitter REST API Documentation

* [Twitter API REST Documentation](https://dev.twitter.com/docs/api/1.1)

### Authenticated APIs

"Twitter offers applications the ability to issue authenticated requests on behalf of the application itself (as opposed to on behalf of a specific user). Twitter's implementation is based on the Client Credentials Grant flow of the OAuth 2 specification." - [Twitter API Documentation on Authentication](https://dev.twitter.com/docs/auth/application-only-auth)

"__OAuth__ is an open standard for authorization. OAuth provides a method for clients to access server resources on behalf of a resource owner (such as a different client or an end-user). It also provides a process for end-users to authorize third-party access to their server resources without sharing their credentials (typically, a username and password pair), using user-agent redirections." - [Wikipedia page on OAuth](http://en.wikipedia.org/wiki/OAuth)

https://dev.twitter.com/docs/auth/application-only-auth

### Twitter Library

* [Twitter API PHP Library](https://github.com/skaterdav85/twitter-library/)
* This library only covers application application-only authentication


### Caching API calls

* Some API calls take a long time. Take the Twitter API as an example. If we just want to get tweets for a particular username, we need to make a request to get a bearer access token. Once we have the token, we can make requests to another endpoint to fetch the tweets. This is 2 requests. This will make your page load very slow.
* Additionally, some API's have __rate limiting__, which basically means you can only make a certain number of requests to their API in a given amount of time.
* If you have high volumes of traffic, you can easily surpass the rate limit.
* Simply put, a cache is a place where we can put data for quick access later. We can use caching to save a trip to the Twitter API.
* There are different types of caches:
	* Files
	* Database
	* Redis
	* Memcached

### File cache example:

* To use the following caching functions, create a storage folder in the same directory as PHP script that is making the API request

#### Storing in a file cache

```php

/**
 * Store the content as JSON in a file along with the updated_at and expires timestamps
 * @param  string $key     cachekey
 * @param  string $data    string data you want to cache
 * @param  int $minutes    number of minutes you want to cache for
 * @return string        	 data you cached
 */
function cache_put($key, $data, $minutes) {
	$file = "./storage/$key.txt";
	$now = time();

	$contents = array(
		'updated_at' => $now,
		'expires' => $now + ($minutes * 60),
		'data' => $data
	);

	$content_json = json_encode($contents);
	file_put_contents($file, $content_json);

	return $data;
}

```

#### Retrieving from a file cache

```php

/**
 * what cached data do you want to get
 * @param  string $key a unique identifier
 * @return mixed       the content you are fetching or false if it doesnt exist/expired
 */
function cache_get($key) {
	$file = "./storage/$key.txt";
	$now = time();

	if (file_exists($file)) {
		$contents = json_decode(file_get_contents($file));

		$expires = $contents->expires;
		$updated_at = $contents->updated_at;

		if ($expires > $now) {
			return $contents->data;
		}
	}

	return false;
}

```