var app = angular.module('app', ['ngRoute','angularMoment']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController',
      controllerAs:'DC'
    })
    .when('/test',{
      templateUrl: 'partials/test.html',
      controller: 'testController',
      controllerAs:'TC'
    })
    .when('/logout',{
      templateUrl: 'partials/logout.html',
      controller: 'logoutController',
      controllerAs:'LC'
    })
    .when('/question',{
      templateUrl: 'partials/question.html',
      controller: 'questionController',
      controllerAs:'QC'
    })
    .otherwise('/')
  }
);
