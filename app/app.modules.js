'use strict';

angular.module('blog', [
    'ngRoute',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/blogs',
      })
      .when('/blogs', {
        templateUrl: 'ArticleList.html',
        controller: 'ArticleList',
      })
      .when('/blogs/:id', {
        templateUrl: 'Article.html',
        controller: 'Article',
      });
  });
