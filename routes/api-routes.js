const router = require("express").Router();
// Deconstructing the test function from the controller's object.
const { test } = require("../controllers/testControllers");
// Authentication function s
const { register, login } = require("../controllers/userAuthControllers");

// Running the test function from our controller when this route is hit.
router.get("/test", test);

//User authenication routes 

router.post("/register", register);

router.post("/login", login);

// router.get("/", auth, getUser);

module.exports = router;