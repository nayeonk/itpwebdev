var app = angular.module('itpwebdev', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/partials/course-listing.html'
		})
		.when('/jobs', {
			templateUrl: '/jobs'
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

//app.config(['$httpProvider', function($httpProvider) {
//    $httpProvider.interceptors.push('cacheInterceptor');
//}]);
//
//app.factory('cacheInterceptor', function() {
//
//});

app.value('$', jQuery);
app.value('hljs', hljs);