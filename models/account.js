const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  date: {
    type: Date,
    default: Date.now
  },
  charCreated: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;