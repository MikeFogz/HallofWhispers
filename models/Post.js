
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  message: {
    type: String,
    trim: true,
    required: "message required",
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
