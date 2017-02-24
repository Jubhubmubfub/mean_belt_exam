console.log('result model');
var mongoose = require('mongoose');
var ResultSchema = new mongoose.Schema({
  user: {type:String, required: true},
  score: {type:Number, required: true},
  percentage: {type:String, required: true},
}, {timestamps: true });
mongoose.model('Result', ResultSchema);
