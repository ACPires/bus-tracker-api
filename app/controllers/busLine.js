module.exports = function(app) {
	
	const Busline = app.models.busLine;
	
	var controller = {};
	
	controller.addLine = function(req, res){
		var _id = req.params.id;
		
		if(_id){
			Busline.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(busLine){
						res.json(busLine);
					},
					function(erro){
						console.log(erro);
						res.status(500).json(erro);
					}
				);
		}else{
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
		}
	};
	
	controller.listLine = function(req, res){
		var _id = req.params.id;

		Busline.findById(_id).exec()
			.then(
				function(busline){
					if(!busline) throw new Error ("Linha não cadastrada!");
					else{
						res.json(busline);
					}
				},
				function(erro){
					console.log(erro);
					res.status(404).json(erro);
				}
			);
		
	};
	
	controller.listLines = function(req, res){
		Busline.find().exec()
		.then(
			function(busline){
				res.json(busline);
			},
			function(erro){
				console.log(erro);
				res.status(500).json(erro);
			}
		);
	};
	
	controller.removeLine = function(req, res){
		var _id = req.params.id;
		
		Busline.remove({"_id": _id}).exec()
			.then(
				function(){
					res.status(204).end();
				},
				function(erro){
					return console.log(erro);
				}
			);
	};

	return controller;

};