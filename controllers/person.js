var PersonModel = require('../models/person');

module.exports = {
		
	getById: function (req, res) {
		
		var d = new PersonModel(req.params.id);
		
		res.send(d.toJson());
	},
	
	toBeTested: function (id) {
		var person = new PersonModel(id);
		return person;	
	}
};