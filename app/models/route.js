var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){

	const route = mongoose.Schema({
		busLine: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusLine'
		},
		busTerminalA: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusTerminal'
		},
		busTerminalB: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusTerminal'
		}
	}, { collection: 'route'});
	
	return mongoose.model('Route', route);
	
};