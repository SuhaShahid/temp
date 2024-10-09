const BaseController = require("./BaseController.js");
const db = require("../models/index.js");

class PostController extends BaseController {
  constructor() {
    super();
  }

  async getPosts(req, res) {
    try {
      const posts = await db.Post.findAll({
        where: { isDeleted: false },
      });
      console.log("Posts fetched:", posts);
      res.status(200).json({
        posts: posts,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts" });
    }
  }

  async createPosts(req, res) {
    try {
        const { title, content, userId } = req.body; // Destructure the JSON body

        const newPost = await db.Post.create({
            title,
            content,
            userId,
        });

        console.log("Post created:", newPost);
        res.status(201).json({
            post: newPost,
        });
    } catch (error) {
        console.error("Error creating post:", error); // Log the error for better debugging
        res.status(500).json({ message: "Error creating post" });
    }
  }
  

  async getPostById(req, res) {
    try {
      const post = await db.Post.findOne({
        where: { id: req.params.id, isDeleted: false },
        rejectOnEmpty: true,
      });
      res.status(200).json({
        data: post,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching post by ID" });
    }
  }

  async deletePostById(req, res) {
    try {
      const result = await db.Post.update(
        { isDeleted: true },
        { where: { id: req.params.id } }
      );

      return res.status(200).json({
        message: "Post deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Error deleting post" });
    }
  }

  async updatedPost(req, res) {
    const { id } = req.params;
    try {
      const [updatedCount, [updatedPost]] = await db.Post.update(req.body, {
        where: { id },
        returning: true,
      });

      if (updatedCount === 0) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.status(200).json({
        message: "Post updated successfully",
        post: updatedPost,
      });
    } catch (error) {
      res.status(500).json({ message: "Error updating post" });
    }
  }
}

module.exports = new PostController();
