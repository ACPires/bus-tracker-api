module.exports = function(app) {

	const StopModule = app.models.stopModule;
	const BusStop = app.models.busStop;

	var controller = {};
	
	controller.listBusStops = function(req, res){
		BusStop.find().exec()
			.then(
				function(busStop){
					res.json(busStop);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};	
	
	controller.listStopModules = function(req, res){
		StopModule.find().populate({path:'busStop', select: 'description -_id'}).exec()
			.then(
				function(stopmodules){
					res.json(stopmodules);
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
					function(busstopmodule){
						res.json(busstopmodule);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			StopModule.create(req.body)
				.then(
					function(busstopmodule){
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


