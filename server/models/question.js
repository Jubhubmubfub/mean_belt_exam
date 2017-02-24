console.log('question model');
var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  fake1: { type: String, required: true },
  fake2: { type: String, required: true },
}, {timestamps: true });
mongoose.model('Question', QuestionSchema);
