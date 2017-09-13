angular.module('farol-api').controller('BusModuleController',
	function($scope, $routeParams, BusModule) {
		console.log($routeParams.id);
		
		//C		ok
		//R		
		//U		ok
		//D		
		
		//método 'select' para bucar as configurações do ônibus
		BusModule.get({id: $routeParams.id},
			function(busmodule) {
				$scope.busmodule = busmodule;
			},
			function(erro) {
				$scope.mensagem = { texto: 'Módulo não cadastrado.'};
				console.log(erro);
			}
		);
		
		$scope.salva = function (){
			$scope.busmodule.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Dados salvos com sucesso'};
					$scope.busmodule = new BusModule();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Deu erro'};
				});
		};	

		BusModule.query(function(busmodule){
			$scope.busmodule = busmodule;
		);
			
	}
);

