angular.module('farol-api').controller('BusModuleController',
	function($scope, $routeParams, BusModule) {
		console.log($routeParams.moduleId);
		BusModule.get({id: $routeParams.moduleId},
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

