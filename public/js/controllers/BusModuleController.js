angular.module('farol-api').controller('BusModuleController',
	function($scope, $routeParams, BusModule) {
		console.log($routeParams.id);
		BusModule.get({id: $routeParams.id},
			function(busmodule) {
				$scope.busmodule = busmodule;
			},
			function(erro) {
				$scope.mensagem = { texto: 'Módulo não cadastrado.'};
				console.log(erro);
			}
		);
	}
);

