var app = angular.module('app');

app.controller('testController',
  [
    '$scope',
    'userFactory',
    'testFactory',
    'resultFactory',
    '$location',
    function($scope,userFactory,testFactory,resultFactory,$location){
      console.log('testController loaded');
      var self = this;
      $scope.test = {}
      $scope.user = ''
      $scope.answers = []
      $scope.message = []
      userFactory.getUser(function(user){
        $scope.user = user
      })
      testFactory.clearMessages()
      while($scope.user == ''){
        $scope.user = prompt('Please enter your name')
        console.log('user is logged in as ',$scope.user);
        userFactory.user($scope.user)
      }

      testFactory.create(function(test){
        $scope.test = test
        console.log('returned from the testFactory with 3 questions',$scope.test);
      })

      this.submitTest = function(){
        var score = 0
        console.log('clicked submit test',$scope.answer1,$scope.answer2,$scope.answer3);
         if ($scope.answer1.choice == $scope.test[0].answer){
           console.log('correct answer', $scope.answer1,$scope.test[0].answer);
           score += 1
         }
         if ($scope.answer1.choice != $scope.test[0].answer){
           console.log('incorrect answer on question 1');
           $scope.message.push('incorrect answer on question 1')
         }

         if($scope.answer2.choice == $scope.test[1].answer){
           console.log('correct answer', $scope.answer2,$scope.test[1].answer);
           score += 1
         }
         if($scope.answer2.choice != $scope.test[1].answer){
          console.log('incorrect answer on question 2');
          $scope.message.push('incorrect answer on question 2')
         }
         if($scope.answer3.choice == $scope.test[2].answer){
           console.log('correct answer', $scope.answer3,$scope.test[2].answer);
           score += 1
         }
         if($scope.answer3.choice != $scope.test[2].answer){
           console.log('incorrect answer on question 3');
           $scope.message.push('incorrect answer on question 3')
          }
         console.log('score is ',score);
         var percentage = Math.floor(score/3 * 100) + '%'
         resultFactory.create($scope.user,score,percentage,function(callback){
           console.log(callback.data);
           $scope.message.push(`That was great, ${callback.data.user}! Your score is ${callback.data.score}/3 (${callback.data.percentage})`)
           console.log('scope message is ',$scope.message);
           testFactory.result($scope.message)
           $location.url('/dashboard')
         })
       }
    }
  ]
);
