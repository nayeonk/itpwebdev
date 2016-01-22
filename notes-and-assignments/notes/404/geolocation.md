Geolocation API
===============

### Overview

* navigator object
* feature detection
* getCurrentPosition()
* position object
* watchPosition()

Several sources are used to determine the user's location. They are a combination of Wifi, IP geolocation, and/or GPS on your mobile device.

### Browser Compatibility

Currently the W3C Geolocation API is supported by the following desktop browsers:

* Firefox 3.5+
* Chrome 5.0+
* Safari 5.0+
* Opera 10.60+
* Internet Explorer 9.0+


### Getting the user's current position

```js
if (navigator.geolocation) { //Feature detection
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

### Watching the user's position

```js
if (navigator.geolocation) { //Feature detection
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

### References

* [MDN navigator.geolocation _(reference)_](https://developer.mozilla.org/en-US/docs/Using_geolocation)
