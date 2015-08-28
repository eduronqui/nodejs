module.exports = function (assert) {

	var personController = require('../../controllers/person');

	describe('PersonController', function () {

		describe('toBeTested()', function () {

			it('Should pass', function () {
				var resp = personController.toBeTested(20);
				assert.typeOf(resp.Id,'number');
				assert.equal(20, resp.Id);
			});

			it('Should fail', function () {
				var resp = personController.toBeTested(20);
				assert.typeOf(resp.Id,'number');
				assert.equal(2, resp.Id);
			});
		});
	});
};