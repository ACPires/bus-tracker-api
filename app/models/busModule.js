var mongoose = require('mongoose');

module.exports = function(){
	
	const busmodule = mongoose.Schema({
		bus: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Bus'
		},
		latitude:{
			type: Number
		},
		longitude:{
			type: Number
		},
		speed: {
			type: Number
		},
		lastRead: {
			type: Date
		},
		nextStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop'
		},
	}, { collection: 'busmodule'});

	return mongoose.model('BusModule', busmodule);

};