angular.module('farol-api').factory('BusLine', function($resource) {
	return $resource('/busline/:lineId');
});