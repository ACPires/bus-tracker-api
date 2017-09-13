module.exports = function(app) {
	
	var controller = app.controllers.busModule;
	
	app.route('/busmodule')
		.get(controller.listBusModules);
	app.route('/busmodule/:id')
		.delete(controller.removeModule)
		.post(controller.updateBusModule);
	app.route('/busmodule/:id/settings')
		.get(controller.getModule);
	app.route('/busmodule/:id/position')
		.post(controller.updatePosition);
};