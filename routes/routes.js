const express = require('express');
const app = express.Router();

const enterData = require('./enter_data');
const getQuiz = require('./getQuiz');
const submit = require('./submit');

app.post('/enterData', enterData);
app.get('/getQuiz', getQuiz);
app.post('/submit/:id', submit);

module.exports = app;