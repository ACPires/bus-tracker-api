module.exports = function(app) {
	var controller = app.controllers.bus;
	
	//app.route('/busstop/:busstopId/bus')
	// app.route('/bus')
		// .post(controller.addBus);
	// app.route('/bus/:busId/details')
		// .get(controller.busDetails);
	// app.route('/bus/:busId/require/:busstopId')
		// .post(controller.userRequire);
	// app.route('/bus/:requireId')
		// .get(controller.waitingTime);
	app.route('/busLine')
		.post(controller.addLine);
		
};
