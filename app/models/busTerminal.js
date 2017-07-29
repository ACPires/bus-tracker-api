var mongoose = require('mongoose');

module.exports = function(){
	
	const busterminal = mongoose.Schema({
		name: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		}
	}, { collection: 'busterminal'});

	return mongoose.model('BusTerminal', busterminal);

};