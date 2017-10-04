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
		actualRouteStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'RouteStop'
		},
		nextRouteStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'RouteStop'
		},
		updateTime: {
			type: Number,
			default: 10000
		}
	}, { collection: 'busmodule'});

	return mongoose.model('BusModule', busmodule);

};