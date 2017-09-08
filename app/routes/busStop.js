module.exports = function(app) {
	
	var controller = app.controllers.busStop;

	app.route('/busstop')
		.post(controller.addStop);
	app.route('/busstop/:id/bus')
		.get(controller.listBus);
	app.route('/busstop')
		.get(controller.listBusStops);
		
};