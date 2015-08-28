var base = require('../controllers/baseController');
var Person = require('../models/person');

var personController = function () {
};

personController.getById = function (req, res) {
	base.run(req, res, function (params) {
		var person = new Person(params.id);
		return person.toJson();
	});
};

personController.toBeTested = function (id) {
	var person = new Person(id);
	return person;
};

module.exports = personController;