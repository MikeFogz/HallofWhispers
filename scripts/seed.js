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
    chrStats: {
      statlist: {
        chrStr: 14,
        chrDex: 9,
        chrCon: 15,
        chrInt: 11,
        chrWis: 16,
        chrCha: 13,
        charAc: 9,
        charHp: 10,
      },
    },
    date: new Date(Date.now())
  },
  {
    chrName: "Nott",
    chrClass: "Rogue",
    chrRace: "Goblin",
    chrStats: {
      statlist: {
        chrStr: 9,
        chrDex: 18,
        chrCon: 8,
        chrInt: 11,
        chrWis: 11,
        chrCha: 7,
        charAc: 11,
        charHp: 12,
      },
    },
    date: new Date(Date.now())
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
