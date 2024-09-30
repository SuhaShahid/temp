const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.get("/", UserController.getUsers);
router.post("/create-user", UserController.createUser);
router.get("/get-user-id/:id", UserController.getUserById);
router.delete("/delete/:id",UserController.deleteUserById)
router.patch("/update/:id",UserController.updateUser)
module.exports = router;