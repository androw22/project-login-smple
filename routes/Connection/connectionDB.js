var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "TestLogin",
});

// host :   اسم  localhost
//user : name loaclhost
//pass : pass localhost
// database : name databse

connection.connect(function (err) {
  if (!err) {
    console.log("start Database ....");
  } else {
    console.log("error database");
  }
});

//connect to connect database
module.exports = connection;
