module.exports = function(app) {
	var controller = app.controllers.bus;
	
	app.route('/busstop/:busstopId')
		.get(controller.busList);
	app.route('/bus/:busId/details')
		.get(controller.busDetails);
	app.route('/bus/:busId/require/:busstopId')
		.post(controller.userRequire);
	app.route('/bus/:requireId')
		.get(controller.waitingTime);
};
