module.exports = function(app) {

	var controller = app.controllers.busLine;
	
	app.route('/busline')
		.(controller.listLines);
	app.route('/busLine/:id')
		.get(controller.listLine)
		.post(controller.addLine)
		.delete(controller.removeLine);
};