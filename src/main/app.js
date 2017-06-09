/**
 * Creates the application root for an angular application at uri (/)
 *
 * @module app
 * 
 * @requires config/config
 * @requires ngRoute
 * @requires ngResource
 * @requires LocalStorageModule
 *
 * @param angular RequireJS inclusion of AngularJS library
 * @param config RequireJS inclusion of config/config
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the app
 *
 * @copyright Alert Logic, Inc 2014
 */

define([ 'angular',
         'config/config',
         'ngRoute', 'ngResource', 'LocalStorageModule',
         'tmdb/services/TMDBAPIService',
         'tmdb/partials/home/HomeController',
         'tmdb/partials/remoteImageLoader/RemoteImageLoader',
         'tmdb/directives/movieScore',
         'tmdb/partials/homeTwo/homeTwoController',
         'tmdb/directives/movieTile',
         'tmdb/partials/movieDetail/movieDetailController'],

    function(   angular, config, $resource, $location, LocalStorageModule,
                TMDBAPIService, HomeController,RemoteImageLoader,
                movieScore, homeTwoController, movieTile, movieDetailController ) {
    	"use strict";

        /** @constructs app */
        var angularModules = config.standardAngularModules.concat( 'LocalStorageModule' );

        /** @constructs app */
        var app = angular.module("app", angularModules );

        //  Configure $locationProvider and $routeProvider to allow top-level navigation within this route
    	app.config(['$locationProvider', function($locationProvider) {
                            
            $locationProvider.html5Mode(false);
            
    	}]);

        

        app.service( "TMDBAPIService", TMDBAPIService);
        app.directive( "movieScore", movieScore);
        app.directive( "movieTile", movieTile);
        app.controller( "HomeController", HomeController );
        app.controller( "RemoteImageLoader", RemoteImageLoader );
        app.controller( "homeTwoController", homeTwoController );
        app.controller( "movieDetailController", movieDetailController );
        

        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when( '/', { templateUrl: '/tmdb/partials/home/home.html', controller: 'HomeController' } );
            $routeProvider.when( '/hometwo', { templateUrl: '/tmdb/partials/homeTwo/homeTwo.html', controller: 'homeTwoController' } );
            $routeProvider.when( '/movie/:id', { templateUrl: '/tmdb/partials/movieDetail/movieDetail.html', controller: 'movieDetailController' } );
            $routeProvider.otherwise( {
                template: function() {
                    throw 'An internal error occurred because the given path does not resolve to a known route.';
                }
            });
        }]);

    	return app;
    }
);