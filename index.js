const mongoose = require('mongoose');
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes/routes');
const PORT = 6000;

//For online database-
// mongoose.connect(config.mongo_url, {useNewUrlParser: true, authSource: 'admin', dbName: "Cluster0", autoIndex:false}, err=>{

//For local database
mongoose.connect(config.database, {useNewUrlParser: true}, err =>{
    if(err){
        throw console.error("Database Not Connected", err);
    } else{
        console.log("Database Connected!");
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT);
console.log("Server Started on port: "+PORT);