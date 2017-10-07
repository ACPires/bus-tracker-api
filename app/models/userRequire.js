var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){

	const userrequire = mongoose.Schema({
		busModule: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'BusModule',
		},
		busStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop',
		},
		date: {
			type: Date,
			default: Date.now,
			required: true
		}
	}, { collection: 'userrequire'});

	return mongoose.model('UserRequire', userrequire);
	
};