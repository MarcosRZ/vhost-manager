var express = require('express')
var vhost = require('vhost');

var config = require('./config')

var vhostApp = express();

config.apps.forEach(function(app){
	
	vhostApp.use(vhost(app.subdomain, require(config.appsDir + app.script)))
	console.log("[APP]: (" + app.subdomain + " -> " + app.script + ")")
})

vhostApp.listen(config.port, function(){
	console.log('VHOST started successfully!')
	console.log('Port: ' + config.port)
	console.log('Apps Dir: ' + config.appsDir)
});


