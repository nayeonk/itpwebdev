angular.module('itpwebdev').controller('HomeController', function($scope, $routeParams, Course) {
	$scope.courseNum = $routeParams.courseNum;
	$scope.courseNumNumeric = parseInt($scope.courseNum); 

	Course.get($scope.courseNum).then(function(resp) {
		$scope.course = resp.data
	});

});