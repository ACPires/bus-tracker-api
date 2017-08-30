module.exports = function(app) {

	const BusStop = app.models.busStop;
	
	var controller = {};
	
	controller.addStop = function(req, res){
		BusStop.create(req.body)
			.then(
				function(busStop){
					console.log("Parada cadastrada");
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.listBus = function(req, res){
		var _id = req.params.id;
		//ver melhor como vai ficar essa query
		BusStop.findById(_id).exec()
			.then(
				function(busstop){
					if(!busstop) throw new Error("Nenhum veículo cadastrado ou em circulação no momento");
					res.json(busstop);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);				
	}
	
	return controller;
	
};


