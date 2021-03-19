const { Character } = require("../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      res.json(await Character.find())
    } catch (err) {
      res.send(err);
    };
  },
};
