const router = require("express").Router()

const { getPosts } = require("../controllers/testControllers")

router.get("/api/posts", getPosts)

module.exports = router