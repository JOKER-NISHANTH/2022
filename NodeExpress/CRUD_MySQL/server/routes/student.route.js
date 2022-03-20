const router = require("express").Router();

const studentController = require("../controllers/student.controllers");

router.get("/", studentController.view);

module.exports = router;
