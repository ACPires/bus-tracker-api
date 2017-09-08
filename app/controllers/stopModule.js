module.exports = function(app) {

	const StopModule = app.models.stopModule;
	const BusStop = app.models.busStop;
	
	var controller = {};
	
	controller.listBusStop = function(req, res){
		var promise = BusStop.find().exec()
			.then(
				function(busStop){
					console.log("oi");
					res.json(busStop);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};	
	
	controller.addStopModule = function(req, res){
		var _id = req.body._id;
		
		if(_id){
			StopModule.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(stopModule){
						res.json(stopModule);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			StopModule.create(req.body)
				.then(
					function(stopModule){
						console.log("Parada cadastrada");
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.remove = function(req, res){
		var _id = req.params.id;
		StopModule.remove({"_id": _id}).exec()
			.then(
				function(){
					res.status(204).end();
				},
				function(erro){
					return console.error(erro);
				}
			);
	};
	
	return controller;
	
};


