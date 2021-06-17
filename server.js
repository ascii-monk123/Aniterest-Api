"use-strict";
const express = require("express");
const bodyParser = require("body-parser");

//importing database connection
require("./config/db");

//normal routes
const userRoutes = require("./routes/userRoutes");

//initialize app
const app = express();

const port = process.env.port || 3000;

//using bodyparser for parsing incoming requests and expost it to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server has started listening on port ${port}`);
});
