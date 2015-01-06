'use strict';

/**
 * @ngdoc overview
 * @name batchUtilApp
 * @description
 * # batchUtilApp
 *
 * Main module of the application.
 */
angular
  .module('batchUtilApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
	'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/input",{
        templateUrl: 'views/input.html',
        controller: 'InputBatchCtrl'
      })
      .when("/parse",{
        templateUrl: 'views/parse.html',
        controller: 'ParseBatchCtrl'
      })
      .when("/settings",{
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

