# vhost-manager
Run multiple apps at the same port

## Description
The main intent of this app is allow admins to manage distinct apps and run them at the same port, avoiding the configurations
required as much as possible. It is designed to attach one app to one subdomain.

## Installation

Clone or download this repo, open a terminal inside and run:

```
npm install
```

## Run
```
node app.js
```

## Docs & Examples
### Steps to "install" a new app

Put the app's root folder in /apps.

Edit config.js apps section to register your new app.

If your app is a standalone app, you must change a little bit of code to avoid auto run behaviour. Your app will no longer run
itself. vhost-manager will run it for you.

### config.js file example

```JS
module.exports = {
  port: 8080,
  appsDir: './apps/',
  apps: [
    {
      script: 'my-new-app/app',     // JS main script of your app
      subdomain: 'mynewapp.localhost' // subdomain to access your app
    }
  ]
}
```
Once you've configured your new app, you can access it at newapp.localhost:8080.

You can use port 80 for production.

You can add as much apps as you want. Just add another app object block to apps array.

### App main script example

Let's say you have a standalone app like this:
```JS
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```
Just remove or comment the app.listen call and export your app like this
```JS
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*  NOTE THAT WE'VE REMOVED THE STAND ALONE BEHAVIOUR
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/

module.exports = app;
```
