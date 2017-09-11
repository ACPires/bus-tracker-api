module.exports = function(app) {
	
	var controller = app.controllers.stopModule;
	
	app.route('/stopmodule')
		.get(controller.listBusStops)
		.post(controller.addStopModule);
	app.route('/stopmodule/:id')
		.post(controller.addStopModule)
		.delete(controller.remove);
	app.route('/liststopmodules')
		.get(controller.listStopModules);
};