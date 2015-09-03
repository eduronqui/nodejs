var baseController = function () {
};

baseController.run = function (request, response, callback) {
    var ret = {};
    
    try {
        ret = {
            Status: 'Ok',
            Content: callback(request.params)
        };
    } catch (err) {
        ret = {
            Status: 'Error',
            Content: {
                'Error': err.message
            }
        };
    }

    response.send(ret);
};

module.exports = baseController;