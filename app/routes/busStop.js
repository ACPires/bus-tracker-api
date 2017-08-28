module.exports = function(app) {
	
	var controller = app.controllers.busStop;

	app.route('/busstop')
		.post(controller.addStop);
		
};