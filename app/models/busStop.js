var GeoJSON = require('mongoose-geojson-schema');
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
			type: mongoose.Schema.Types.Point,
			required: true,
			geometry: {
				"type": "Point",
				"coordinates": [ Number ]
			},

		}
	}, { collection: 'busstop'});

	return mongoose.model('BusStop', busstop);
	
};