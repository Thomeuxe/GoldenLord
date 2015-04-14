'use strict';

/**
 * @ngdoc overview
 * @name goldenLordApp
 * @description
 * # goldenLordApp
 *
 * Main module of the application.
 */
angular
  .module('goldenLordApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
