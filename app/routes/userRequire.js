module.exports = function(app) {
	
	const controller = app.controllers.userRequire;
	
	app.route('/userRequire')
		.get(controller.listRequires);
	app.route('/busmodule/:busmoduleid/busstop/:busstopserial')
		.post(controller.addRequire);
	app.route('/userRequire/:id')
		.get(controller.listRequires)
		.post(controller.updateRequire)
		.delete(controller.removeRequire);
};