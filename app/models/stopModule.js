var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){

	const busstopmodule = mongoose.Schema({
		_id: {
			type: Number,
			index: {
				unique: true
			}
		},
		busStop: {
			type: mongoose.Schema.ObjectId,
			ref: 'busstop',
			index: {
				unique: true
			}
		},
		
	}, {collection: 'busstopmodule'});

	return mongoose.model('StopModule', busstopmodule);
	
};