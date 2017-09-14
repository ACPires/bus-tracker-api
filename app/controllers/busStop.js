module.exports = function(app) {

	const BusStop = app.models.busStop;
	
	var controller = {};
	
	controller.addStop = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			BusStop.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(busstop){
						res.json(busstop);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
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
		}
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
	
	controller.listBusStops = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			BusStop.findById(_id).exec()
				.then(
					function(busstop){
						if(!busstop) throw new Error ("Parada não cadastrada!");
						else{
							res.json(busstop);
						}
					},
					function(erro){
						console.log(erro);
						res.status(400).json(erro);
					}
				);	
		}else{		
			BusStop.find().exec()
				.then(
					function(busstop){					
						res.json(busstop);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};	
	
	controller.removeBusStop = function(req, res){
		var _id = req.params.id;
		
		BusStop.remove({"_id": _id}).exec()
			.then(
				function(){
					console.log("Removido com sucesso!" +  _id);
					res.status(204).end();
				},
				function(erro){
					return console.log(erro);
				}
			);
	};
	
	return controller;
	
};


