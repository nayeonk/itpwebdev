Backbone.js (continued)
=======================

* Quiz 2
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
* Book liking example using Backbone.Events 

### Other Backbone events

* [Catalog of Built-in Events](http://backbonejs.org/#Events-catalog)
* Views listening to collection events (like sorting) and rerendering

#### Rerendering when a collection is sorted

Imagine you have a Collection View that renders a Book Collection. Collections have methods for sorting and when sorting happens, a "sort" event is fired. Your collection view can listen to this sort event and rerender itself in order to reflect the data's sort order.

```js
var BooksView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sort', function() {
      this.render();
    });
  }
});
```

See Backbone.Collection [sort()](http://backbonejs.org/#Collection-sort) along with the [comparator](http://backbonejs.org/#Collection-comparator) used to control how a collection is sorted.

#### Rendering when a new model is added to a collection

```js
var Book = Backbone.Model.extend();

var BooksCollection = Backbone.Collection.extend({
	model: Book
});

var BookItemView = Backbone.View.extend({
	template: Handlebars.compile("<span>{{title}}</span>"),

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	}
});

var BooksView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add', function(model) {
			this.renderOne(model);
		});
	},

	render: function() {
		this.collection.each(function(model) {
			this.renderOne(model);
		}, this);
	},

	renderOne: function(model) {
		var view = new BookItemView({
			model: model
		});

		view.render();

		this.$el.append(view.$el);
	}
});

var collection = new BooksCollection([
	{ id: 1, title: 'JavaScript Design Patterns' },
	{ id: 2, title: 'You dont know JS' }
]);


var booksView = new BooksView({
	collection: collection
});

$('body').prepend(booksView.$el);
```

[Full working demo here](http://jsbin.com/nehofejiru/1/edit?js,console,output)

### Application Structure

* breaking by type for small - medium sized apps

### Other Resources

* Backbone.js Documentation
* Lots of Backbone.js intro tutorials online - http://code.tutsplus.com/series/getting-to-know-backbonejs--net-24408
* Backbone.js Frameworks - Marionette.js, Chaplin, Thorax
* (Advanced) Building Backbone.js Plugins - https://leanpub.com/building-backbone-plugins

Many tutorials will use Underscore.js templating instead of Handelbars so it might be beneficial to look at that. All the templating engines are very similar. The syntax just slightly varies and some engines offer more or less features.

Also, if you're curious on how custom events work in Backbone, check out [The Observer Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript).

