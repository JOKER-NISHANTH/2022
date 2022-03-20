const router = require("express").Router();

router.get("/", (req, res) => {
    // res.send("Welcome Home Page")
    res.render("home")
})

module.exports = router;
