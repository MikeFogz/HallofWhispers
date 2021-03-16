const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  message: {
    type: String,
    trim: true,
    required: "message required",
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
