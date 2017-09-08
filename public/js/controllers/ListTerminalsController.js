angular.module('farol-api').controller('ListTerminalsController', function($scope, BusTerminal) {

	$scope.mensagem = {texto: ''};
	
	$scope.filtro='';

	$scope.busterminal = [];
	
	function listTerminals() {
		BusTerminal.query(
			function(busterminal) {
				$scope.busterminal = busterminal;
			},
			function(erro) {
				console.log(erro);
				$scope.mensagem = {texto: 'Não foi possível obter a lista'};
			}
		);
	};
	
	listTerminals();
	
	$scope.remove = function(busterminal) {
		BusTerminal.delete({id: busterminal._id}, 
			listTerminals(), 
			function(erro){	
				$scope.mensagem = {texto: 'Não foi possível remover o terminal'};
				console.log(erro);
			}
		);
	};

});