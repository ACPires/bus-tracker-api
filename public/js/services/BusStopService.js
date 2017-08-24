angular.module('farol-api').factory('BusStop', function($resource){
	return $resource('/busstop/:stopId');
});