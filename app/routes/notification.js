module.exports = function(app) {

	var controller = app.controllers.notification;

	app.route('/notification/stop/:id_busmodule')
		.get(controller.sendAlertToStop);

	app.route('/notification/user/:id_user')
		.get(controller.sendAlertToUser);

};
