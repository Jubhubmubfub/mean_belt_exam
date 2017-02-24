console.log('Test Factory');
app.factory('testFactory', ['$http', function($http) {
  var result_message = []
  function TestsFactory(){
    var _this = this;
    this.create = function(callback){
      $http.get('/questions/').then(function(returned_questions){
        console.log('came back from server with all questions',returned_questions.data);
        //select 3 questions at random from questions array
        questions = returned_questions.data
        test_questions = []
        console.log('test questions at before loop is ',test_questions);
        console.log('questins is ',questions);
        for (var i = 0; i < questions.length; i++) {
          console.log('iteration ',i+1);
          var randomNum = Math.floor(Math.random()*questions.length)
          console.log('random number is ',randomNum);
          console.log('test_questions is now',test_questions);
          console.log('question to check is ',questions[randomNum]);
            if(!(questions[randomNum] in test_questions)){
              console.log('adding question to test_questions',questions[randomNum]);
              test_questions.push(questions[randomNum])
              questions.splice(randomNum,1)
              console.log('test_questions after the '+(i+1)+'st push',test_questions);
            }
            console.log('lenght of test_questions is now',test_questions.length);
            if(test_questions.length > 2){
              console.log('length has been met, breaking out');
              break;
            }
        }
        console.log('the test questions are ',test_questions);
        callback(test_questions)

      })
    }
    this.result = function(result){
      console.log('in test factory, result is ',result);
      result_message = result
      console.log('result_message is',result_message);
    }
    this.getResult = function(callback){
      console.log('getResult function result_message is ',result_message);
      callback(result_message)
    }
    this.clearMessages = function(){
      result_message = ''
    }

  }
  console.log(new TestsFactory());
  return new TestsFactory();
}]);
