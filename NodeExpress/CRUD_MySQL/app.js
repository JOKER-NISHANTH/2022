require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();


// passing data via post body , Setup
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//  Static Files Setup
app.use(express.static("public"));

//  template Engine Setup
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");


// Setup routes
app.use("/", require("./server/routes/student.route"));

// Setup Listing PORT
app.listen(process.env.PORT || 5000, () => {
    console.log("Application is running : " + process.env.PORT || 5000);
})