
define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var HomeController = function($scope ) {

        $scope.hola_nelson = "Hello World  Nelson";

        };

        HomeController.$inject = [ '$scope' ];

        return HomeController;
    }
);