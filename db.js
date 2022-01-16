const mongoose = require('mongoose');

var mongoosURL = 'mongodb+srv://azad-rooms:BjvRXfz0BrBEipCo@cluster0.zxfls.mongodb.net/mern-rooms';

mongoose.connect(mongoosURL, {useUnifiedTopology : true, useNewUrlParser:true})

var connection =mongoose.connection;

connection.on('error', ()=>{
    console.log("Mongo DB Connection Failed");
})

connection.on('connected', ()=>{
    console.log("Mongo DB Connection Successfully");
})

module.exports = mongoose