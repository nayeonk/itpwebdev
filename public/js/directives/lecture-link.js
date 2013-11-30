angular.module('itpwebdev').directive('lectureLink', function() {
	return {
		restrict: 'E',
		replace: true,
		link: function($scope, $el, attr) {
			var url, html;

			if ($scope.unit.link) {
				if ($scope.unit.link.match(/https?:\/\//)) {
					url = $scope.unit.link;
				} else {
					url = [
						'#',
						$scope.courseNum,
						'notes',
						$scope.unit.link
					].join('/');
				}

				html = [
					'<a href="',
					url,
					'">',
					$scope.unit.subject,
					'</a>'
				].join('');
			} else {
				html = $scope.unit.subject;
			}

			$el.html(html);
		}
	}
});