const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: async (req, res) => {
    try {
        db.Character.find({}, (res) => {
            console.log(res);
        });
    } catch (error) {
        res.send(err);
    };
  },
};
