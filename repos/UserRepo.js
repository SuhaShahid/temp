const BaseRepo= require("./BaseRepo")
const db= require("../models/index")
class UserRepo extends BaseRepo{
    constructor(){
        super(db.User)
        this.model= db.User
    }
    async createRole(role) {
        return this.create(role);
      }
    
      async updateRole(data, id) {
        return this.model.update(data, { where: { id } });
      }
    
      async deleteRole(id) {
        return this.model.update({ isDeleted: true }, { where: { id } });
      }
    
      async findAll() {
        return this.model.findAll({
          where: { isDeleted: false },
        });
      }
      async findOne(id) {
        return this.model.findOne({ where: { id } });
      }









}

module.exports = new UserRepo();