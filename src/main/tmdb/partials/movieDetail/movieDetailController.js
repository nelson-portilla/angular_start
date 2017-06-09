define( [ 'angular',
          'ngRoute',
          'config/config',
          'tmdb/services/TMDBAPIService'],
          
    function( angular, $routeParams, config, TMDBAPIService ) {
        "use strict";

        var movieDetailController = function($scope, TMDBAPIService, $routeParams ) {

            $scope.view   = {
                    enus: true,
                    currency_symbol: "US$",
                    details: {}
                };

            // console.log($routeParams.id);
            var api = TMDBAPIService.Movie();
            api.movie.movie($routeParams.id).then( function ( response ) {
                $scope.view.details = response.data;
            
            $scope.pesos_cop = function(){
                    // console.log("Entro en pesos_cop");
                    $scope.view.enus=!$scope.view.enus;
                    $scope.view.details.budget=$scope.view.details.budget*2800;
                    $scope.view.currency_symbol="COP$";
                };
            $scope.pesos_us = function(){
                    // console.log("Entro en pesos_cop");
                    $scope.view.enus=!$scope.view.enus;
                    $scope.view.currency_symbol="US$";
                    $scope.view.details.budget=$scope.view.details.budget/2800;
                };
            });

        };

        movieDetailController.$inject = [ '$scope', 'TMDBAPIService', '$routeParams' ];

        return movieDetailController;
    }
);