angular.module('farol-api').controller('BusListController', 
	function($scope, $routeParams, BusList){
		if($routeParams.busstopId){
			BusStop.get({id: $routeParams.busstopId},
				function(busstop) {
					$scope.busstop = busstop;
				},
				function(erro) {
					$scope.mensagem = {texto: 'Veículo inexistente ou fora de circulação'};
					console.log(erro);
				}
			);
		};	
		Bus.query(function(busstop){
			$scope.busstop = busstop;
		});
	}
);

	// function buscaContatos() {
		// Contato.query(
			// function(contatos) {
				// $scope.contatos = contatos;
				// $scope.mensagem = {};
			// },
			// function(erro) {
				// console.log(erro);
				// $scope.mensagem = {texto: 'Não foi possível obter a lista'};
			// }
		// );
	// };
	
	// buscaContatos();