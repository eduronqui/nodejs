module.exports = function (app) {

	var personController = require('../controllers/person');
	app.get('/person/:id', personController.getById);
};