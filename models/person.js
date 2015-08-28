var Person = function (id) {
	this.Id = id;
};

Person.prototype.toJson = function () {
	var obj = {
		'ID': this.Id
	};

	return obj;
};

module.exports = Person;