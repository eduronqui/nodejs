var express = require('express')
	, app = express();
	
var port = process.env.PORT || 3000;

var routes = require('./routes/routes');
routes(app);

var server = app.listen(port, function(){
	console.log('[%s] Server is listening on http://localhost:%s', app.settings.env, port);
});