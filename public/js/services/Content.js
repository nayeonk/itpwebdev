angular
  .module('itpwebdev')
  .service('Content', function($http, $q) {
    var cache = {};

	this.get = function(courseNum, type, file) {
        var dfd = $q.defer();

		var url = [
			courseNum,
			type,
			file
		].join('/');

        if (cache[url]) {
            dfd.resolve(cache[url]);
        } else {
            $http.get(url).then(function(response) {
                cache[url] = response;
                dfd.resolve(response);
            });
        }

        return dfd.promise;
	};
  });