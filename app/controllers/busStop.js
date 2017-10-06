module.exports = function(app) {

	const BusStop = app.models.busStop;
	const BusModule = app.models.busModule;
	const RoutePoints = app.models.routePoint;
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
		var _id = req.params.id;
		
		BusStop.findById(_id).select('busLines').exec()
			.then(
				function(busstop){
					if(!busstop) throw new Error("Nenhuma linha cadastrada nessa parada");
					
					var buslineid = busstop.busLines;
					
					BusModule.find({'busLine': buslineid}).populate({path: 'busLine', select: 'busLine actualRoutePoint'}).exec()
						.then(
							function(busline){
								if(!busline) throw new Error("Nenhum veículo cadastrado ou em circulação no momento");
									RoutePoints.findOne({'busStop': busstop._id}).exec()
										.then(
											function(busstopposition){
												var busposition = busline.actualRoutePoint.position;
												var userposition = busstopposition.position;
												RoutePoints.query.where('position').within().box(busposition, userposition)
													.then(
														function(allpoints){
															console.log(allppoints);
															var prediction = Dialga.getPrevision(allpoints);
															res.json(prediction);
														},
														function(erro){
															console.log("Deu ruim no allpoints" + erro);
															res.status(404).json(erro);
														}
													);
											},
											function(erro){
												console.log("Deu ruim encontrando a posição do usuário" + erro);
												res.status(404).json(erro);
											}
										);	
								res.json(busline);
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