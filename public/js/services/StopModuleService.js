angular.module('farol-api').factory('StopModule', function($resource){
	return $resource('/stopmodule/:id');
});