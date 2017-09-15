var mongoose = require('mongoose');

module.exports = function(){
	
	const busstop = mongoose.Schema({
		serial: {
			type: Number,
			required: true,
			index:{
				unique: true
			}
		},
		description: {
			type: String,
			required: true,
			index:{
				unique: true
			}
		},
		address: {
			type: String,
			required: true
		},
		latitude: {
			type: Number,
			required: true
		},
		longitude: {
			type: Number,
			required: true
		}
	}, { collection: 'busstop'});

	return mongoose.model('BusStop', busstop);
	
};