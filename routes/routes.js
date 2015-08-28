module.exports = function (app) {
	
	var PersonController = require('../controllers/person');
	app.get('/person/:id', PersonController.getById);
};