angular.module('itpwebdev').controller('SubscriptionController', function($scope, Subscription) {

	$scope.subscription = {
		course: 'itp104m' //default value
	};

	$scope.subscribe = function() {
		console.log($scope.subscription.email, $scope.subscription.course);

		$scope.subscription.message = 'processing...';

		var subscription = new Subscription();
		subscription.email = $scope.subscription.email;
		subscription.course = $scope.subscription.course;
		subscription.$save(function(subscription) {
			$scope.subscription.message = 'You have sucessfully subscribed';
			$scope.subscription.email = '';
			$scope.subscription.course = 'itp104m';
		});

	};

});