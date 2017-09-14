module.exports = function(app) {

	const StopModule = app.models.stopModule;
	const BusStop = app.models.busStop;

	var controller = {};
	
	//List the bus stops to help the insertion at Angular, right now it's not needed
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
	
	//List all the bus stop modules that were created
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
	
	//The if clause updates a document and the else one creates a document
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
	
	//Remove a document
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
	

	//Get one document by ID
	controller.getStopModule = function(req, res){
		var _id = req.params.id;
		StopModule.findById(_id).exec()
			.then(
				function(stopmodule){
					res.json(stopmodule);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	return controller;
	
};


