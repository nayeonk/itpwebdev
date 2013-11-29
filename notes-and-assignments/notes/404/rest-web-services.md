RESTful Web Services in PHP
===========================

We can communicate with API's and fetch data from the server side using PHP. In PHP, we have 2 options.

### 1. file_get_contents()

* We can use the function [file_get_contents()](http://php.net/manual/en/function.file-get-contents.php) to __GET__ the contents of files. 
* These files can be on the same server as the script that makes the call or the file can be on a remote server, like if we were making a call to an API.

```php
$url = 'https://graph.facebook.com/cocacola';
$contents = file_get_contents($url); // this variable now contains the string of JSON
```

### 2. cURL library

Another approach is to use the [cURL library](http://php.net/manual/en/book.curl.php).

```php
$url = 'https://graph.facebook.com/cocacola';
$session = curl_init($url);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($session);
curl_close($session);
```

* Although the cURL library approach requires more lines, it provides many options for making requests.
* Sometimes file_get_contents() is disabled on a server for security reasons in which you can use cURL instead

### Instagram API

1. Create an Instagram account
2. Visit the [Instagram API home page](http://instagram.com/developer/)
3. [Register a new client (application) with the API](http://instagram.com/developer/clients/manage/). Take note of your client ID and client secret. Dont share these with anyone.
4. Click on the "Endpoints" tab to see the various API endpoints

Base API endpoint: __https://api.instagram.com__

Here are a few full API endpoints that I have found more interesting, but check out the API docs for more.

### Tag Endpoints

__Get all instagrams for the hash tag #catsofinstagram__
* GET /tags/catsofinstagram/media
* https://api.instagram.com/v1/tags/catsofinstagram/media/recent?client_id=???

__Search for tags on Instagram similar to #catsofinstagram__
* GET /tags/search (not entirely following the noun-only convention but not API is perfect)
* https://api.instagram.com/v1/tags/search?q=catsofinstagram&client_id=???


### Media Endpoints

__Search for media in a given area.__
https://api.instagram.com/v1/media/search?lat=34.079962&lng=-118.243318&client_id=???

#### Authentication

As per the [API documentation](http://instagram.com/developer/authentication/):

"For the most part, Instagram’s API only requires the use of a client_id. A client_id simply associates your server, script, or program with a specific application. However, some requests require authentication - specifically requests made on behalf of a user. Authenticated requests require an access_token. These tokens are unique to a user and should be stored securely. Access tokens may expire at any time in the future."

Thus, when viewing the API docs, you might see some example endpoints that pass an access token. Often times you can replace the access_token query string parameter with a client_id parameter, as I have done in the examples above.


