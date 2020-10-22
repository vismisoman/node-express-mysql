const express = require("express");
//const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
require("./app/db/connect");
const taskRouter = require("./app/routes");

const port = process.env.PORT || 7001;

app.listen(port);

console.log("API server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var routes = require("./app/routes/approutes"); //importing route
//routes(app); //register the route

app.use("/task", taskRouter);
