module.exports = function(express, app, models) {

	/*------
	Dependencies
	------------*/

	var path = require('path');
	var filepath = path.join(process.env.PWD, 'package.json');
	var packageJSON = require(filepath);

	/*------
	Helpers
	------------*/



	/*------
	Middleware
	------------*/

	app.use('*', function(req, res, next) {
		var headers = {};
		headers[process.env.EXPRESS_API_VERSION_HEADER || 'X-Accelerated-API-Version'] = packageJSON.version;
		res.set(headers);
		next();
	});

	/*------
	Returning App (ensuring app waterfalls)
	------------*/

	return app;

};