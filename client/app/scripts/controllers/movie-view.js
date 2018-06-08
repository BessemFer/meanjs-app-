'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieViewCtrl', function ($routeParams, Movie) {
   var that = this;
   that.viewMovie = true;
   that.movie = Movie.one($routeParams.id).get().$object;
  });
