//Used to manipulate the route collection, that has the bus lines with theirs initial and last stops

module.exports = function(app) {
	
	const Route = app.models.route;
	
	var controller = {};
	
	controller.listRoutes = function(req, res){
		Route.find().exec()
			.then(
				function(route){
					res.json(route);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};
	
	controller.listRoute = function(req, res){
		var _id = req.params.id;

		Route.findById(_id).exec()
			.then(
				function(route){
					if(!route) throw new Error ("Rota não cadastrada!");
					else{
						res.json(route);
					}
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	controller.addRoute = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			Route.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(route){
						res.json(route);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			Route.create(req.body)
				.then(
					function(route){
						console.log("Rota cadastrada!");
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}				
	};
	
	controller.removeRoute = function(req, res){
		var _id = req.params.id;
		
		Route.delete({"_id": _id}).exec()
			.then(
				function(){
					res.status(204).end();
				},
				function(erro){
					return console.log(erro);
				}
			);
	};
	
	return controller;
};