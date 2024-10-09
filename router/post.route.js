const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController.js");

router.get("/", PostController.getPosts);  
router.post("/create", PostController.createPosts);     
router.get("/get-post-id/:id", PostController.getPostById);
router.delete("/delete/:id", PostController.deletePostById);
router.patch("/update/:id", PostController.updatedPost);

module.exports = router;
