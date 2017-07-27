var mongoose = require('mongoose');

module.exports = function(){
	var busLine = mongoose.Schema({
		busLine: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		}
	});
	
	return mongoose.model('BusLine', busLine);
};