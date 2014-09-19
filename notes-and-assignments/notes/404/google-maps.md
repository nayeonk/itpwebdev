Google Maps API
===============

### Overview

* functions as constructors review
* Loading a map: 
	* google.maps.Map()
	* map.setCenter()
* Plotting a point:
	* google.maps.LatLng()
	* google.maps.Marker()
* Event listeners
	* click on marker
* google.maps.InfoWindow()
	* opening an InfoWindow
* google maps geocoding w/ jQuery
	* google.maps.Geocoder()


### Google Maps API (V3)

* [Getting started documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
* You will need to create an API key


A list of common _google.maps_ constructor functions:


### google.maps.Map()

https://developers.google.com/maps/documentation/javascript/reference#Map

```js
var element = document.getElementById('map-canvas');
var map = new google.maps.Map(element, {
	center: { lat: -34.397, lng: 150.644 },
	zoom: 12
});
```

### google.maps.LatLng()

https://developers.google.com/maps/documentation/javascript/reference#LatLng

```js
var latlng = new google.maps.LatLng(-34.397, 150.644);
```

### google.maps.Marker()

https://developers.google.com/maps/documentation/javascript/reference#Marker

```js
var marker = new google.maps.Marker({
	map: map,
	position: new google.maps.LatLng(-34.397, 150.644),
	animation: google.maps.Animation.DROP,
});
```

### google.maps.InfoWindow(obj)

https://developers.google.com/maps/documentation/javascript/reference#InfoWindow

```js
var infowindow = new google.maps.InfoWindow({
	content: '<strong>Meow</strong>',
	position: new google.maps.LatLng(-34.397, 150.644)
});

infowindow.open(map);
```

### google.maps.Geocoder()

https://developers.google.com/maps/documentation/javascript/reference#Geocoder

* geocode(obj, callbackFunction)
* obj.address can be an address and callbackFunction is a function that gets passed a parameter containing an object with the latitude/longitude

### Events

https://developers.google.com/maps/documentation/javascript/reference#MapsEventListener

```js
google.maps.event.addListener(SOME OBJECT, 'click', function(event) {
	// SOME OBJECT could be a marker, an info window, the map, etc...
});
```

