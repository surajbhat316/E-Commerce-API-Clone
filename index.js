const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 8000;


app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log("Error in starting server  "+ err);
        return;
    }
    console.log("Server Started on port "+ port);
})