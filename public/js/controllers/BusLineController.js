angular.module('farol-api').controller('BusLineController',
	function($scope, BusLine, $routeParams){
		
		if($routeParams.id){	
			BusLine.get({id: $routeParams.id},
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

