angular.module('farol-api',['ngRoute', 'ngResource'])
	.config(function($routeProvider) {
		$routeProvider.when('/busstop/:busstopId/bus', {
			templateUrl: 'partials/buslist.html',
			controller: 'BusListController'
		});
		$routeProvider.when('/bus/:busId/details', {
			templateUrl: 'partials/busdetails.html',
			controller: 'DetailsController'
		});
		$routeProvider.when('/bus/:busId/require/:busstopId', {
			templateUrl: 'partials/busrequire.html',
			controller: 'RequireController'
		});
		$routeProvider.when('/bus/:requireId', {
			templateUrl: 'partials/busrequire.html',
			controller: 'RequireController'
		});
		
		//$routeProvider.otherwise({redirectTo: '/search'});
	});