'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function ($scope, Movie, $location) {
    var that = this;
	that.movie = {};
	that.saveMovie = function() {
		Movie.post(that.movie).then(function () {
			$location.path('/movies');
		});
	};
  });
