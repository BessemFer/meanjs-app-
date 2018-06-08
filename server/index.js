var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodeOverride = require('method-override');
var mongo = require('mongodb');
var _ = require('lodash');
mongoose.Promise = require('bluebird');
// create the app

var app = express();

// adding Middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodeOverride('X-HTTP-Method-Override'));

// Cors Support

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
// testing the server 

/*
app.use('/hello', function(req, res, next) {
	res.send('Hello Bessm!!');
	next();
});
*/

// connect to MongoDB

mongoose.connect('mongodb://localhost/mymeanapp');
mongoose.connection.once('open', function() {
	
	//load the models
	app.models = require('./models/index');
	//load the routes file
	var routes = require('./routes');
	_.each(routes, function(controller, route) {
		app.use(route, controller(app, route));
	});
	
	console.log('listening on port 3000....');
	app.listen(3000);
});

