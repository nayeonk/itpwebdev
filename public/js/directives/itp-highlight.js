angular.module('itpwebdev')
	.directive('itpHighlight', function($, hljs) {
	return {
		restrict: 'A',
		link: function($scope, $el, attr) {
	
			$scope.$watch('content', function() {
				if ($scope.content) {
					// $timeout(function() {
						jQuery('pre code').each(function(i, e) {
							hljs.highlightBlock(e);
						});
					// }, 200);
				}
				
			});

		}
	}
});