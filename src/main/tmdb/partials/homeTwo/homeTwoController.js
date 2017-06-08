define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
          
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var HomeTwoController = function($scope, TMDBAPIService ) {

            $scope.view   = {
                movies: [],
                showText: true,
                sort: true,
                dato: {}
            };

            $scope.hola_nelson = "Hello World Nelson in HomeTwo";
    

            var api = TMDBAPIService.Discover();
                api.discover.movies().then(function ( response ) {
                    $scope.view.movies = response.data;
                });

            $scope.hide = function(){
                    $scope.view.showText = !$scope.view.showText;
                };

            $scope.sort = function(){
                    $scope.view.sort = !$scope.view.sort;
                };
            
        };

        HomeTwoController.$inject = [ '$scope', 'TMDBAPIService' ];

        return HomeTwoController;
    }
);