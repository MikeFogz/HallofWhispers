const { Character } = require("../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      res.json(await Character.find())
    } catch (err) {
      res.send(err);
    };
  },

  createChr: async (req, res) => {
    try {
      const newChr = new Character({
        chrName: req.body.chrName,
        chrClass: req.body.chrClass,
        chrRace: req.body.chrRace,
        chrStats: [ 
          { name: "strength", value: req.body.chrStr }, 
          { name: "dexterity", value: req.body.chrDex }, 
          { name: "constitution", value: req.body.chrCon }, 
          { name: "intelligence", value: req.body.chrInt }, 
          { name: "wisdom", value: req.body.chrWis }, 
          { name: "charisma", value: req.body.chrCha }, 
          { name: "armor class", value: req.body.chrAc }, 
          { name: "hit points", value: req.body.chrHp }, 
        ]
      })

      res.json(await newChr.save());
    } catch (err) {
      res.send(err);
    };
  },
};
