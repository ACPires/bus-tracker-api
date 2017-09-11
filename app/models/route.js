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

/* 
	Dados para teste
287P - S.A.O.-Piraporinha
busLine: ObjectId("597be124973e6424f0f1c6c9"),
busTerminalA: ObjectId("597be8c30bb9c10824899cb5"),
busTerminalB: ObjectId("597be8400bb9c10824899cad")

284M
busLine: ObjectId("597be0dafa2ae91bdc5a7238"),
busTerminalA: ObjectId("597be8550bb9c10824899cb0"),
busTerminalB: ObjectId("597be8630bb9c10824899cb1")

285
busLine: ObjectId("597be0dffa2ae91bdc5a7239"),
busTerminalA: ObjectId("597be8550bb9c10824899cb0"),
busTerminalB: ObjectId("597be8910bb9c10824899cb2")

*/