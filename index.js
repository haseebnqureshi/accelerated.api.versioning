module.exports = function() {

    // you can require this or other modules using accelerated.api.module 
    var module = new require('accelerated.api.module')();
    
	var path = require('path');

    // set your module's key for reference by middlwares, models, and routes 
    module.setKey('versioning');

    // set your module's name for logging output 
    module.setName('Versioning Module');

    // you can choose to extend your module's middleware 
    module.appendMiddleware(function(express, app, models) {

		app.use('*', function(req, res, next) {
			
            var filepath = path.join(process.env.PWD, 'package.json');
			var packageJSON = require(filepath);
			var headers = {};
			
			headers[process.env.EXPRESS_API_VERSION_HEADER || 'X-Accelerated-API-Version'] = packageJSON.version;
			res.set(headers);
			
			next();
            
		});

        // modify app to include user authentication middleware 
        return app;

    });

    return module;

};