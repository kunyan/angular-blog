'use strict';

angular
  .module('blog')
  .controller('Article', ['$scope','$routeParams', function($scope, $routeParams) {
    $scope.article = {
        id: $routeParams.id,
        title: 'First Blog',
        content: 'Hello world',
        author: 'Kun Yan',
      };
  }]);
