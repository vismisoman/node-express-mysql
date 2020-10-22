const mysql = require("mysql");
// connection configurations
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "invoicedb",
});

// connect to database
db.connect();
module.exports = db;
