angular.module('farol-api').controller('ListStopModulesController', function($scope, StopModule) {

	$scope.mensagem = {texto: ''};
	
	$scope.filtro='';

	$scope.stopmodules = [];

	function listStopModules() {			
		StopModule.query(
			function(busstopmodule) {
				console.log("List Stop Modules");
				console.log(busstopmodule);
				$scope.stopmodules = busstopmodule;
			},
			function(erro) {
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível obter a lista de paradas.'
					};
			}
		);
	};

	listStopModules();

	$scope.remove = function(stopmodule) {
		StopModule.delete({id: busterminal._id}, 
			listStopModules(), 
			function(erro){	
				$scope.mensagem = {texto: 'Não foi possível remover o módulo da parada'};
				console.log(erro);
			}
		);
	};

});