var app = angular.module('app');

app.controller('logoutController',
  [
    '$scope',
    'userFactory',
    'testFactory',
    '$location',
    function($scope,userFactory,testFactory,$location){
      console.log('logoutController loaded');
      var self = this;
      testFactory.clearMessages()
      userFactory.logout()
      $location.url('/')

    }
  ]
);
