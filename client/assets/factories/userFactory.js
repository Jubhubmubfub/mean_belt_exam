console.log('User Factory');
app.factory('userFactory', ['$http', function($http) {
  var users = [];
  var loggedInUser = ''
  var userSession = {}
  function UsersFactory(){
    var _this = this;
      this.user = function(user){
        loggedInUser = user
        console.log('logged in User is ',loggedInUser);
      }
      this.getUser = function(callback){
        callback(loggedInUser)
      }
      this.logout = function(){
        loggedInUser = ''
      }


  }
  console.log(new UsersFactory());
  return new UsersFactory();
}]);
