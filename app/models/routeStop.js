var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){	
	const routestop = mongoose.Schema({
		route: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Route'
		},
		busStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop'
		},
		position: {
			type: Number,
			required: true
		}
	}, { collection: 'routestop'});

	return mongoose.model('RouteStop', routestop);
	
};