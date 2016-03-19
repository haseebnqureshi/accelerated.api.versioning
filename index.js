module.exports = (function() {

    var path = require('path');

    //loading accelerated's module with your appropriate settings
    var module = new require('accelerated.api.module')({

        //set your module's key for reference by middlwares, models, and routes 
        key: 'versioning',

        //set your module's name for logging output 
        name: 'Versioning Module',

        //you can choose to extend your module's middleware 
        appendMiddleware: function(express, app, models, settings) {

            app.use('*', function(req, res, next) {
                
                var filepath = path.join(process.env.PWD, 'package.json');
                var packageJSON = require(filepath);
                var headers = {};
                
                headers[process.env.EXPRESS_API_VERSION_HEADER || 'X-Accelerated-API-Version'] = packageJSON.version;
                res.set(headers);
                
                next();
                
            });

            //modify app to include user authentication middleware 
            return app;

        }

    });

    //returning for use by accelerated.api
    return module;

})();
