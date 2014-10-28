'use strict';

angular.module("popcornApp.controllers")
.controller("MovieController", function($scope, $routeParams, MoviesService, $sce) {
		console.log($routeParams);

		$scope.movies = MoviesService.movies();
		$scope.movie = _.find($scope.movies, function(v) {
			return v.youtubeId == $routeParams.movie_id;
		});
		$scope.movie.youtubeUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0");
	}
);
