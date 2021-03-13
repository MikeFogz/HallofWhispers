const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    // If we make the account name, the character name, then this will need to change.
  chrName: { type: String, trim: true, required: true },
  chrClass: { type: String, trim: true, required: true },
  chrRace: { type: String, trim: true, required: true },
  chrStats: {
      statList: [{
          stat: { type: Number, maxLength: 2, trim: true, required: true },
      }],
  },
  date: { type: Date, default: Date.now }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
