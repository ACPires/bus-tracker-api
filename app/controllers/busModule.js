module.exports = function(app) {
	
	//Create 	ok
	//Read		ok	falta listar tudo
	//Update	ok
	//Delete	ok
	
	const BusModule = app.models.busModule;
	
	var controller = {};
	
	//Search for a single document by ID
	controller.getModule = function(req, res){
		var _id = req.params.id;
		
		BusModule.findById(_id).populate({path:'bus', select: '_id'}).populate({path: 'nextStop', select: 'description -_id'}).exec()
			.then(
				function(busmodule){
					if(!busmodule) throw new Error("Módulo não cadastrado");
					else{
						res.json({IdBusModule: busmodule._id, IdBus: busmodule.bus._id});
					}
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	//Updates the position of the bus
	controller.updatePosition = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			BusModule.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(busmodule){
						res.json(busmodule);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	//Removes a bus module by ID
	controller.removeModule = function(req, res){
		var _id = req.params.id;
		
		BusModule.remove({"_id": _id}).exec()
			.then(
				function(){
					console.log("Removido com sucesso!");
					res.status(204).end();
				},
				function(erro){
					return console.error(erro);
				}
			);
	};
	
	//List all bus modules
	controller.listBusModules = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			BusModule.findById(_id).populate({path:'bus', select: '_id'}).populate({path: 'nextStop', select: 'description -_id'}).exec()
				.then(
					function(busmodule){
						res.json(busmodule);
					},
					function(erro){
						res.status(500).json(erro);
					}
				);
		}else{
			BusModule.find().exec()
				.then(
					function(busmodule){
						res.json(busmodule);
					},
					function(erro){
						res.status(500).json(erro);
					}
				);
		}
	};

	//Updates if there is an ID or creates in the case that it doesn't exists
	controller.updateBusModule = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			BusModule.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(busmodule){
						res.json(busmodule);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			BusModule.create(req.body)
				.then(
					function(busmodule){
						res.status(201).json(busmodule);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	return controller;

};

/*
ObjectId("59a31d1fe34a770cbe9e4515") bus

ObjectId("599f5c9a2e9ecf18e0419fb8") busstop

ObjectId("59a470cb49f176e2eb8a995b") busmodule
*/