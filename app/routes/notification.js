module.exports = function(app) {

	var controller = app.controllers.notification;

	app.route('/notification/stop/:id_busmodule')
		.get(controller.sendAlertToStop);

};
