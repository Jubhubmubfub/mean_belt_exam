console.log('Question Factory');
app.factory('questionFactory', ['$http', function($http) {
  var questions = [];
  var question = {};
  function QuestionsFactory(){
    var _this = this;
    this.create = function(question,callback){
      $http.post('/questions/',question).then(function(returned_data){
        console.log('returned from server controller with question data',returned_data.data);
        callback(returned_data)
      })
    }
  }
  console.log(new QuestionsFactory());
  return new QuestionsFactory();
}]);
