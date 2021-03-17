const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({ msg: "No authentication token passed" });
    }

    //verifying that the token is the same as the secret
    const verified = jwt.verify(token, process.env.JWT_SECRET)

    if (!verified) {
      return res.status(401).json({ msg: "Token verification failed" });
    }
    req.account = verified.id;
    next();

  } catch (error) {

  }
}

module.exports = auth;