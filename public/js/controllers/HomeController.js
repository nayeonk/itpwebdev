angular.module('itpwebdev')
	.controller('HomeController', function($scope, $routeParams, Course, $location) {
		$scope.courseNum = $routeParams.courseNum;
		$scope.courseNumNumeric = parseInt($scope.courseNum); 

		Course.get($scope.courseNum).then(function(resp, status, headers, config) {
			resp.data.weeks = resp.data.weeks.filter(function(week) {
				if (week.active === 1) {
					return true;
				}

				return false;
			});

			$scope.course = resp.data;
		}, function(resp, status, headers, config) {
			if (resp.status == 404) {
				$location.path('/');
			}
		});

	});