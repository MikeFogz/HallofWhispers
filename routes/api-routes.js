const router = require("express").Router();
// Deconstructing the test function from the controller's object.
const {test} = require("../controllers/testControllers");
// Running the test function from our controller when this route is hit.
router.get("/test", test);
module.exports = router;