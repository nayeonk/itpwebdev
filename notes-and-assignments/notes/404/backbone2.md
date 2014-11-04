Backbone.js (continued)
=======================

* Starter files https://github.com/ITP-Webdev/backbone2-2014
* start recording
* review models, collections, and views (item views, collection views)
* Backbone.View DOM events
* Backbone.Events and the observer pattern

### Example 1

* backbone default values on models
* views: 'className' property
* views: DOM events with the events property
* views: book liking example without Backbone.Events

### Example 1 refactored

* Backbone.Events and the observer pattern
* Views listening to model changes and rerendering
* Book Liking example using Backbone.Events 

### Other Backbone events

* model and collection events
* Views listening to collection events (like sorting) and rerendering

### Application Structure

* breaking by type for small - medium sized apps


### Rerendering when a collection is sorted

```js
var BooksView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sort', function() {
      this.render();
    });
  }
});
```

### Catalog of Built-in Events

http://backbonejs.org/#Events-catalog
