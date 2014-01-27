var app = angular.module('itpwebdev', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/partials/course-listing.html'
		})
		.when('/:courseNum', {
			controller: 'HomeController',
			templateUrl: 'js/partials/index.html'
		})
		.when('/:courseNum/:type/:file', {
			controller: 'ContentController',
			templateUrl: 'js/partials/content.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.value('$', jQuery);
app.value('hljs', hljs);