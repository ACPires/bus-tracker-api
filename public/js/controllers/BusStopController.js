angular.module('farol-api').controller('BusStopController',
	function($scope, BusStop, $routeParams){
		
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
			console.log("chegou aqui");
			$scope.busstop.$save()
				.then(function() {
					console.log($scope.busstop.latitude);
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busStop = new BusStop();
				})
				.catch(function(erro){
					console.log($scope.busstop.latitude);					
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
	}
);

/*
Olá,
estou encontrando dificuldades pra inserir dados num banco de dados Mongo.
Basicamente, estou tentando inserir dados de coordenadas para um mesmo atributo, só que não tenho ideia do que fazer para manipular os dados antes de enviar para a inserção no banco.
*/