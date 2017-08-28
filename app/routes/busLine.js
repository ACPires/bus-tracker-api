module.exports = function(app) {

	var controller = app.controllers.busLine;
	
	app.route('/busLine')
		.post(controller.addLine);
		
};