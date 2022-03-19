const router = require("express").Router();
const verify = require("../routes/verifyToken");

router.get("/",verify, (req, res) => {
    res.json({
        title: "My First Post",
        description:"Bla Bla Bla",
    });
})

module.exports = router;