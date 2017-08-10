module.exports = function(app) {
	
	const Busline = app.models.busLine;
	const BusTerminal = app.models.busTerminal;
	const BusStop = app.models.busStop;
	
	var controller = {};
	
	controller.addLine = function(req, res){
		Busline.create(req.body)
			.then(
				function(busLine){
					console.log("Linha cadastrada");
					//res.status(201).json(busline);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};
	
	controller.addTerminal = function(req, res){
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
	};
	
	controller.addStop = function(req, res){
		BusStop.create(req.body)
			.then(
				function(busstop){
					console.log("Parada cadastrada");
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};
	
	return controller;

};