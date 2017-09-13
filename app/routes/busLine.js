module.exports = function(app) {

	var controller = app.controllers.busLine;
	
	app.route('/busLine/:id')
		.get(controller.listLine)
		.post(controller.addLine)
		.delete(controller.removeLine);
};