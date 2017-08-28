module.exports = function(app) {
	
	const BusModule = app.models.busModule;
	
	var controller = {};
	
	controller.getModule = function(req, res){
		var _id = req.params.id;
		console.log(_id);
		BusModule.findById(_id).exec()
			.then(
				function(busModule){
					if(!busModule) throw new Error("Módulo não cadastrado");
					res.json(busModule);
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
	};
	
	return controller;

};