
// Require mongoose
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// new Schema: UserSchema
var data = new Schema({
  // title: a trimmed, required string
  title: {
    type: String,
    trim: true,
    required: "Article title is required"
  },
  // link: a trimmed, required string
  url: {
    type: String,
    unique: true,
    required: "Link is Required"
  },
  // date: published date
  date: {
    type: Date,
  },
  // articleCreated: when the article is saved to the database
  articleCreated: {
    type: Date,
    default: Date.now
  },

});

// Use the above schema to make the savedData model/collection
var Article = mongoose.model("data", savedSchema);

// Export the model so the server can use it
module.exports = Article;
