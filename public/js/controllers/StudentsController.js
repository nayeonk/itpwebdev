angular.module('itpwebdev').controller('StudentsController', function($scope, Students) {
	Students.get($scope.courseNum).then(function(resp) {
		// console.log(resp);
		$scope.students = resp.data;
	}, function(resp) {
		
	});
});