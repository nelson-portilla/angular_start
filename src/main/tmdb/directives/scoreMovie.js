define( [ 'angular',
          'tmdb/partials/scoreMovie/scoreMovieController' ], 
    function( angular, scoreMovieController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: scoreMovieController,
                templateUrl: '/tmdb/partials/scoreMovie/scoreMovie.html',
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