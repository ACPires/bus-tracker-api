var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){

	const userrequire = mongoose.Schema({
		bus: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'Bus',
		},
		busStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop',
		},
		date: {
			type: Date,
			required: true
		}
	}, { collection: 'userrequire'});

	return mongoose.model('UserRequire', userrequire);
	
};