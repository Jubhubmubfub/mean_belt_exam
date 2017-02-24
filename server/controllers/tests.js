console.log('test controller');
var mongoose = require('mongoose')
var Test = mongoose.model('Test');
function TestsController(){

}
module.exports = new TestsController();
