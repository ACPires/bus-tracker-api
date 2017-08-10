var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){
	
	const busmodule = mongoose.Schema({
		bus: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Bus'
		},
		latlong:{
			type: mongoose.Schema.Types.Point,
			required: true,
			coordinates: [ Number ]
		},
		speed: {
			type: Number,
			required: true
		},
		last_read: {
			type: Date,
			required: true
		},
		nextStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop'
		},
	}, { collection: 'busmodule'});

	return mongoose.model('BusModule', busmodule);

};