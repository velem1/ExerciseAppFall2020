const mysql = require("mysql");
var conn = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9373703",
  password: "GtG4Cb62TC",
  database: "sql9373703"
})
conn.connect(); //creates the database connection

//let myquery = "SELECT * FROM `EX_Fall_2020_Users`";
//   conn.query(myquery, function (error, results, fields) {  
//       if (error) throw error;
       //console.log(fields); 
//       console.log(results);                         
//       return results
//     });

function queryDatabase(query){  //Will always use this method to query data. Just pass it SQL statement
    return new Promise(function(resolve, reject){
    conn.query(query, function (error, results, fields) {  //make query here
        if (error) {
          console.log(error);
          reject();
        } 
        //console.log(results);  //results come back as results
                                //error comes back as errors
        resolve(results);
      });
    })
  }
module.exports = {queryDatabase};  //exports the function so that I can use it in controller.js