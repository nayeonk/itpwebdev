Position Locator
================

In order for you to use the Geolocation API, your page will need to be served from a local development server. For this assignment, you can do any of the following:

1. Use PHPStorm. When you click the browser icon, it will open that page using a local server.
2. Develop using [JS Bin](http://jsbin.com) and submit a JS Bin link
3. Develop off of the aludra server. Dreamweaver has an easy way to work off of a remote server using FTP
4. Develop using JSBin and then copy out your code into a separate file and upload that to aludra. If you do this option, verify that your code still works on aludra.
5. Install a web server like XAMPP, MAMP, WAMP. Note that we will do this in a few weeks too.
6. Use PHP's built in server (if you have PHP 5.4 installed). From the terminal, cd into your assignment directory and run: __php -S localhost:3000__. Visit your page at localhost:3000

### 1. Load a Google Map

To start, I want you to create a page with a Google Map loaded onto it.

### 2. Geolocation API

Through the Geolocation API, I want you to fetch the current latitude and longitude and plot a map marker on the Google map for the current location.

To get you to explore the API documentation a bit, I would also like you to use _a custom image_ for the map marker. 

### 3. Reverse Geocoding

Lastly, using the google.maps.Geocoder() constructor, reverse geocode the current location to find the address. The result of the reverse geocoding will contain several different objects that match the current coordinate location. Just pick the first object in the result set. Make your map marker clickable so that an InfoWindow opens with the address.