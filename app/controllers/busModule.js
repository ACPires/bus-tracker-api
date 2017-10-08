module.exports = function(app) {

	const BusModule = app.models.busModule;
	const RoutePoints = app.models.routePoint;
	const UserRequire = app.models.userRequire;
	const Route = app.models.route;
	const Palkia = app.models.wizardOfSpace;
	var notificationService = require('./notification');

	var controller = {};

	//Search for a single document by ID
	controller.getModule = function(req, res){
		var _id = req.params.id;

		BusModule.findById(_id).populate({path:'bus', select: '_id'}).populate({path: 'nextRouteStop', select: 'description -_id'}).exec()
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

	controller.arrive = function(req, res){
		var _id = req.params.id;

		console.log(_id);

		BusModule.findById(_id).populate({path:'bus', select: '_id'}).populate({path: 'nextRouteStop'}).exec()
			.then(
				function(busmodule){
					console.log(busmodule)
					var busStopID = 0;

					if(busmodule.nextRouteStop) busStopID = busmodule.nextRouteStop.busStop;

					UserRequire.find({busModule: busmodule._id, busStop: busStopID}).exec()
						.then(
							function(userRequires){
								userRequires.forEach(function(userRequire){
									if(userRequire.pushKey){
										console.log("Sending alert");
										notificationService().sendAlert(userRequire.pushKey);
									}
								});

								res.json("Done");
							},
							function(erro){
								res.status(500).json(erro);
							}
						);
				},
				function(erro){
					res.status(500).json(erro);
				}
			);

	}

	//Updates the position of the bus
	controller.updatePosition = function(req, res){
		var _id = req.params.id;

		if(_id){
			BusModule.findById(_id).exec()
				.then(
					function(busmodule){
						var busline = busmodule.busLine;
						Route.findOne({'busLine': busline}).exec()
							.then(
								function(route){
									var route = route._id;
									RoutePoints.find({'route': route}).exec()
										.then(
											function(routepoints){
												var position = Palkia.getCorrectPosition(req.body.latitude, req.body.longitude, routepoints);
												var nextPoint = Palkia.getNextStop(position, routepoints);

												console.log(position);
												console.log(nextPoint);

												req.body.latitude = position.latitude;
												req.body.longitude = position.longitude;
												req.body.actualRoutePoint = nextPoint;

												BusModule.findByIdAndUpdate(_id, req.body).exec()
													.then(
														function(busmodule){

															console.log("Busmodule atualizado com sucesso: " + busmodule);

															res.json(busmodule);
														},
														function(erro){
															console.log(erro);
															res.status(500).json(erro);
														}
													);
											},
											function(erro){
												console.log(erro);
												res.status(404).json(erro);
											}
										);
								},
								function(erro){
									console.log(erro);
									res.status(404).json(erro);
								}
							);
					},
					function(erro){
						res.status(404).json(erro);
						console.log(erro);
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
			BusModule.findById(_id).populate({path:'bus', select: '_id'}).populate({path: 'nextRouteStop', select: 'description -_id'}).exec()
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
