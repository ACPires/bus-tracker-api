module.exports = function(app) {
	
	var controller = app.controllers.stopModule;
	
	app.route('/stopmodule')
		.get(controller.listBusStop)
		.post(controller.addStopModule);
	app.route('/stopmodule/:id')
		.post(controller.addStopModule)
		.delete(controller.remove);
};