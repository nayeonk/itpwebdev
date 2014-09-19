Google Maps API
===============

### Overview

* functions as constructors review
* single point
	* google.maps.LatLng()
	* google.maps.Marker()
		* setMap(map)
	* google.maps.Map()
* map event listeners
* google maps geocoding w/ jQuery
	* google.maps.Geocoder()
	* map.setCenter()
* google.maps.InfoWindow()

### Google Maps API (V3)

* [Getting started documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
* an API key is recommended but not required. It allows you to track your Map application's usage


A list of common _google.maps_ constructor functions:

* [google.maps.Map()](https://developers.google.com/maps/documentation/javascript/reference#Map)
* [google.maps.Marker()](https://developers.google.com/maps/documentation/javascript/reference#Marker)
* [google.maps.LatLng()](https://developers.google.com/maps/documentation/javascript/reference#LatLng)
* [google.maps.InfoWindow(obj)](https://developers.google.com/maps/documentation/javascript/reference#InfoWindow)
	* obj.content will be the content inside the info window 
* [google.maps.Geocoder()](https://developers.google.com/maps/documentation/javascript/reference#Geocoder)
	* geocode(obj, callbackFunction)
		* obj.address can be an address
		* returns a an object w the lat/lng 

Map object methods:
* [google.maps.event.addListener(map, 'click', fn(event))](https://developers.google.com/maps/documentation/javascript/reference#MapsEventListener)

