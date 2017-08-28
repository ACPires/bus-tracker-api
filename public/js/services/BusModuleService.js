angular.module('farol-api').factory('BusModule', function($resource){
	return $resource('/busmodule/:id/settings');
});