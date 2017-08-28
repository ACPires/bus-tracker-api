module.exports = function(app) {
	var controller = app.controllers.busTerminal;

	app.route('/busterminal')
		.get(controller.listTerminals)
		.post(controller.addTerminal);	
	app.route('/busterminal/:id')
		.get(controller.getTerminal)
		.delete(controller.removeTerminal);
	app.route('/listterminals')
		.get(controller.listTerminals);	


};