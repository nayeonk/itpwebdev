angular
  .module('itpwebdev')
  .service('Course', function($http, $q) {
      var cache = {};

      this.get = function(courseNum) {
          var dfd = $q.defer();

          if (cache[courseNum]) {
              dfd.resolve(cache[courseNum]);
          } else {
              $http.get('/courses/' + courseNum).then(function(response) {
                  dfd.resolve(response);
                  cache[courseNum] = response;
              });
          }

        return dfd.promise;
      };
  });