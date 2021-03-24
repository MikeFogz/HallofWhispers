const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({

  chrName: { type: String, trim: true, required: true },
  chrClass: { type: String, trim: true, required: true },
  chrRace: { type: String, trim: true, required: true },
  chrAlign: { type: String, trim: true, required: true },
  chrStory: { type: String },
  chrAccountId: {
    type: String,
    required: true,
  },
  // An array of stat objects, all must be a numeric value between 1 and 2.
  chrStats: [{
    name: {
      type: String,
      trim: true
    },
    value: {
      type: Number,
      trim: true,
      minLength: 1,
      maxLength: 2
    },
  }],
  chrArmor: [{
    name: {
      type: String,
      trim: true
    },
    value: {
      type: Number,
      trim: true,
      minLength: 1,
      maxLength: 2
    },
  }],
  chrHealth: [{
    name: {
      type: String,
      trim: true
    },
    value: {
      type: Number,
      trim: true,
      minLength: 1,
      maxLength: 2
    },
  }],
  chrSkills: [{
    name: {
      type: String,
      trim: true
    },
    value: {
      type: Number,
      trim: true,
      minLength: 1,
      maxLength: 2
    },
  }],
  date: { type: Date, default: Date.now }

});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
