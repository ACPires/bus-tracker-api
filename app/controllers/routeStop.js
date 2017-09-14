module.exports = function(app) {
	
	const RouteStop = app.models.routeStop;
	var controller = {};
	
	controller.listRouteStop = function(req, res) {
		var _id = req.params.id;
		
		if(_id){
			RouteStop.findById(_id).populate().exec()
				.then(
					function(routestop) {
						if(!routestop) throw new Error ("Ponto da rota não cadastrado!");
						else{
							res.json(routestop);
						}
					},
					function(erro) {
						console.log(erro);
						res.status(404).json(erro);
					}
				);
		}else{
			RouteStop.find().populate().exec()
				.then(
					function(routestop) {
						res.json(routestop);
					},
					function(erro) {
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.addRouteStop = function(req, res) {
		var _id = req.params.id;
		
		if(_id){
			RouteStop.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(routestop){
						res.json(routestop);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			RouteStop.create(req.body)
				.then(
					function(routestop){
						res.json(routestop);
						console.log("Cadastro realizado com sucesso!");
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.removeRouteStop = function(req, res) {
		var _id = req.params.id;
		
		RouteStop.remove({"_id": _id}).exec()
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