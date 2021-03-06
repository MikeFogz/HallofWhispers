module.exports = {
    // A simple req, res pattern that hits when you go to that url.
    test: function (req, res) {
        res.send({ msg: "success" })
    },
};