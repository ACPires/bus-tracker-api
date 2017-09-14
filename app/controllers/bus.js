module.exports = function(app) {
	
	const Bus = app.models.bus;
	
	var controller = {};
	
	controller.listBus = function(req, res){
		var _id = req.params.id;

		Bus.findById(_id).exec()
			.then(
				function(bus){
					if(!bus) throw new Error ("Veículo não cadastrado!");
					else{
						res.json(bus);
					}
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	controller.listBuses = function(req, res){
		Bus.find().exec()
			.then(
				function(bus){
					res.json(bus);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};
	
	controller.addBus = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			Bus.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(bus){
						res.json(bus);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			Bus.create(req.body)
				.then(
					function(bus){
						console.log("Veículo cadastrado!");
						res.json(bus);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.removeBus = function(req, res){
		var _id = req.params.id;
		
		Bus.remove({"_id": _id}).exec()
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