define( [ 'angular' ],
        function(angular) {
           'use strict';

            var config = angular.module('config', []);

            /**
             * These are the AMD modules that every *application instance* should require prior to execution.
             * ngStart's src/main/main.js file should include the appropriate requirejs configuration to
             * facilitate the inclusion for objects stored in idiosyncratic locations.
             */
            config.standardRequireModules = ['angular', 'ngRoute', 'app'];

            /**
             * These are the angular modules that every application module should require in order to execute.
             */
            config.standardAngularModules = ['ngRoute','config'];

             
            config.requireConfiguration = {
                baseUrl: "/",
                paths: {
                    'angular': 'vendor/angular/angular.min',
                    'ngRoute': 'vendor/angular-route/angular-route.min'
                },
                shim: {
                    'angular': { deps: [], exports: 'angular' },
                    'ngRoute': {deps: ['angular']}
                }
            };

            return config;
        } );
