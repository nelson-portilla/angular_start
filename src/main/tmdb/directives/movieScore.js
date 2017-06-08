define( [ 'angular',
          'tmdb/partials/movieScore/movieScoreController' ], 
    function( angular, movieScoreController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: movieScoreController,
                templateUrl: '/tmdb/partials/movieScore/movieScore.html',
                restrict: 'E',
                scope: {
                    val: '=', //? is to specify that the value is optional
                    prefix: '@', //string
                    action: '&' //function
                }
            };
        };
    }
);