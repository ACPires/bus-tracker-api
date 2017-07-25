var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');

module.exports = function(){
	var bus = mongoose.Schema({
		serial: {
			type: String,
			required: true
		},
		busLine: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusLine'
		}
	});
	
	var busline = mongoose.Schema({
		busLine: {
			type: String,
			required: true
		}
	});
	
	var busterminal = mongoose.Schema({
		name: {
			type: String,
			required: true
		}
	});
	
	var route = mongoose.Schema({
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
	});
	
	var busmodule = mongoose.Schema({
		bus: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Bus'
		},
		latlong:{
			type: mongoose.Schema.Types.Point,
			required: true,
			geometry: {
				"type": "Point",
				"coordinates": [
				-46.57207489013672,
				-23.692761761024858
				]
			}
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
		alertBusDriver: {
			type: Boolean,
			default: false,
			required: true
		}
	});
	
	var busstop = mongoose.Schema({
		description: {
			type: String,
			required: true
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
				"coordinates": [
					-46.54838562011719,
					-23.69119965004867
				]
			}
		}
	});
	
	var routestop = mongoose.Schema({
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
	});
	
	var busstopmodule = mongoose.Schema({
		busStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop'
		}
	});
	
	var userrequire = mongoose.Schema({
		bus: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'Bus'
		},
		busStop: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'BusStop'
		},
		date: {
			type: Date,
			required: true
		}
	});
	
	return mongoose.model('BusLine', busline);
	return mongoose.model('BusTerminal', busterminal);
	return mongoose.model('BusStop', busstop);
	return mongoose.model('Bus', bus);
	return mongoose.model('Route', route);
	return mongoose.model('BusModule', busmodule);
	return mongoose.model('RouteStop', routestop);
	return mongoose.model('StopModule', busstopmodule);
	return mongoose.model('UserRequire', userrequire);
	
};