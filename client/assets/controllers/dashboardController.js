var app = angular.module('app');

app.controller('dashboardController',
  [
    '$scope',
    'userFactory',
    'testFactory',
    'resultFactory',
    '$location',
    function($scope,userFactory,testFactory,resultFactory,$location){
      console.log('dashboardController loaded');
      var self = this;
      $scope.user = ''
      $scope.messages = []
      $scope.results = []
      testFactory.getResult(function(result){
        console.log('returned from getResult function with result',result);
        $scope.messages = result
      })
      userFactory.getUser(function(user){
        $scope.user = user
      })
      resultFactory.index(function(results){
        $scope.results = results.data
      })
      while($scope.user == ''){
        $scope.user = prompt('Please enter your name')
        console.log('user is logged in as ',$scope.user);
        userFactory.user($scope.user)
      }
    }
  ]
);
