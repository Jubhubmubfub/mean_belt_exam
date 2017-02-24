console.log('Result Factory');
app.factory('resultFactory', ['$http', function($http) {
  var results = [];
  var result = {};
  function ResultsFactory(){
    var _this = this;
    this.create = function(user,score,percentage,callback){
      var result = {
        user:user,
        score:score,
        percentage:percentage
      }
      console.log('in resultFActory, result is is',result);
      $http.post('/results/',result).then(function(returned_data){
        console.log('back from the server with returned data',returned_data);
        callback(returned_data)
      })
    }
    this.index = function(callback){
      $http.get('/results/').then(function(returned_data){
        console.log('back from the server with the returned results',returned_data);
        callback(returned_data)
      })
    }
  }
  console.log(new ResultsFactory());
  return new ResultsFactory();
}]);
