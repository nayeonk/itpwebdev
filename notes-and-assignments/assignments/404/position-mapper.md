Position Locator
================

In order for you to use the Geolocation API, your page will need to be served from a local development server. For this assignment, you can do any of the following:

1. Use PHP's built in server (if you have PHP 5.4 installed). From the terminal, cd into your assignment directory and run: __php -S localhost:8000__. Visit your page at localhost:8000. __(recommended)__
2. Use Python's built in server. From the terminal, cd into your assignment directory and run: __python -m SimpleHTTPServer 8000__. Visit your page at localhost:8000. __(recommended)__
1. Use PHPStorm. When you click the browser icon, it will open that page using a local server.
2. Develop using [JS Bin](http://jsbin.com) and submit a JS Bin link
5. Install a web server like XAMPP, MAMP, WAMP.


### 1. Load a Google Map

To start, create a page with a Google Map loaded onto it.

### 2. Geolocation API

Through the Geolocation API, fetch the current latitude and longitude and plot a map marker on the Google map for the current location. To get you to explore the API documentation a bit, use _a custom image_ for the map marker. 

### 3. Reverse Geocoding

Lastly, using the google.maps.Geocoder() constructor, reverse geocode the current location to find the address. The result of the reverse geocoding will contain several different objects that match the current coordinate location. Just pick the first object in the result set. Make your map marker clickable so that an InfoWindow opens with the address.