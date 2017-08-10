angular.module('farol-api').controller('BusLineController',
	function($scope, BusLine, $routeParams){
		
		if($routeParams.lineId){	
			BusLine.get({id: $routeParams.lineId},
				function(busline) {
					$scope.busLine = busline;
				},
				function(erro) {
					$scope.mensagem = { texto: 'Linha inexistente. Nova linhas.'};
					console.log(erro);
				}
			);
		}else{
			$scope.busline = new BusLine();
		};		
		
		$scope.salva = function (){
			console.log("chegou aqui");
			$scope.busline.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busLine = new BusLine();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
	}
);

