angular.module('farol-api').controller('BusLineController',
	function($scope){
		$scope.salva = function (){
			console.log("chegou aqui");
			$scope.busline.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busline = new BusLine();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
	}
);