angular.module('itpwebdev')
	.controller('HomeController', function($scope, $routeParams, Course, $location) {
		$scope.courseNum = $routeParams.courseNum;
		$scope.courseNumNumeric = parseInt($scope.courseNum); 

		Course.get($scope.courseNum).then(function(resp, status, headers, config) {
			$scope.course = resp.data;
		}, function(resp, status, headers, config) {
			if (resp.status == 404) {
				$location.path('/');
			}
		});

	});