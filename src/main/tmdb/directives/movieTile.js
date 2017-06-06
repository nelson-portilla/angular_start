define( [ 'angular',
          'tmdb/partials/movieTile/movieTileController' ], 
    function( angular, movieTileController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: movieTileController,
                templateUrl: '/tmdb/partials/movieTile/movieTile.html',
                restrict: 'E',
                scope: {
                    movie: '=ngModel',
                    even: '='
                }
            };
        };
    }
);