<<<<<<< HEAD
var mongoose = require('mongoose');
var connection;

module.exports = function(uri){
	mongoose.set('debug', true);
	
	mongoose.connect(uri);
	
	mongoose.connection.on('connected', function(){
		console.log('Mongoose! Conectado em '+uri);
	});
	
	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose! Desconectado de '+uri);
	});
	
	mongoose.connection.on('error', function(){
		console.log('Mongoose! Erro na conexão: '+uri);
	});
	
	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Desconectado pelo término da aplicação');
			process.exit(0);
		});
	});
};


	
=======
var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.set('debug', true);
	
	mongoose.connect(uri);
	
	mongoose.connection.on('connected', function(){
		console.log('Mongoose! Conectado em '+uri);
	});
	
	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose! Desconectado de '+uri);
	});
	
	mongoose.connection.on('error', function(){
		console.log('Mongoose! Erro na conexão: '+uri);
	});
	
	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Desconectado pelo término da aplicação');
			process.exit(0);
		});
	});
};
>>>>>>> 4bbfee810b395136bb78745d2355398de8965fca
