angular.module('farol-api').factory('UserRequire', function($resource) {
	return $resource('/bus/:requireId');
});