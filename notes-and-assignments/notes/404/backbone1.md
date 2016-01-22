Backbone.js - Models, Views, and Collections
===========

### Overview

* Backbone philosophy and components
	* Models, Collections, Views
	* Keep your data out of the DOM
	* Event based
* Backbone dependencies
* Models
	* single records of data (like a row in a db table)
	* Song model (title, artist, length, genre, rating)
	* A simple Backbone.Model
	* get() / set()
	* toJSON()
	* Extending Backbone.Model
	* defaults
	* events
	* initialize()
* Rendering models
	* Backbone.View
	* binding to an existing element on the page
	* rendering with client-side templating
	* creating a new element in memory and injecting into the page
	* $el, el
* Collections
	* An object that contains many models
	* Kind of like an array but with extra functionality for managing all the models
	* Which model to use?
	* length property
	* other functions for sorting, fetching data, adding/removing models, etc
* Rendering a collection
	
### Dependencies

* jQuery / Zepto.js
* Underscore.js / Lodash.js

### Models

* A single entity, like a row in a database, with different attributes.
* Usually singular, like Song, Artist, Book, etc
* Read properties using the .get() method
* Write 1 or more properties using the .set() method
* Can specify default attribute values on the model using the defaults object

### Collections

* An object that contains many models.
* Kind of like an array but with much more functionality

### Views (Backbone.View)

* Backone.View is used to render models or collections
* When rendering a model, it is typically referred to as an "item view"
* When rendering a collection, it is typically referred to as a "collection view"
* Backbone.View can bind to an existing element on the page or create one that you can inject into the page. The latter approach by default creates a div element. This can be configured.

