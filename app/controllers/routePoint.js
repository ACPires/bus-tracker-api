module.exports = function(app) {
	
	const RoutePoint = app.models.routePoint;
	var controller = {};
	
	controller.listRoutePoint = function(req, res) {
		var _id = req.params.id;
		
		if(_id){
			RoutePoint.findById(_id).populate().exec()
				.then(
					function(routepoint) {
						if(!routepoint) throw new Error ("Ponto da rota não cadastrado!");
						else{
							res.json(routepoint);
						}
					},
					function(erro) {
						console.log(erro);
						res.status(404).json(erro);
					}
				);
		}else{
			RoutePoint.find().populate().exec()
				.then(
					function(routepoint) {
						res.json(routepoint);
					},
					function(erro) {
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.addRoutePoint = function(req, res) {
		var _id = req.params.id;
		
		if(_id){
			RoutePoint.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(routepoint){
						res.json(routepoint);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			RoutePoint.create(req.body)
				.then(
					function(routepoint){
						res.json(routepoint);
						console.log("Cadastro realizado com sucesso!");
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.removeRoutePoint = function(req, res) {
		var _id = req.params.id;
		
		RoutePoint.remove({"_id": _id}).exec()
			.then(
				function(){
					console.log("Removido com sucesso!");
					res.status(204).end();
				},
				function(erro){
					console.log(erro);
				}
			);
	};
	
	return controller;
};