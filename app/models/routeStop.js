var mongoose = require('mongoose');

module.exports = function(){	
	const routestop = mongoose.Schema({
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
		},
		latitude: {
			type: Number,
			required: true
		},
		longitude: {
			type: Number,
			required:true
		},
	}, { collection: 'routestop'});

	return mongoose.model('RouteStop', routestop);
	
};

/*
	Dados para teste
	
route: ObjectId("59b703b823d1576b88b53744"),
busStop: ,
position: 1,
latitude: -23.692134,
longitude: -46.548503

Getúlio
route: ObjectId("59b703b823d1576b88b53744"),
busStop: ObjectId("599f5cdc2e9ecf18e0419fb9"),
position: 2,
latitude: -23.691379,
longitude: -46.5484015

Baeta
route: ObjectId("59b703b823d1576b88b53744"),
busStop: ObjectId("599f5c9a2e9ecf18e0419fb8"),
position: 3,
latitude: -23.69119965004867,
longitude: -46.54838562011719
*/