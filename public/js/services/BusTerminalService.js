angular.module('farol-api').factory('BusTerminal', function($resource){
	return $resource('/busterminal/:id');
});