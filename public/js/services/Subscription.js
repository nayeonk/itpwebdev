angular.module('itpwebdev').factory('Subscription', function($resource) {
	var Subscription = $resource('/subscriptions');

	return Subscription;
});