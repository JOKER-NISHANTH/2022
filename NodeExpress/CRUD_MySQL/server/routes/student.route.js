const router = require("express").Router();

const studentController = require("../controllers/student.controllers");

// View all records
router.get("/", studentController.view);

// Add New Records
router.get("/addUser", studentController.addUser);
router.post("/addUser", studentController.save);

module.exports = router;
