module.exports = function(app){
	
	const UserRequire = app.models.userRequire;
	const BusStop = app.models.busStop;
	var controller = {};

	controller.listRequires = function(req, res) {
		var _id = req.params.id;
		
		if(_id){
			UserRequire.findById(_id).exec()
				.then(
					function(require){
						if(!require) throw new Error ("Requisição não registrada ou apagada!");
						else{
							res.json(require);
						}
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			UserRequire.find().exec()
				.then(
					function(require){
						res.json(require);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};
	
	controller.addRequire = function(req, res) {
		var busmodule = req.params.busmoduleid;
		var busstopserial = req.params.busstopserial;
		
		if(busmodule){
			console.log("module id: "+busmodule);
			if(busstopserial){
				BusStop.findOne({'serial': busstopserial}).exec()
					.then(
						function(busstop){
							console.log("busstop id: "+busstop._id);
							if(!busstop) throw new Error ("Parada não registrada no sistema!");
							var userrequire = {busModule: busmodule, busStop: busstop._id};
							UserRequire.create(userrequire)
								.then(
									function(require){
										res.status(201).json(require);
										console.log("Requisição registrada!");
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
			}else
				res.status(404).json("Serial indefinido. "+ busstopserial);
		}else
			res.status(404).json("Id do veículo escolhido indefinido. "+ busmodule);
			
	};
	
	controller.removeRequire = function(req, res) {
		var _id = req.params.id;
		
		UserRequire.remove({"_id": _id}).exec()
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
	
	controller.updateRequire = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			UserRequire.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(require){
						res.json(require);
					},
					function(erro){
						console.log(erro);
						res.status(404).json(erro);
					}
				);
		}
		
	}
	
	return controller;
};