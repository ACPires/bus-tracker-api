angular.module('farol-api').controller('RequireController',
	function($scope, $routeParams, UserRequire) {
		
		if($routeParams.requireId){	
			UserRequire.get({id: $routeParams.requireId},
				function(require) {
					$scope.require = require;
				},
				function(erro) {
					$scope.mensagem = { texto: 'Veículo sem sinal.'};
					console.log(erro);
				}
			);
		};
		
		$scope.salva = function (){
			$scope.require.$save()
				.then(function() {
					$scope.mensagem = {texto: 'Salvo com sucesso'};
					$scope.require = new UserRequire();
				})
				.catch(function(erro){
					$scope.mensagem = {texto: 'Não foi possível salvar'};
				});
				
		};
		//tenho que rever essa última parte
		UserRequire.query(function(requires){
			$scope.requires = requires;
		});
	}
);