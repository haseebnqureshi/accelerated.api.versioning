
## Usage
This module seamlessly adds API versioning into your accelerated.api app by returning your ```package.json``` version via response headers. By default, the header name is ```X-Accelerated-API-Version```, but you can override that in your accelerated.api ```env.json```:

```
"EXPRESS_API_VERSION_HEADER": "Your-API-Version-Header"
```

Once you include ```accelerated.api.versioning``` into your project dependencies and ```npm install accelerated.api.versioning --save``` your project (thereby installing this module), you'll want to include the module like this:

```

var api = require('accelerated.api');

var apiVersioning = new require('acceleratd.api.versioning')();

api.useMiddlewares([ 
	[apiVersioning.key, apiVersioning.middleware]
]);

api.run();

```
