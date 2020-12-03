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
  let FirstName = request.get('FirstName');
  let LastName = request.get('LastName');
  let email = request.get('email');
  let password = request.get('password');

  let buildQuery = "SELECT * FROM `EX_Fall_2020_Users` WHERE email = '" + email + "' AND password = '" + password + "'"; //inserts a row into specified table
  db.queryDatabase(buildQuery).then(function(dbResult)
  {
    if(dbResult.length == 0){
      let insertQuery = "INSERT INTO `EX_Fall_2020_Users`(`FirstName`, `LastName`, `email`, `password`, `User_Type`) VALUES ('"+FirstName + "','" + LastName + "','" + email + "','" + password + "'," + 6 + ")";
      console.log(insertQuery)
      db.queryDatabase(insertQuery).then(function(dbResult)
      {
        if(dbResult.affectedRows > 0){ //means that a row was made. value should be 1
          //console.log(dbResult)
          response.send(true);  //send true meaning success
        }
        else{
          response.send(false);
        }
      });
    }
    else{
      response.send(false);
    }      
  });
})

//Below is the function to search for users based on first name and last name
//This grabs data from the user table (first name and last name columns)
app.get('/autocomplete', function(request, response){  //we have connection between front end and backend
  let searchtext = request.get('FirstName');
  let searchtext = request.get('LastName');
  //this grabs any data that matches what the user types into the textbox
  let buildQuery = "SELECT * FROM `EX_Fall_2020_Users` WHERE FirstName = '" + searchtext + "' AND LastName = '" + searchtext + "'";
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