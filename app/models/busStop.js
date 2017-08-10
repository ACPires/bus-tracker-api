var mongoose = require('mongoose');

module.exports = function(){
	
	const busstop = mongoose.Schema({
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
		latlong: {
			type: [Number],
			required: true
		}
	}, { collection: 'busstop'});

	return mongoose.model('BusStop', busstop);
	
};