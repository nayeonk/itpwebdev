Angular.js
==========

### Single Page Applications

* shell pages and nested views
* routing


### What is Angular.js and why use it?

* full SPA framework
* provides structure to your applications
* 2 way data binding
* great for data-driven applications

### Modules

* A module is a a group of functions, variables, objects, etc bundled together in a 'package' (module) for a particular concept, piece of functionality, a single page, or set of pages. 
* It is really a matter of preference on how you'd like to break up your modules.
* I usually create a module for a set of related pages like an admin section.
* For things that can be reused in several modules or even other projects (like libraries for working with different APIs), I place those in a separate module

### Controllers

* Controllers are a place for us to add business logic to decorate the $scope (view-model) with data. It __controls__ what data is bound into the view.
* $scope is an object that glues the controller to the view
* properties (data and methods) on the $scope object are avaiable to the view (your html) that is controlled by that controller
* $scope is also sometimes called the view-model if you're familiar with the MVVM design pattern
* should NOT contain any DOM manipulation code

### Directives

* Directives "teach HTML new tricks" as you will commonly hear
* Built-in angular directives start with ng
* ng-app
* ng-repeat
* ng-src
* ng-show
* to pass HTML 5 validation, you can prefix any angular directive with 'data' as part of the HTML 5 data attributes, i.e. data-ng-app.
* any DOM manipulation you do should go inside custom directives

### Services

* built-in angular services start with a dollar sign
* $http is angular's function for making AJAX and JSONP requests, like $.ajax in jquery
* $http also returns promise objects

