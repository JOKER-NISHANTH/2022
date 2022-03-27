const router = require("express").Router();

const studentController = require("../controllers/student.controllers");

// View all records
router.get("/", studentController.view);

// Add New Records
router.get("/addUser", studentController.addUser);
router.post("/addUser", studentController.saveUser);

// Update User
router.get("/updateUser", studentController.updateUser);
router.put("/updateUser", studentController.updateUser);

// Delete User
router.delete("/deleteUser", studentController.deleteUser);

module.exports = router;
