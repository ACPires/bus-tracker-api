angular.module('farol-api').controller('StopModuleController',
	function($scope, $routeParams, StopModule, BusStop){
		
		console.log("Init Controller Stop Module");
		
		$scope.busstop = [];	

		function listBusStops() {			
			BusStop.query(
				function(busstop) {
					console.log("List Bus Stop");
					console.log(busstop);
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

		if($routeParams.id){	
			StopModule.get({id: $routeParams.id},
				function(busstopmodule) {
					$scope.busstopmodule = busstopmodule;
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
			console.log($scope.busstopmodule);
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
			console.log(item);			
			
		
		};
		
	}
);

