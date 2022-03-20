require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const mySql = require("mysql2");

const app = express();
app.use(express.json());

// Setup Static Files
app.use(express.static("public"));

// Setup template Engine
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

// MySQL Connection
const con = mySql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME
})
// Check DB Connection

con.getConnection((error, connection) => {
    if (error) throw error
    console.log("Connection Success");
})

// Setup routes
app.use("/", require("./routes/routes"));

// Setup Listing PORT
app.listen(process.env.PORT || 5000, () => {
    console.log("Application is running : " + process.env.PORT || 5000);
})