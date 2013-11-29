Angular.js part 2
=================

### Review

* review 2 way data binding (use diagram), views/templates, controllers
* review angular's internal event system used to check if data has changed
* review directives
* review angular structure - modules, controllers, built-in services

### Custom Services

We can define custom services by using the .service() function similar to how we define controllers. Here we are __adding__ a service called 'iTunes' to the module 'my-app' we previously defined in our application.

```js
	angular.module('my-app').service('iTunes', function() {
		this.get = function() {
			// implementation here
		};
	});
```

Note, there are several ways to define services. This is just one approach. There are also factories and providers.

### New Directives

* [ng-submit directive](http://docs.angularjs.org/api/ng.directive:ngSubmit)
* [ng-hide directive](http://docs.angularjs.org/api/ng.directive:ngHide)
* [ng-switch directive](http://docs.angularjs.org/api/ng.directive:ngSwitch)
* [ng-click directive](http://docs.angularjs.org/api/ng.directive:ngClick)


### Demo

* recreate app from last week using boilerplate and display a list of songs for an artist
* create custom service for itunes api
* trigger search based on user input using a form instead of page load
	* create form
	* ng-submit and methods on $scope
	* ng-hide for showing placeholder "Please make a search"
* previous searches
	* pushing data into an array of previous search terms
	* ng-switch statements like Handlebars if blockers

If there is time...

* favoriting songs
	* ng-click
	* passing data from ng-repeat to ng-click function