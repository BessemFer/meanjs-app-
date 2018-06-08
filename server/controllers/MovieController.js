var restful = require('node-restful');

module.exports = function(app, route) {
	// setuo the controller for REST
	
	var rest = restful.model(
	'movie',
	app.models.movie
	).methods(['get', 'put', 'post', 'delete']);
	
	// regestring this endpoint with the application
	rest.register(app, route);
	
	// return the middeleware
	
	return function(req, res, next) {
		next();
	}
}