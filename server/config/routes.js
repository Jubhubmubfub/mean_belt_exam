var path = require('path');
var questions = require('./../controllers/questions.js');
var tests = require('./../controllers/tests.js');
var results = require('./../controllers/results.js');

module.exports = function(app){
  app.post('/questions', questions.create)
  app.post('/results', results.create)
  app.get('/questions', questions.index)
  app.get('/results', results.index)
};
