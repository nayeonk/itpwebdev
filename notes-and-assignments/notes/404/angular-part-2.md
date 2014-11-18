Angular.js part 2
=================

### Review

* 2 way data binding, views/templates, controllers, $scope (view model)
* angular's internal event system used to check if data has changed (the digest)
* directives
	* ng-app, ng-repeat, ng-model, ng-controller
* structure - modules, controllers, built-in services, buit in directives

### Overview

* .value() service api
* filters
	* orderBy
	* filter
	* custom filters with arguments
* routing & single page apps
* creating custom directives
	* shared scope
		* student-grades element directive
	* isolate scope
		* grade-status-indicator attribute directive


### Routing

```js
app.config(function($routeProvider) {
	$routeProvider
		.when('/pages', {
			templateUrl: '/js/templates/index.html',
			controller: 'PagesController'
		})
		.when('/pages/:id/edit', {
			templateUrl: '/js/templates/edit-page.html',
			controller: 'EditPageController'
		})
		.otherwise({
			redirectTo: '/pages'
		})
});
```

### Angular Filters

https://docs.angularjs.org/api/ng/filter

```html
<div ng-repeat="character in characters | filter:searchTerm | orderBy:'name'">
	<div class="col character-name">{{character.name}}</div>
	<div class="col character-house">{{character.house}}</div>
	<div class="col character-actor">{{character.actor}}</div>
	<div class="col character-episodes">{{character.episodes}}</div>
	<div class="col character-quote">"{{character.quote}}"</div>
</div>
```

```html
<div ng-repeat="character in characters | filter:{house: searchTerm}">
	<div class="col character-name">{{character.name}}</div>
	<div class="col character-house">{{character.house}}</div>
	<div class="col character-actor">{{character.actor}}</div>
	<div class="col character-episodes">{{character.episodes}}</div>
	<div class="col character-quote">"{{character.quote}}"</div>
</div>
```

### Custom Filters

https://docs.angularjs.org/guide/filter

```js
app.filter('percentage', function() {
  return function(input, total) {
    return (input / total) * 100;
  }
});
```

### Directives

Built in directives: https://docs.angularjs.org/api/ng/directive

### Custom Directives

https://docs.angularjs.org/guide/directive

A custom directive with shared scope:

```html
<student-grades></student-grades>
```

```js
app.directive('studentGrades', function() {
  // DDO (directive definition object)
  return {
    restrict: 'E',
    templateUrl: '/js/templates/student-grades.html'
  };
});
```

A custom directive with isolate scope:

```html
<tr grade-status-indicator="student.grade / 20 * 100"></tr>
```

```js
app.directive('gradeStatusIndicator', function() {
  return {
    restrict: 'A',
    scope: {
      gradeStatusIndicator: '='
    },
    link: function($scope, $el, attr) {
      console.log($scope.gradeStatusIndicator);
      var score = $scope.gradeStatusIndicator;
      var color;

      if (score < 70) {
        color = 'red';
      } else if (score > 70 && score < 80) {
        color = 'yellow';
      } else {
        color = 'green';
      }

      $el.css('background-color', color);
    }
  }
});
```
