const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  chrName: { type: String, required: true },
  chrClass: { type: String, required: true },
  chrRace: { type: String, required: true },
  chrStats: {
    chrStr: { type: Number, required: true },
    chrDex: { type: Number, required: true },
    chrCon: { type: Number, required: true },
    chrInt: { type: Number, required: true },
    chrWis: { type: Number, required: true },
    chrCha: { type: Number, required: true },
    charAc: { type: Number, required: true },
    charHp: { type: Number, required: true },
  },
  date: { type: Date, default: Date.now }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
