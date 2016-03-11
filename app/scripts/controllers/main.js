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
    text: 'Sometimes by losing a battle you find a new way to win the war.',
    author: 'Donald Trump',
    emotionalData: [[0.21, 0.09, 0.16, 0.06, 0.12]],
    writingData: [[0.43, 0.00, 0.57]],
    socialData: [[0.44, 0.96, 0.38, 0.45, 0.26]],
  },
  {
    text: 'Part of being a winner is knowing when enough is enough. Sometimes you have to give up the fight and walk away, and move on to something that\'s more productive.',
    author: 'Donald Trump',
    emotionalData: [[0.28, 0.07, 0.29, 0.02, 0.10]],
    writingData: [[0.96, 0.00, 0.95]],
    socialData: [[0.21, 0.59, 0.52, 0.54, 0.52]],
  },
  {
    text: 'It\'s not like I\'m anti-China. I just think it\'s ridiculous that we allow them to do what they\'re doing to this country, with the manipulation of the currency, that you write about and understand, and all of the other things that they do.',
    author: 'Donald Trump',
    emotionalData: [[0.16, 0.65, 0.04, 0.00, 0.16]],
    writingData: [[0.98, 0.93, 0.90]],
    socialData: [[0.07, 0.03, 0.89, 0.79, 0.92]],
  },
  {
    text: 'That\'s one of the nice things. I mean, part of the beauty of me is that I\'m very rich. So if I need $600 million, I can put $600 million myself. That\'s a huge advantage. I must tell you, that\'s a huge advantage over the other candidates.',
    author: 'Donald Trump',
    emotionalData: [[0.76, 0.05, 0.11, 0.02, 0.05]],
    writingData: [[0.92, 0.92, 0.00]],
    socialData: [[0.02, 0.10, 0.80, 0.87, 0.98]],
  },
  {
    text: 'Our politicians are stupid. And the Mexican government is much smarter, much sharper, much more cunning. And they send the bad ones over because they don\'t want to pay for them. They don\'t want to take care of them. Why should they when the stupid leaders of the United States will do it for them?',
    author: 'Donald Trump',
    emotionalData: [[0.47, 0.61, 0.03, 0.00, 0.07]],
    writingData: [[0.36, 0.00, 0.00]],
    socialData: [[0.07, 0.02, 0.88, 0.52, 0.89]],
  },
  {
    text: 'If I were a liberal Democrat, people would say I\'m the super genius of all time. The super genius of all time. If you\'re a conservative Republican, you\'ve got to fight for your life. It\'s really an amazing thing.',
    author: 'Donald Trump',
    emotionalData: [[0.10, 0.14, 0.21, 0.14, 0.14]],
    writingData: [[0.00, 0.98, 0.00]],
    socialData: [[0.07, 0.17, 0.97, 0.68, 0.69]],
  },
  {
    text: 'Finally, let understand that when we stand together, we will always win. When men and women stand together for justice, we win. When black, white and Hispanic people stand together for justice, we win.',
    author: 'Bernie Sanders',
    emotionalData: [[0.08, 0.24, 0.13, 0.20, 0.15]],
    writingData: [[0.71, 0.96, 0.00]],
    socialData: [[0.01, 0.96, 0.98, 0.99, 0.61]],
  },
  {
    text: 'Let us wage a moral and political war against the billionaires and corporate leaders, on Wall Street and elsewhere, whose policies and greed are destroying the middle class of America.',
    author: 'Bernie Sanders',
    emotionalData: [[0.43, 0.61, 0.17, 0.00, 0.01]],
    writingData: [[0.00, 0.00, 0.00]],
    socialData: [[0.79, 0.37, 0.54, 0.20, 0.39]],
  },
  {
    text: 'What the American people want to see in their president is somebody who not necessarily can win every fight, but they want to see him stand up and fight for what he believes, take his case to the American people.',
    author: 'Bernie Sanders',
    emotionalData: [[0.23, 0.46, 0.07, 0.01, 0.12]],
    writingData: [[0.63, 0.00, 0.05]],
    socialData: [[0.10, 0.04, 0.89, 0.72, 0.85]],
  },
  {
    text: 'If you ask me about my views on the environment, on women\'s rights, on gay rights, I am liberal. I don\'t have a problem with that at all. Some of my best friends are liberal.',
    author: 'Bernie Sanders',
    emotionalData: [[0.08, 0.48, 0.03, 0.03, 0.17]],
    writingData: [[0.24, 0.96, 0.67]],
    socialData: [[0.04, 0.26, 0.93, 0.91, 0.85]],
  },
  {
    text: 'Do the elected officials in Washington stand with ordinary Americans - working families, children, the elderly, the poor - or will the extraordinary power of billionaire campaign contributors and Big Money prevail? The American people, by the millions, must send Congress the answer to that question.',
    author: 'Bernie Sanders',
    emotionalData: [[0.27, 0.51, 0.03, 0.02, 0.07]],
    writingData: [[0.94, 0.00, 0.53]],
    socialData: [[0.92, 0.53, 0.26, 0.16, 0.37]],
  },
  {
    text: 'Establishing a 0.03 percent Wall Street speculation fee, similar to what we had from 1914-1966, would dampen the dangerous level of speculation and gambling on Wall Street, encourage the financial sector to invest in the productive economy and reduce the deficit by more than $350 billion over 10 years.',
    author: 'Bernie Sanders',
    emotionalData: [[0.16, 0.11, 0.39, 0.02, 0.07]],
    writingData: [[0.13, 0.00, 0.00]],
    socialData: [[0.75, 0.53, 0.26, 0.33, 0.37]],
  },
  {
    text: 'What Wall Street and credit card companies are doing is really not much different from what gangsters and loan sharks do who make predatory loans. While the bankers wear three-piece suits and don\'t break the knee caps of those who can\'t pay back, they still are destroying people\'s lives.',
    author: 'Bernie Sanders',
    emotionalData: [[0.37, 0.59, 0.02, 0.01, 0.05]],
    writingData: [[0.00, 0.00, 0.00]],
    socialData: [[0.53, 0.13, 0.35, 0.06, 0.74]],
  },
  {
    text: 'We must stop thinking of the individual and start thinking about what is best for society.',
    author: 'Hillary Clinton',
    emotionalData: [[0.03, 0.23, 0.49, 0.14, 0.06]],
    writingData: [[0.78, 0.00, 0.52]],
    socialData: [[0.20, 0.34, 0.63, 0.78, 0.90]],
  },
  {
    text: 'We\'re always going to argue about abortion. It\'s a hard choice and it\'s controversial, and that\'s why I\'m pro-choice, because I want people to make their own choices.',
    author: 'Hillary Clinton',
    emotionalData: [[0.21, 0.50, 0.08, 0.01, 0.20]],
    writingData: [[0.97, 0.97, 0.00]],
    socialData: [[0.02, 0.01, 0.93, 0.71, 0.99]],
  },
  {
    text: 'People can judge me for what I\'ve done. And I think when somebody\'s out in the public eye, that\'s what they do. So I\'m fully comfortable with who I am, what I stand for, and what I\'ve always stood for.',
    author: 'Hillary Clinton',
    emotionalData: [[0.16, 0.43, 0.29, 0.01, 0.04]],
    writingData: [[0.87, 0.94, 0.59]],
    socialData: [[0.02, 0.05, 0.79, 0.94, 0.99]],
  },
  {
    text: 'I mean, honestly, we have to be clear that the life for many Afghan women is not that much different than it was a hundred years ago, 200 years ago. The country has lived with so much violence and conflict that many people, men and women, just want it to be over.',
    author: 'Hillary Clinton',
    emotionalData: [[0.07, 0.69, 0.02, 0.00, 0.37]],
    writingData: [[0.95, 0.89, 0.94]],
    socialData: [[0.22, 0.06, 0.54, 0.70, 0.90]],
  },
  {
    text: 'We are witnessing a great awakening. Millions of Texans, millions of Americans are rising up to reclaim our country, to defend liberty and to restore the Constitution.',
    author: 'Ted Cruz',
    emotionalData: [[0.03, 0.36, 0.05, 0.17, 0.14]],
    writingData: [[0.00, 0.00, 0.00]],
    socialData: [[0.63, 0.88, 0.62, 0.79, 0.11]],
  },
  {
    text: 'I am blessed to receive a word from God every day in receiving the scriptures and reading the scriptures. And God speaks through the Bible.',
    author: 'Ted Cruz',
    emotionalData: [[0.04, 0.15, 0.12, 0.31, 0.05]],
    writingData: [[0.00, 0.00, 0.00]],
    socialData: [[0.88, 0.75, 0.90, 0.25, 0.27]],
  },
  {
    text: 'This election presents a stark choice - we can continue down the road of the Obama Democrats, more and more spending, debt and government control of the economy, or we can return to the founding principles of our nation - free markets, fiscal responsibility and individual liberty.',
    author: 'Ted Cruz',
    emotionalData: [[0.31, 0.16, 0.08, 0.02, 0.04]],
    writingData: [[0.02, 0.00, 0.53]],
    socialData: [[0.58, 0.79, 0.52, 0.65, 0.37]],
  },
  {
    text: 'We need to remain a nation that doesn\'t just welcome but that celebrates legal immigrants who come here seeking to pursue the American Dream.',
    author: 'Ted Cruz',
    emotionalData: [[0.07, 0.22, 0.09, 0.05, 0.46]],
    writingData: [[0.78, 0.00, 0.26]],
    socialData: [[0.34, 0.10, 0.68, 0.60, 0.89]],
  },
  {
    text: 'The American Dream is a term that is often used but also often misunderstood. It isn\'t really about becoming rich or famous. It is about things much simpler and more fundamental than that.',
    author: 'Marco Rubio',
    emotionalData: [[0.36, 0.04, 0.10, 0.03, 0.30]],
    writingData: [[0.99, 0.00, 0.71]],
    socialData: [[0.68, 0.02, 0.20, 0.08, 0.94]],
  },
  {
    text: 'This is the greatest society in all of human history, the greatest country ever. Many of the decisions being made in Washington today by both parties are threatening that greatness. And if we stay on this road we\'re on right now, our children are going to be the first Americans ever to inherit a diminished country.',
    author: 'Marco Rubio',
    emotionalData: [[0.03, 0.40, 0.26, 0.02, 0.03]],
    writingData: [[0.10, 0.87, 0.00]],
    socialData: [[0.48, 0.65, 0.81, 0.69, 0.33]],
  },
  {
    text: 'We don\'t need new taxes. We need new taxpayers, people that are gainfully employed, making money and paying into the tax system. And then we need a government that has the discipline to take that additional revenue and use it to pay down the debt and never grow it again.',
    author: 'Marco Rubio',
    emotionalData: [[0.51, 0.47, 0.02, 0.00, 0.10]],
    writingData: [[0.73, 0.90, 0.00]],
    socialData: [[0.17, 0.14, 0.48, 0.60, 0.86]],
  },
];

  });
