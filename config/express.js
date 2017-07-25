var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	
	var app = express();
	
	//variável de ambiente
	app.set('port', 3000);
	//middlewares
	app.use(express.static('./public'));
	app.set('views', './app/views');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
			
	return app;
};