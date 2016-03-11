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
    $scope.writingLables =['Analytical', 'Confident', 'Tentative'];
    $scope.socialLables =['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];

    $scope.quotes = [
      {
        text: 'Quote 1',
        author: 'Author 1',
        emotionalData: [[0.65, 0.59, 0.90, 0.81, 0.56]],
        writingData: [[0.25, 0.22, 0.84]],
        socialData: [[0.69, 0.22, 0.82, 0.42, 0.02]]
      },
      {
        text: 'Quote 2',
        author: 'Author 2',
        emotionalData: [[0.99, 0.22, 0.33, 0.45, 0.6]],
        writingData: [[0.95, 0.52, 0.8]],
        socialData: [[0.29, 0.62, 0.12, 0.12, 0.12]]
      }
    ];
  });
