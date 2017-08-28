module.exports = function(app){

	const Busline = app.models.busLine;
	
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

	return controller;

};