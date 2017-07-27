module.exports = function(app) {
	
	var Buslist = app.models.farolApi;
	var Bus = app.models.busLine;
	
	var controller = {};
	
	controller.addLine = function(req, res){
		BusLine.create(req.body)
			.then(
				function(busLine){
					console.log("Linha cadastrada");
					//res.status(201).jon(busline);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
	};
	
	// controller.addBus = function(req, res){
		// Bus.create(req.body)
			// .then(
				// function(busline){
					// res.status(201).json(busline);
				// },
				// function(erro){
					// console.log(erro);
					// res.status(500).json(erro);
				// }
			// );
	// };
	
	//controller.busList = function(req, res){
		// var _id = req.params.busstopId;
		// console.log(_id + " ID recebido");
		// var promise = Bus.find().exec()
			// .then(
				// function(busList){
					// res.json(busList);
				// },
				// function(erro){
					// console.error(erro);
					// res.status(500).json(erro);
				// }
			// );
	//};
	
	//controller.busDetails = function(req, res){
		// var _id = req.params.busId;
		// Buslist.bus.findById(_id).exec()
			// .then(
				// function(bus){
					// if(!bus) throw new Error("Veículo não encontrado");
					// res.json(bus);
				// },
				// function(erro){
					// console.log(erro);
					// res.status(404).json(erro);
				// }
			// );
	//};
	
	//controller.userRequire = function(req, res){
	//	preciso dar uma olhada nisso
		// var _id = req.body._id;
		
		
	//};
	
	//controller.waitingTime = function(req, res){
		
		// var _id = req.params.requireId;
	//}
	
	return controller;

};
