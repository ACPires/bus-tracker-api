module.exports = function(app){
	
	const controller = app.controllers.routePoint;
	
	app.route('/routepoint')
		.get(controller.listRoutePoint)
		.post(controller.addRoutePoint);
	app.route('/routepoint/:id')
		.get(controller.listRoutePoint)
		.post(controller.addRoutePoint)
		.delete(controller.removeRoutePoint);
};