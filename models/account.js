const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
