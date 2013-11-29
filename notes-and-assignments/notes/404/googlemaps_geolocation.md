#Overview
* constructor function review
* Google Maps API
* Geolocation
	* navigator object
	* feature detection
	* getCurrentPosition()
	* position object
	* watchPosition()
* Assignment


##Google Maps API (V3)

* [Getting started documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
* an API key is recommended but not required. It allows you to track your Map application's usage


A list of common google.maps constructor functions:

* [google.maps.Map()](https://developers.google.com/maps/documentation/javascript/reference#Map)
* [google.maps.Marker()](https://developers.google.com/maps/documentation/javascript/reference#Marker)
* [google.maps.LatLng()](https://developers.google.com/maps/documentation/javascript/reference#LatLng)
* [google.maps.InfoWindow(obj)](https://developers.google.com/maps/documentation/javascript/reference#InfoWindow)
	* obj.content will be the content inside the info window 
* [google.maps.Geocoder()](https://developers.google.com/maps/documentation/javascript/reference#Geocoder)
	* geocode(obj, cb fn)
		* obj.address can be an address
		* returns a an object w the lat/lng 

Map object methods:
* [google.maps.event.addListener(map, 'click', fn(event))](https://developers.google.com/maps/documentation/javascript/reference#MapsEventListener)

##Geolocation

Several sources are used to determine the user's location. They are a combination of Wifi, IP geolocation, and/or GPS on your mobile device.

###Browser Compatibility

Currently the W3C Geolocation API is supported by the following desktop browsers:

* Firefox 3.5+
* Chrome 5.0+
* Safari 5.0+
* Opera 10.60+
* Internet Explorer 9.0+


###Getting the user's current position

```js
	if(navigator.geolocation) { //Feature detection
    	// Geolocation supported. Do something here.
    	
    	var success_handler = function(position) {};
    	var error_handler = function(err) {};
    	var options = {};
    	
    	navigator.geolocation.getCurrentPosition(success_handler, error_handler, options);
	}
```

A position object is passed to the success callback function. Here is a list of useful properties it contains:

* coords.latitude			The latitude
* coords.longitude			The longitude
* coords.accuracy			The accuracy of position
* coords.altitude			The altitude in meters above the mean sea level
* coords.altitudeAccuracy	The altitude accuracy of position
* coords.heading			The heading as degrees clockwise from North
* coords.speed				The speed in meters per second
* timestamp					The date/time of the response

###Watching the user's position

```js
	if(navigator.geolocation) { //Feature detection
    	// Geolocation supported. Do something here.
    	
    	var success_handler = function(position) {};
    	var error_handler = function(err) {};
    	var options = {};
    	
    	navigator.geolocation.watchPosition(success_handler, error_handler, options);
	}
```

The watchPosition() method also receives the same position object as getCurrentPosition(). The watchPosition() method also returns an identifier that can be used to clear the watch using the method clearWatch(). This is similar to how the JS function setInterval() returns an identifier that can be used to clear the the interval using clearInterval().

The _options_ object is optional in both methods. Here is a list of properties you can pass as options:

* __enableHighAccuracy__: provides a hint to the request that it wants the best possible result. The drawback is that it could be slower and use more power consumption which isn't always ideal on a mobile device
* __timeout__: the maximum length of time to wait for a response in milliseconds
* __maximumAge__: the maximum age of a __cached__ position that the page will be willing to accept. In milliseconds with a default value of 0, which means it wont pull a position object from cache.

##Reading
* [Finding your position with Geolocation - HTML5 Doctor](http://html5doctor.com/finding-your-position-with-geolocation/)
* [MDN navigator.geolocation _(reference)_](https://developer.mozilla.org/en-US/docs/Using_geolocation)
* [Meta viewport tag _(optional)_](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-dont-forget-the-viewport-meta-tag/)
