module.exports = function(app) {
	
	const BusModule = app.models.busModule;
	
	var controller = {};
	
	controller.getModule = function(req, res){
		var _id = req.params.id;
		
		BusModule.findById(_id).exec()
			.then(
				function(busmodule){
					if(!busmodule) throw new Error("Módulo não cadastrado");
					res.json(busmodule);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	controller.updatePosition = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			//preciso analisar melhor esse aqui para atualizar observando o id do ônibus e não o id do módulo
			//talvez tenha algum outro modo
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
	
	return controller;

};

/*
ObjectId("59a31d1fe34a770cbe9e4515") bus

ObjectId("599f5c9a2e9ecf18e0419fb8") busstop

ObjectId("59a470cb49f176e2eb8a995b") busmodule
*/