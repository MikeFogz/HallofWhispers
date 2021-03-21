const { Character } = require("../models");

module.exports = {

  findAll: async (req, res) => {
    try {
      res.json(await Character.find())
    } catch (err) {
      res.send(err);
    };
  },

  findChr: async (req, res) => {
    try {
      res.json(await Character.findById(req.params.id));
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
        chrAlign: req.body.chrAlign,
        chrStory: req.body.chrStory,
        // TODO: Auth middleware to pair account ID.
        // acctId: req.account,
        // This will create an array within our Character containing stat objects.
        chrStats: [ 
          { name: "strength", value: req.body.chrStr }, 
          { name: "dexterity", value: req.body.chrDex }, 
          { name: "constitution", value: req.body.chrCon }, 
          { name: "intelligence", value: req.body.chrInt }, 
          { name: "wisdom", value: req.body.chrWis }, 
          { name: "charisma", value: req.body.chrCha }, 
        ],
        chrArmor: [
          { name: "armor-class", value: req.body.chrAc }, 
          { name: "speed", value: req.body.chrSpeed }, 
          { name: "initiative", value: req.body.chrIni }, 
          { name: "proficiency", value: req.body.chrProf }, 
        ],
        chrHealth: [
          { name: "max-hit-points", value: req.body.chrMaxHp }, 
          { name: "current-hit-points", value: req.body.chrCurrHp }, 
        ],
        chrSkills: [
          { name: "acrobatics", value: req.body.chrAcr }, 
          { name: "animal-handling", value: req.body.chrAnHa }, 
          { name: "arcana", value: req.body.chrArc }, 
          { name: "athletics", value: req.body.chrAth }, 
          { name: "deception", value: req.body.chrDec }, 
          { name: "history", value: req.body.chrHis }, 
          { name: "insight", value: req.body.chrIns }, 
          { name: "intimidation", value: req.body.chrIntim }, 
          { name: "investigation", value: req.body.chrInv }, 
          { name: "medicine", value: req.body.chrMed }, 
          { name: "nature", value: req.body.chrNat }, 
          { name: "perception", value: req.body.chrPerc }, 
          { name: "persuasion", value: req.body.chrPers }, 
          { name: "religion", value: req.body.chrRel }, 
          { name: "sleight-of-hand", value: req.body.chrSoh }, 
          { name: "stealth", value: req.body.chrSte }, 
          { name: "survival", value: req.body.chrSur }, 
        ]
      })
      res.json(await newChr.save());
    } catch (err) {
      res.send(err);
    };
  },

  deleteChr: async (req, res) => {
    try {
      res.json(await Character.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    };
  },

};
