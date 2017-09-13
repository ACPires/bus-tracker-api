module.exports = function(app) {
	
	var controller = app.controllers.busStop;

	app.route('/busstop/:id/bus')
		.get(controller.listBus);
	app.route('/busstop/:id')
		.get(controller.listBusStops)
		.post(controller.addStop)
		.delete(controller.removeBusStop);
		
};