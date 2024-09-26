const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.get("/", UserController.getUsers);
router.post("/create-user", UserController.createUser);


module.exports = router;