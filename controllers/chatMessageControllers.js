const { ChatMessage } = require("../models");

module.exports = {
  // A simple req, res pattern that hits when you go to that url.
  test: function (req, res) {
    res.send({ msg: "success" });
  },
  // get all posts
  getChatMessage: async (req, res) => {
    // res.send({msg: "success from getChatMessage"})
    try {
      const allChatMessages = await ChatMessage.find();
      // console.log(allChatMessages);
      res.json(allChatMessages);
    } catch (error) {
      console.log("error with getChatMessages:", error);
      res.send(error);
    }
  },
  // create chat message
  createChatMessage: async (req, res) => {
    try {
      const newChatMessage = new ChatMessage({
       
        message: req.body.message,
        date: req.body.date,
        id: req.id,
        displayName: req.body.displayName
      });

      res.json(await newChatMessage.save());
    } catch (error) {
      console.log("error with createChatMessage:", error);
    }
  },
};