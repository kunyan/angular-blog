'use strict';

angular
  .module('blog')
  .controller('ArticleList', ['$scope', function($scope) {
    $scope.articles = [{
        id: 1,
        title: 'First Blog',
        content: 'Hello world',
      },
      {
        id: 2,
        title: 'Second Blog',
        content: 'Hello world',
      },
      {
        id: 3,
        title: 'Thrid Blog',
        content: 'Hello world',
      },
    ];
  }]);
