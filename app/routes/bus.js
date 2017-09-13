module.exports = function(app) {

	var controller = app.controllers.bus;
	
	app.route('/bus/:id')
		.get(controller.listBus)
		.post(controller.addBus)
		.delete(controller.removeBus);

};