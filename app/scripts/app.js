'use strict';

/**
 * @ngdoc overview
 * @name quoteToneApp
 * @description
 * # quoteToneApp
 *
 * Main module of the application.
 */
angular
  .module('quoteToneApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
