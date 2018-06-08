'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieEditCtrl', function ($routeParams, Movie, $location) {
	var that = this;
	that.editMovie = true;
	that.movie = {};
	Movie.one($routeParams.id).get().then(function(movie) {
		that.movie = movie;
		console.log(that.movie)
		that.saveMovie = function(){
			that.movie.save().then(function(){
				$location.path('/movie' + $routeParams.id);
			});
		};
	});
  });
