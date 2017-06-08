define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var movieTileController = function($scope) {

            console.log("ENTRO");
            $scope.view = {
                images: config.apiImg
            };

            $scope.clickOne = function(){
                console.log("en el click one");
            };

            $scope.clickTwo = function(){
                console.log("en el click two");
            };
        };

        movieTileController.$inject = [ '$scope' ];

        return movieTileController;
    }
);