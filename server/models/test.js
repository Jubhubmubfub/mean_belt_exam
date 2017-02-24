console.log('Test model');
var mongoose = require('mongoose');
var TestSchema = new mongoose.Schema({
  questions: {type:mongoose.Schema.Types.ObjectId, ref: 'Question', required: true},
}, {timestamps: true });
mongoose.model('Test', TestSchema);
