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
  },
  accountId: {
    type: String,
    required: true,
  },
  accountName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
