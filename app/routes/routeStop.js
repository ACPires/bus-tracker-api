module.exports = function(app){
	
	const controller = app.controllers.routeStop;
	
	app.route('/routestop')
		.get(controller.listRouteStop)
		.post(controller.addRouteStop);
	app.route('/routestop/:id')
		.get(controller.listRouteStop)
		.post(controller.addRouteStop)
		.delete(controller.removeRouteStop);
};