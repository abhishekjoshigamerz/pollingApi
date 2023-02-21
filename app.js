const express = require('express');
const app = express();
const port = 8001;
const mongoose = require('mongoose');
const db = require('./config/database');

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.use('/', require('./routes/api/version1'));



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: http://localhost:${port}`);
});