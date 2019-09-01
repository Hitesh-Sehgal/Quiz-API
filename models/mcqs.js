const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//set up a mongoose model
module.exports = mongoose.model('mcq', new Schema({
    question: String,
    answer: String,
    option1: String,
    option2: String,
    option3: String
}))