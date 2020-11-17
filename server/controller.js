const express = require('express');
const app = express.Router();
const db = require('./model');

app.get('/test', function(request, response){  //we have connection between front end and backend
    let email = request.get('email');
    let password = request.get('password');
    response.send({'email': email, 'password': password});
})

app.get('/login', function(request, response){  //we have connection between front end and backend
    let email = request.get('email');
    let password = request.get('password');
    let buildQuery = "SELECT * FROM `EX_Fall_2020_Users` WHERE email = '" + email + "' AND password = '" + password + "'";
    let result = db.queryDatabase(buildQuery).then(function(dbResult){
        if(dbResult.length > 0){
            console.log(dbResult)
            response.send(true);

        }
        else{
            response.send(false);
        }
        
    });
})


module.exports = app;