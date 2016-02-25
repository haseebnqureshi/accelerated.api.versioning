
## Usage
This module seamlessly adds API versioning into your accelerated.api app by returning your ```package.json``` version via response headers. By default, the header name is ```X-Accelerated-API-Version```, but you can override that in your accelerated.api ```env.json```:

```
"EXPRESS_API_VERSION_HEADER": "Your-API-Version-Header"
```


## Quick Start
This repo is an easy-to-use npm template to create modules for accelerated.api. Simply clone this repo and:

1. Change your ```moduleKey``` and ```moduleName``` in index.js. (```moduleKey``` is a key that uniquely identies your module in the context of your app.)

2. Update your ```package.json``` with your information and module information.

3. Now actually create your module by utilizing the three CommonJS modules in this repo, ```middleware```, ```model```, and ```route```. Please note the structure and direct injected variables in each CommonJS module and what each is returning.

4. Run ```npm publish``` in your command line to publish directly onto npm, and viola! You've got a npm packaged module for accelerated.api.

## Using in accelerated.api
Okay, so how do you use this module in your accelerated.api project? Here's an example:

```

var api = require('accelerated.api');

var example = require('acceleratd.api.module');

api.useMiddlewares([ 
	[example.key, example.middleware]
]);

api.useModels([
	[example.key, example.model]
]);

api.useRoutes([
	[example.key, example.route]
]);

api.run();

```
