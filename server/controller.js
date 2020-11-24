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

app.get('/signup', function(request, response){
  let firstName = request.get('firstName');
  let lastName = request.get('lastName');
  let dob = request.get('dob');
  let email = request.get('email');
  let password = request.get('password');

  let buildQuery = "INSERT INTO 'EX_Fall_2020_Users` (firstName, lastName, dob, email, password) VALUES(" + firstName + "," + lastName + "," + dob + "," + email + "," + password ; //inserts a row into specified table
  let result = db.queryDatabase(buildQuery).then(function(dbResult)
  {
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