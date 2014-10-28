'use strict';

angular.module('popcornApp', ['ngRoute', 'popcornApp.controllers', 'popcornApp.services'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/templates/movies.html',
		controller: 'MoviesController'
	});
	$routeProvider.when('/movie/:movie_id', {
		templateUrl: '/templates/movie.html',
		controller: 'MovieController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
});
