require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

// database connection
connection();
// end of database connection

// setup middleware's
app.use(express.json());
app.use(cors());
// end of  middleware's

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listing on http://localhost:${PORT}`);
});
