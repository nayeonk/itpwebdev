angular.module('itpwebdev').service('Content', function($http) {
	this.get = function(courseNum, type, file) {
		var url = [
			courseNum,
			type,
			file
		].join('/');

		return $http.get(url);
	};
});