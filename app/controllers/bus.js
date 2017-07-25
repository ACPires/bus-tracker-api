module.exports = function(app) {
	
	var Buslist = 'app.models.farol-api';
	
	var controller = {};
	
	controller.busList = function(req, res){
		var _id = req.params.busstopId;
		var promise = Buslist.Bus.findById(_id).populate('busLine').exec()
			.then(
				function(busList){
					res.json(busList);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};
	
	controller.busDetails = function(req, res){
		var _id = req.params.busId;
		Buslist.bus.findById(_id).exec()
			.then(
				function(bus){
					if(!bus) throw new Error("Veículo não encontrado");
					res.json(bus);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	controller.userRequire = function(req, res){
		//preciso dar uma olhada nisso
		var _id = req.body._id;
		
		
	};
	
	controller.waitingTime = function(req, res){
		
		var _id = req.params.requireId;
	}
	
	return controller;

};
