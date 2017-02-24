var app = angular.module('app');

app.controller('questionController',
  [
    '$scope',
    'userFactory',
    'questionFactory',
    'testFactory',
    '$location',
    function($scope,userFactory,questionFactory,testFactory,$location){
      console.log('questionController loaded');
      var self = this;
      $scope.user = ''
      userFactory.getUser(function(user){
        $scope.user = user
      })
      testFactory.clearMessages()
      while($scope.user == ''){
        $scope.user = prompt('Please enter your name')
        console.log('user is logged in as ',$scope.user);
        userFactory.user($scope.user)
      }
      this.create = function(){
        questionFactory.create($scope.question,function(question_data){
          console.log('returned from factory with question data',question_data.data);
          alert('question successfully added!')
          $location.url('/dashboard')
        })
      }
    }
  ]
);
