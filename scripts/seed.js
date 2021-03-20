const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hall_of_whispers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
);

const characterSeed = [
  {
    chrName: "Valiant Rindis",
    chrClass: "Cleric",
    chrRace: "Human",
    chrStats: [
      { "strength": 14 }, 
      { "dexterity": 9 }, 
      { "constitution": 15 }, 
      { "intelligence": 11 }, 
      { "wisdom": 16 }, 
      { "charisma": 13 }, 
      { "armor class": 9 }, 
      { "hit points": 10 }, 
    ]
  },
];

db.Character
  .deleteMany({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
