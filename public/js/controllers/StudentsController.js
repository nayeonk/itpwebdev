angular.module('itpwebdev').controller('StudentsController', function($scope, Students) {
	Students.get($scope.courseNum).then(function(resp, status, headers, config) {
		// console.log(resp);
		$scope.students = resp.data;
	});
});