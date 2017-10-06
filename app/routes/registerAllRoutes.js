module.exports = function(app) {
	var register = app.models.registerAllRoutes;

	app.route('/resetRegisters')
		.get(register.registerAll);

};
