var mongoose = require('mongoose');

var options = { 
	db: { native_parser: true },  
	user: 'megatron',
	pass: 'megatron500'
}

module.exports = function(uri, options){
	mongoose.set('debug', true);
	
	mongoose.connect(uri, options);
	
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

