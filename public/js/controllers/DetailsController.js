angular.module('farol-api').controller('DetailsController',
	function($scope, $routeParams, Details) {
		
		function($scope, $routeParams, BusList){
		if($routeParams.busId){
			Bus.get({id: $routeParams.busId},
				function(bus) {
					$scope.bus = bus;
				},
				function(erro) {
					$scope.mensagem = {texto: 'Veículo inexistente ou não está em circulação'};
					console.log(erro);
				}
			);
		};	
		Bus.query(function(bus){
			$scope.bus = bus;
		});
	}
);