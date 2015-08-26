module.exports = function (assert) {

	var personController = require('../../controllers/person');

	describe('PersonController', function () {

		describe('toBeTested()', function () {

			it('Should pass', function () {
				var resp = personController.toBeTested(20);
				assert.typeOf(resp.ID,'number');
				assert.equal(20, resp.ID);
			});

			it('Should fail', function () {
				var resp = personController.toBeTested(20);
				assert.typeOf(resp.ID,'number');
				assert.equal(2, resp.ID);
			});
		});
	});
};