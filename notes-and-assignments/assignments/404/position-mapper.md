Current Position Mapper with Google Maps and Geolocation
=====================

To start, I want you to create a page with a Google Map loaded onto it. 

### 1. Geolocation Feature Detection

Using feature detection, detect if the geolocation feature is supported in your browser. If the geolocation property is not available, I would like a message in a paragraph tag displayed at the top of the page that says "Geolocation is not suppored in this browser". 

The page should NOT break if geolocation is not supported, meaning I shouldn't see any errors in the console. Instead, I should just see the message stated previously.

_In order for you to use the Geolocation API, your page will need to be served from a local development server. For this assignment, you can do any of the following:_

* Develop using [JS Bin](http://jsbin.com) and submit a JS Bin link
* Develop off of the aludra server. Dreamweaver has an easy way to work off of a remote server using FTP
* Develop using JSBin and then copy out your code into a separate file and upload that to aludra. If you do this option, verify that your code still works.
* Install a web server like XAMPP, MAMP, WAMP. Note that we will do this in a few weeks too.

### 2. Geolocation API

Through the Geolocation API, I want you to fetch the current latitude and longitude and plot a map marker on the Google map for the current location.

To get you to explore the API documentation a bit, I would also like you to use _a custom image_ for the map marker. 

### 3. Reverse Geocoding

Lastly, using the google.maps.Geocoder() constructor, reverse geocode the current location to find the address. The result of the the reverse geocoding will contain several different objects that match the current coordinate location. Just pick the first object in the result set. Create a map marker and info window that contains the address. When the user clicks on the map marker, the InfoWindow should open and I can see the address.

### Submission

When you are finished, upload your assignment to your classpage for grading.