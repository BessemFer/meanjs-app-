'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDeleteCtrl', function ($routeParams, Movie, $location) {
    var that = this;
	that.movie = Movie.one($routeParams.id).get().$object;
	that.deleteMovie = function() {
		that.movie.remove().then(function () {
			$location.path('/movies');
		});
	};
	
	that.back = function() {
		$location.path('/movie/'+ $routeParams.id);
	};
	
  });
