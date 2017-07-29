var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){

	const busstopmodule = mongoose.Schema({
		busStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop',
			index: {
				unique: true
			}
		},
		
	}, { collection: 'busstopmodule'});

	return mongoose.model('StopModule', busstopmodule);
	
};