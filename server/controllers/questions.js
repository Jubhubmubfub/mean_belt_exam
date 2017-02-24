console.log('question controller');
var mongoose = require('mongoose')
var Question = mongoose.model('Question');
function QuestionsController(){
  this.create = function(req,res){
    console.log('got to the server with the question',req.body);
    Question.create(req.body, function(err,result){
      if(err){
        res.json(err)
      } else {
        res.json(result)
      }
    })
  }
  this.index = function(req,res){
    Question.find({},function(err,result){
      if(err){
        res.json(err)
      } else {
        res.json(result)
      }
    })
  }
}
module.exports = new QuestionsController();
