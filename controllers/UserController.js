const BaseController = require("./BaseController.js");
const db = require("../models/index.js");
const user = require("../models/user.js");

class UserController extends BaseController {
  constructor() {
    super();
    // this.getUsers = this.getUsers.bind(this);
  }

  async getUsers(req, res) {
    const users = await db.User.findAll();
    console.log("test", users);
    res.status(200).json({
      users: users,
      message: "Users fetched successfully",
    });
  }

  async createUser(req, res) {
    console.log("user req", req.body);

    const user = await db.User.create(req.body);
    console.log("test", user);
    res.status(200).json({
      user: user,
      message: "Users created successfully",
    });
  }

  async getUserById(req, res) {
    const user = await db.User.findOne({
      where: { id: req.params.id },
      rejectOnEmpty: true,
    });
    res.status(200).json({
      user: user,
      message: "User fetched successfully",
    });
  }
}

module.exports = new UserController();
