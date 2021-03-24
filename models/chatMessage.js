
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
  message: {
    type: String,
    trim: true,
    required: "message required",
  },

  date: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    trim: true,
  }
});

const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);

module.exports = ChatMessage;