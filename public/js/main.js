angular.module('farol-api',['ngRoute', 'ngResource'])
	.config(function($routeProvider) {
		$routeProvider.when('/busstop/:busstopId', {
			templateUrl: 'partials/bus.html',
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
		
		$routeProvider.otherwise({redirectTo: '/busstop/597652f08677712533d3f463'});
	});