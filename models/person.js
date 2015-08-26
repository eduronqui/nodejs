module.exports = function Person(id) {
	this.ID = id;
	
	this.toJson = function () {
		return { 'ID': this.ID };
	};
};