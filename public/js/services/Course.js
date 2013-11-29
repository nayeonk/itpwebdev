angular.module('itpwebdev').service('Course', function($http) {
	this.get = function(courseNum) {
		return $http.get('/courses/' + courseNum);
	};
});