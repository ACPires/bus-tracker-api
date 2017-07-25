angular.module('farol-api').factory('Details', function($resource) {
	return $resource('/bus/:busId/details');
});