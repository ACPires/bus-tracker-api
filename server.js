var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/farolApi');
app.firebase = require('./config/firebase.js')();

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server listening at port: '+ app.get('port'));
});
