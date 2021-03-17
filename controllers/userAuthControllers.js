const { Account } = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
require("dotenv").config();

module.exports = {
  register: async (req, res) => {
    console.log("in register")
    try {
      const { email, password, passwordCheck, displayName } = req.body;
      if (!email || !password || !passwordCheck || !displayName) {
        return res.status(400).json({ msg: "Not all fields have been entered" });
      }
      if (passwordCheck.length < 8) {
        return res.status(400).json({ msg: "YOu need a longer password" });
      }
      if (password !== passwordCheck) {
        return res.status(400).json({ msg: "Password does not match password check" });
      }
      const existingUser = await Account.findOne({ email: email });

      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // ---- ENCRYPTION USING BCRYPT --- 
      //recommend 10 - 20, without any definition it is 15
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newAccount = new Account({
        //email is the same as email: email
        email,
        password: passwordHash,
        accountName: displayName,
        date: new Date(Date.now())
      })
      console.log(newAccount);
      const savedAccount = await newAccount.save();
      res.json(savedAccount);
    } catch (err) {
      res.status(500).json({ msg: err })
    };
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ msg: "all required field were not sent" });
      }

      const myAccount = await Account.findOne({ email: email });
      console.log("this is my account", myAccount)

      if (!myAccount) {
        res.status(400).json({ msg: "User doesn't exist" });
      }


      //---  DECRYPTION HAPPENS ---//
      //compare input password with user encrypted password
      const isMatch = await bcrypt.compare(password, myAccount.password)
      if (!isMatch) {
        res.status(400).json({ msg: "this was an incorrect password" })
      }

      //--- TOKEN CREATION ---//
      //set up the jwt token after confirming that the password is a match
      // this token is stored and used to authorize functionality and pages
      const token = jwt.sign({ id: myAccount._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.json({
        token,
        account: { id: myAccount._id, displayName: myAccount.displayName },
      })
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  },

  getAccount: async (req, res) => {
    try {
      const account = await Account.findById(req.account);
      res.json({
        displayName: account.displayName,
        id: account._id,
      })
    } catch (error) {
      res.send(err.response);
    }
  }

}