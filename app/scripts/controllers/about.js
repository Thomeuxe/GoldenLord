'use strict';

/**
 * @ngdoc function
 * @name goldenLordApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goldenLordApp
 */
angular.module('goldenLordApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
