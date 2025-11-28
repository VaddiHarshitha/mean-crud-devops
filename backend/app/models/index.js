const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

// Build MongoDB connection URL
console.log("DB Config:", {
  HOST: dbConfig.HOST,
  PORT: dbConfig.PORT,
  USER: dbConfig.USER,
  DB: dbConfig.DB
});

if (dbConfig.USER && dbConfig.PASSWORD) {
  db.url = `mongodb://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}?authSource=admin`;
} else {
  db.url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
}

console.log("MongoDB URL constructed:", db.url ? "✓" : "✗");

db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
