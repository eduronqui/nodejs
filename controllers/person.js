var Person = require('../models/person');

module.exports = {
		
	getById: function (req, res) {
		
		var person = new Person(req.params.id);
		
		res.send(person.toJsonString());
	},
	
	toBeTested: function (id) {
		var person = new Person(id);
		return person;	
	}
};