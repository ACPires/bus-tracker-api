module.exports = function(app) {	

	const BusTerminal = app.models.busTerminal;

	var controller = {};

	controller.listTerminals = function(req, res){
		var promise = BusTerminal.find().exec()
			.then(
				function(busTerminal){
					res.json(busTerminal);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.getTerminal = function(req, res){
		var _id = req.params.id;

		BusTerminal.findById(_id).exec()
			.then(
				function(busTerminal){
					if(!busTerminal) throw new Error("Terminal não encontrado");
					res.json(busTerminal);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};

	controller.addTerminal = function(req, res){
		var _id = req.body._id;
		//update is not working
		//it has the parameter needed in the link, but is somehow, unable to get the parameter
		if(_id){
			BusTerminal.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(busTerminal){
						res.json(busTerminal);
					},
					function(erro){
						console.error(erro);
						res.status(500).json(erro);
					}
				);
		}else{
			BusTerminal.create(req.body)
				.then(
					function(busTerminal){
						console.log("Terminal cadastrado");
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
	};

	controller.removeTerminal = function(req, res){
		var _id = req.params.id;
		BusTerminal.remove({"_id": _id}).exec()
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