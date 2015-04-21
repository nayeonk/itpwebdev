angular
    .module('itpwebdev')
	.controller('ContentController', function($scope, $routeParams, Content, $sce, Title) {
		var file, resourceType, courseNumNumeric;

		$scope.courseNum = $routeParams.courseNum;
		file = $routeParams.file;
		resourceType = $routeParams.type;
		courseNumNumeric = parseInt($scope.courseNum);
		$scope.title = Title.makeFromFilename(file);

		Content.get(courseNumNumeric, resourceType, file).then(function(resp) {
			var safeHTML = $sce.trustAsHtml(resp.data);
			$scope.content = safeHTML;
		});
	});