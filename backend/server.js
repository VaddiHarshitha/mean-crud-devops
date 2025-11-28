const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Set mongoose options
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// Database connection
const db = require("./app/models");

console.log("Attempting to connect to MongoDB...");
console.log("Connection URL:", db.url ? db.url.replace(/:[^:@]+@/, ':****@') : 'undefined');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    console.error(err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
