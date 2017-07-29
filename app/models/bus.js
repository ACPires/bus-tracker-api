var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){
	const bus = mongoose.Schema({
		serial: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		busLine: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusLine'
		}
	}, { collection: 'bus'});

	return mongoose.model('Bus', bus);

};