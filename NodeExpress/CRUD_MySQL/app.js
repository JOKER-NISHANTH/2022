require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.json());

// Setup Static Files
app.use(express.static("public"));

// Setup template Engine
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

// MySQL Connection





// Setup routes
app.use("/", require("./server/routes/student.route"));

// Setup Listing PORT
app.listen(process.env.PORT || 5000, () => {
    console.log("Application is running : " + process.env.PORT || 5000);
})