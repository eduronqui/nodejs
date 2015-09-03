var bunyan = require('bunyan');

var Log = function () {
	var options = {
		name: 'nodejs',
		streams: [
			{
				level: 'info',
				path: './logs/verbose.json'
			},
			{
				level: 'error',
				path: './logs/error.json'
			}]
	};

	this.logger = bunyan.createLogger(options);
};

Log.prototype.Info = function (log) {
	this.logger.info(log);
};

Log.prototype.Error = function (log) {
	this.logger.error(log);
};

module.exports = Log;