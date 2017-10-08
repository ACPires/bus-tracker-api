module.exports = function(app) {

	const BusStop = app.models.busStop;
	const BusModule = app.models.busModule;
	const RoutePoints = app.models.routePoint;
	const Route = app.models.route;
	const Dialga = app.models.wizardOfTime;

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
		var serialId = req.params.id;

		console.log("Busca pelo serial: " + serialId);

		BusStop.findOne({serial: serialId}).select('busLines').exec()
			.then(
				function(busstop){
					if(!busstop) throw new Error("Nenhuma linha cadastrada nessa parada");

					var buslineid = busstop.busLines;

					console.log(buslineid);

					BusModule.find({'busLine': buslineid}).lean().populate({path: 'busLine', select: 'busLine actualRoutePoint'}).exec()
						.then(
							function(busModuleFound){
								if(!busModuleFound) throw new Error("Nenhum veículo cadastrado ou em circulação no momento");
								console.log(busModuleFound);

								var totalCalls = 0;

								busModuleFound.forEach(function(busModule, index){
									getPredictionForModule(busModule, busstop._id, function(arriveAt){
										busModule.arriveAt = arriveAt;

										totalCalls++;

										if(totalCalls == busModuleFound.length) res.json(busModuleFound);
									});
								});

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
	}

	function getPredictionForModule(busModule, busStopId, callback){

		Route.findOne({busLine: busModule.busLine}).exec()
			.then(
				function(routeFound){

					RoutePoints.find({route: routeFound._id}).exec()
						.then(
							function(routePoints){

								var busModulePosition;

								if(busModule.actualRoutePoint){
									busModulePosition = busModule.actualRoutePoint;
								}else{
									busModulePosition = 0;
								}

								var routePointBusStop = routePoints.find(function(routePoint){
									if(!routePoint.busStop) { return false; }
									var one = routePoint.busStop.toString();
									var two = busStopId.toString();
									return two === one;
								});

								if(!routePointBusStop) {
									console.log("Não existe este ponto nesta rota");
								}else{
									console.log(routePointBusStop);
								}

								busModule.busLine.arriveAt = Dialga.getPrevision(routePoints.slice(busModulePosition, routePointBusStop.position));
								console.log("Arrive at: " + busModule.busLine.arriveAt);

								callback(busModule.busLine.arriveAt);
							},
							function(error){
								res.status(500).json(error);
							}
						)
				},
				function(error){
					res.status(500).json(error);
				}
			);
	}

	controller.listBusStops = function(req, res){
		var _id = req.params.id;

		if(_id){
			BusStop.findById(_id).exec()
				.then(
					function(busstop){
						//if(!busstop) throw new Error ("Parada não cadastrada!");
						res.json(busstop);
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
