angular.module('itpwebdev').factory('Students', function($http) {

	return {
		get: function(courseNum) {
			return $http.get('/students/' + courseNum + '.json');
		}
	};
});