var baseController = function () {
};

baseController.run = function (request, response, callback) {
    var callId = request.headers.c_id || new Date().getTime();

    var ret = {};
    
    try {
        ret.Status = 'Ok';
        ret.Content = callback(request.params);
    } catch (err) {
        ret.Status = 'Error';
        ret.Content = {
            'Error': err.message,
        };
    }

    response.setHeader('c_id', callId);
    response.send(ret);
};

module.exports = baseController;