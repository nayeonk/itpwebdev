angular.module('itpwebdev').factory('Students', function($http, $q) {
    var cache = {};

	return {
		get: function(courseNum) {
            var dfd = $q.defer();

            if (cache[courseNum]) {
                dfd.resolve(cache[courseNum]);
            } else {
                $http.get('/students/' + courseNum + '.json').then(function(response) {
                    dfd.resolve(response);
                    cache[courseNum] = response;
                });
            }

            return dfd.promise;
		}
	};
});