Angular.js
==========

### Single Page Applications (SPA)

* shell pages and nested views
* routing

### What is Angular.js and why use it?

* full single-page-application (SPA) framework
* provides structure to your applications
* 2 way data binding
* great for data-driven applications

### Modules

* A module is a group of related functionality bundled together in a 'package' (module)
* For example, you might have a module called 'admin' that relates to anything admin related

### Controllers

* Controllers are a place for us to add business logic to decorate the $scope (view-model) with data. It __controls__ what data is bound into the view.
* $scope is an object that glues the controller to the view
* properties (data and methods) on the $scope object are avaiable to the view (your html)
* $scope is also sometimes called the view-model, taken from the MVVM design pattern
* should NOT contain any DOM manipulation code

### Directives

* Directives "teach HTML new tricks" as you will commonly hear
* Built-in angular directives start with ng
* ng-app
* ng-repeat
* ng-src
* ng-show
* [ng-submit directive](http://docs.angularjs.org/api/ng.directive:ngSubmit)
* [ng-hide directive](http://docs.angularjs.org/api/ng.directive:ngHide)
* [ng-switch directive](http://docs.angularjs.org/api/ng.directive:ngSwitch)
* [ng-click directive](http://docs.angularjs.org/api/ng.directive:ngClick)
* to pass HTML 5 validation, you can prefix any angular directive with 'data' as part of the HTML 5 data attributes, i.e. data-ng-app.
* any DOM manipulation you do should go inside custom directives

### Services

* built-in angular services start with a dollar sign
* $http is angular's function for making AJAX and JSONP requests, like $.ajax in jQuery
* $http also returns promise objects

### Defining a Custom Service

We can define custom services by using the .factory() function off of our angular application. Here we are __adding__ a service called 'iTunes' to the module 'my-app' we previously defined in our application. Note, there are several ways to define services. The following is just one approach.

```js
angular
	.module('my-app')
	.factory('iTunes', function() {
		var get = function() {
			// implementation here
		};

		return {
			get: get
		}
	});
```

### Other Resources

* [Angular Fundamentals in 60-ish Minutes](https://www.youtube.com/watch?v=i9MHigUZKEM)
* [Shaping up with Angular (CodeSchool)](https://www.codeschool.com/courses/shaping-up-with-angular-js)
* [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide)



