module.exports = function(app) {

	var controller = app.controllers.bus;
	
	app.route('/bus')
		.get(controller.listBuses);
	app.route('/bus/:id')
		.get(controller.listBus)
		.post(controller.addBus)
		.delete(controller.removeBus);

};