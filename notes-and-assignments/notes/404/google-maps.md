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

#### Geocoding

Taking an address and converting it into coordinates.

```js
var geocoder = new google.maps.Geocoder();

geocoder.geocode({
	address: '3650 McClintock Ave., Los Angeles, CA 90089'
}, function(results) {
	var latlng = results[0].geometry.location; // a LatLng object
	console.log(latlng.lat(), latlng.lng())
});
```

#### Reverse Geocoding

Taking coordinates and converting it into an address.

```js
var geocoder = new google.maps.Geocoder();

geocoder.geocode({ 
	location: new google.maps.LatLng(-34.397, 150.644)
}, function(results) {
	console.log(results);
});
```

### Events

https://developers.google.com/maps/documentation/javascript/reference#MapsEventListener

```js
google.maps.event.addListener(SOME OBJECT, 'click', function(event) {
	// SOME OBJECT could be a marker, an info window, the map, etc...
});
```

