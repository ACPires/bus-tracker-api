angular.module('farol-api').controller('BusStopController',
	function($scope, BusStop, $routeParams){
		
		if($routeParams.stopId){	
			BusStop.get({id: $routeParams.stopId},
				function(busstop) {
					$scope.busStop = busstop;
				},
				function(erro) {
					$scope.mensagem = { texto: 'Parada inexistente. Nova parada.'};
					console.log(erro);
				}
			);
		}else{
			$scope.busstop = new BusStop();
		};		
		
		$scope.salva = function (){
			console.log("chegou aqui");
			$scope.busstop.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busStop = new BusStop();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
	}
);

