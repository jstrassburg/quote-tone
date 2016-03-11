'use strict';

/**
 * @ngdoc function
 * @name quoteToneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteToneApp
 */
angular.module('quoteToneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.emotionalLables =['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness'];
    $scope.emotionalData = [
        [0.65, 0.59, 0.90, 0.81, 0.56]
    ];
    $scope.writingLables =['Analytical', 'Confident', 'Tentative'];
    $scope.writingData = [
        [0.25, 0.09, 0.99]
    ];
    $scope.socialLables =['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];
    $scope.socialData = [
        [0.69, 0.22, 0.82, 0.42, 0.02]
    ];
  });
