const router = require("express").Router();

const studentController = require("../controllers/student.controllers");

// View all records
router.get("/", studentController.view);

// Add New Records
router.get("/addUser", studentController.addUser);
router.post("/addUser", studentController.saveUser);

// Update User
router.get("/updateUser/:id", studentController.updateUser);
router.post("/saveUpdate/:id", studentController.saveUpdate);

// Delete User
// router.delete("/deleteUser/:id", studentController.deleteUser);

module.exports = router;
