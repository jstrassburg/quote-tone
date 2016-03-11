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
    text: 'A thing that is great is great.',
    author: 'Some One',
    emotionalData: [[0.03, 0.04, 0.16, 0.77, 0.06]],
    writingData: [[0.84, 0.00, 0.00]],
    socialData: [[0.71, 0.40, 0.15, 0.01, 0.37]],
  },
  {
    text: 'Another thing that I said that was awesome.',
    author: 'Someone Else',
    emotionalData: [[0.23, 0.09, 0.28, 0.17, 0.12]],
    writingData: [[0.95, 0.00, 0.00]],
    socialData: [[0.07, 0.03, 0.89, 0.72, 0.93]],
  },
];

  });
