require("dotenv/config")
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// setup the data to send via body
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected");
})

app.get("/", (req, res) => {
    res.send("Inside the Home")
})

// import the routes
app.use("/api/v1/user", require("./routes/auth.route"));
app.use("/api/v1/posts", require("./routes/posts"));

const PORT = process.env.PORT;
app.listen(PORT | 3000, () => console.log("Application is running"));