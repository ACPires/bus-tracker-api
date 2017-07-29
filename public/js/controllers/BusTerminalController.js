angular.module('farol-api').controller('BusTerminalController',
	function($scope, BusTerminal, $routeParams){
		
		if($routeParams.lineId){	
			BusTerminal.get({id: $routeParams.terminalId},
				function(busterminal) {
					$scope.busTerminal = busterminal;
				},
				function(erro) {
					$scope.mensagem = { texto: 'Terminal inexistente. Novo terminal.'};
					console.log(erro);
				}
			);
		}else{
			$scope.busterminal = new BusTerminal();
		};		
		
		$scope.salva = function (){
			console.log("chegou aqui");
			$scope.busterminal.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.busTerminal = new BusTerminal();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
	}
);

