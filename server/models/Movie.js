var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
 
// create the movie schema
var MovieSchema = new mongoose.Schema( {
	title: {
		type:String,
		required: true
	},
	url: {
		type:String,
		required: true
	}
});

// exporting the model
module.exports = MovieSchema;	