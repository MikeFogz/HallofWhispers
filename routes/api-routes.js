const router = require("express").Router();
// Deconstructing the test function from the controller's object.

const {
  test,
  getPosts,
  createPost,
} = require("../controllers/testControllers");
// Running the test function from our controller when this route is hit.
router.get("/test", test);

router.get("/posts", getPosts);

router.post("/posts", createPost);

// Authentication function s
const { register, login } = require("../controllers/userAuthControllers");

//User authenication routes 

router.post("/register", register);

router.post("/login", login);

// router.get("/", auth, getUser);

module.exports = router;
