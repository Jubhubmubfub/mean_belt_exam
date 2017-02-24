console.log('result controller');
var mongoose = require('mongoose')
var Result = mongoose.model('Result');
function ResultsController(){
  this.create = function(req,res){
    Result.create(req.body,function(err,result){
      if(err){
        console.log('there was an error creating result',err);
        res.json(err)
      } else {
        console.log('successfully created result',result);
        res.json(result)
      }
    })
  }
  this.index = function(req,res){
    Result.find({}).sort({'score':-1}).exec(function(err,result){
      if(err){
        console.log('there was an error finding resulsts',err);
        res.json(err)
      } else {
        console.log('successfully found results',result);
        res.json(result)
      }
    })
  }
}
module.exports = new ResultsController();
