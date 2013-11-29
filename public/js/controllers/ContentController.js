angular.module('itpwebdev').controller('ContentController', function($scope, $routeParams, Content, $sce) {
	var courseNum = $routeParams.courseNum;
	var file = $routeParams.file;
	var resourceType = $routeParams.type;

	Content.get(courseNum, resourceType, file).then(function(resp) {
		var safeHTML = $sce.trustAsHtml(resp.data);
		// console.log(safeHTML);
		$scope.content = safeHTML;
	});

});