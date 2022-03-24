const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "lifechoices",
  password: "@Lifechoices1234",
  database: "Hotel_API",
});

module.exports = con;
