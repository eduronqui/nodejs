var express = require('express');
var app = express();

// middleware
app.use('/', function (req, res, next) {
	if (!req.headers.c_id) 
		req.headers.c_id = new Date().getTime();

	log.Info('Request: '+ req.headers.c_id);	
	res.setHeader('c_id', req.headers.c_id);
	next();
});

// environment vars
app.set('port', 3000);

var Logtool = require('./tools/logtools');
var log = new Logtool();

var routes = require('./routes/routes');
routes(app);

var server = app.listen(app.get('port'), function(){
	console.log('[%s] Server is listening on http://localhost:%s', app.settings.env, app.get('port'));
});