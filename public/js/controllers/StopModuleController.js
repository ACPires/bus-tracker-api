angular.module('farol-api').controller('StopModuleController',
	function($scope, $routeParams, StopModule, BusStop){
		
		function listBusStops() {
			BusStop.query(
				function(busstop) {
					$scope.busstop = busstop;
				},
				function(erro) {
					console.log(erro);
					$scope.mensagem = {texto: 'Não foi possível obter a lista de paradas'};
				}
			);
		};
		
		if($routeParams.id){	
			StopModule.get({id: $routeParams.id},
				function(stopmodule) {
					$scope.busstopmodule = stopmodule;
				},
				function(erro) {
					$scope.mensagem = { texto: 'Parada inexistente. Nova parada.'};
					console.log(erro);
				}
			);
		}else{
			$scope.busstopmodule = new StopModule();
		};		
		
		$scope.salva = function (){
			$scope.busstopmodule.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busstopmodule = new StopModule();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
		};	
			
		$scope.setBusStop = function(item){
			//aqui você chama o save o stopmodule
			$scope.busstopmodule.busstop = item;
			$scope.busstopmodule.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busstopmodule = new StopModule();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
		
		};
		// var BusStop = function(){
			// busstop.query(
				// function(busstop) {
					// $scope.busstop = busstop;
				// }
			// );
		// }
	}
);

