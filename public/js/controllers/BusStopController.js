angular.module('farol-api').controller('BusStopController',
	function($scope, BusStop, $routeParams){
		
		console.log("Init Controller BusStop");
		
		if($routeParams.id){	
			BusStop.get({id: $routeParams.id},
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
			$scope.busstop.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busStop = new BusStop();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
		
		$scope.busstop = [];
		
		function listBusStops() {			
			BusStop.query(
				function(busstop) {
					$scope.busstop = busstop;
				},
				function(erro) {
					console.log(erro);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista de paradas.'
						};
				}
			);
		};
		
		listBusStops();
	}
);