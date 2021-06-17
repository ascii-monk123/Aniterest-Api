const mongoose = require("mongoose");
const url = require("../db_config");
//uri for connection
const MONGO_URL = url;

//options
const options = { useNewUrlParser: true, useUnifiedTopology: true };

//connect mongodb atlas
mongoose.connect(MONGO_URL, options).then(
  () => {
    console.log("Database connection established");
  },
  (err) => {
    console.log(`Connection cannot be established due to ${err}`);
  }
);
