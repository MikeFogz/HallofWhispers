const router = require("express").Router();
// Deconstructing the test function from the controller's object.
const auth = require("../middleware/auth");

const {
  test,
  getPosts,
  createPost,
} = require("../controllers/testControllers");
// Running the test function from our controller when this route is hit.
router.get("/test", test);

router.get("/posts", auth, getPosts);

router.post("/posts", auth, createPost);

// Authentication function s
const { register, login, getAccount, charCreatedAccount } = require("../controllers/userAuthControllers");

//User authenication routes 

router.post("/register", register);

router.post("/login", login);

router.get("/accounts", auth, getAccount);

router.post("/characterCreation", auth, charCreatedAccount);

module.exports = router;
