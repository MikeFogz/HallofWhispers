const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hall_of_whispers"
);

const testSeed = [
  {
    accountName: "forbloops280",
    password: "1234password",
    date: new Date(Date.now())
  },
  {
    accountName: "fudgeRuckers",
    password: "booSully",
    date: new Date(Date.now())
  }
];

db.Account
  .deleteMany({})
  .then(() => db.Account.collection.insertMany(testSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
