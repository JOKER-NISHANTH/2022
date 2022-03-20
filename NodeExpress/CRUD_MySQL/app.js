require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const mySql = require("mysql");

const app = express();
app.use(express.json());






// Setup Listing PORT
app.listen(process.env.PORT || 5000, () => {
    console.log("Application is running : " + process.env.PORT || 5000);
})