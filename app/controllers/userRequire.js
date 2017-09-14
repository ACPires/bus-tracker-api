module.exports = function(app){
	const UserRequire = app.models.userRequire;
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
		}else{
			UserRequire.create(req.body)
				.then(
					function(require){
						res.json(require);
						console.log("Requisição registrada!");
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}
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
	
	return controller;
};