module.exports = function(app) {
	
	const controller = app.controllers.userRequire;
	
	app.route('/userRequire')
		.get(controller.listRequires)
		.post(controller.addRequire);
	app.route('/userRequire/:id')
		.get(controller.listRequires)
		.post(controller.addRequire)
		.delete(controller.removeRequire);
};