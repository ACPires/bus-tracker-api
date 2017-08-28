module.exports = function(app) {
	
	var controller = app.controllers.busModule;
	
	app.route('/busmodule/:id/settings')
		.get(controller.getModule);
		
};