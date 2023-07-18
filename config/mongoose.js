const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerceAPI');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connexion to DB"));


db.once('open', function(){
    console.log("Connected to database");
} );

module.exports = db;