module.exports = function(app) {

	var controller = app.controllers.busLine;
	
	app.route('/busline')
		.get(controller.listLines)
		.post(controller.addLine);
	app.route('/busline/:id')
		.get(controller.listLine)
		.post(controller.addLine)
		.delete(controller.removeLine);
};