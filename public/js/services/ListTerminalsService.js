angular.module('farol-api').factory('ListTerminals', function($resource){
	return $resource('/listterminals');
});