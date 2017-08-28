module.exports = function(app) {

	const BusStop = app.models.busStop;
	
	var controller = {};
	
	controller.addStop = function(req, res){
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
	};

	return controller;
};