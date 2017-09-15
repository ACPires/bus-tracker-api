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
			type: Date,
			default: Date.now
		},
		nextStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop'
		},
		updateTime: {
			type: Number,
			default: 10000
		}
	}, { collection: 'busmodule'});

	return mongoose.model('BusModule', busmodule);

};