const BaseController = require("./BaseController.js");
const db = require("../models/index.js");
const UserRepo = require("../repos/UserRepo.js");

class UserController extends BaseController {
  constructor() {
    super();
  }

  async getUsers(req, res) {
    try {
      const users = await db.User.findAll({
        where: { isDeleted: false },
      });
      console.log("Users fetched:", users);
      res.status(200).json({
        users: users,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  }

  async createUser(req, res) {
    try {
      const userBody = {
        ...req.body,
        isDeleted: false,
      };

      const user = await db.User.create(userBody);
      console.log("User created:", user);
      res.status(200).json({
        user: user,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await db.User.findOne({
        where: { id: req.params.id },
        rejectOnEmpty: true,
      });
      res.status(200).json({
        data: user,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user by ID" });
    }
  }

  async deleteUserById(req, res) {
    try {
      const result = await db.User.update(
        { isDeleted: true },
        { where: { id: req.params.id } }
      );
      return res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user" });
    }
  }

  async updateUser(req, res) {
    const { id } = req.params;
    try {
      const updatedUser = await db.User.update(req.body, {
        where: { id },
        returning: true,
      });

      res.status(200).json({
        message: "User updated successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
    }
  }
}
module.exports = new UserController();
