const User = require("@entities/user");
class UserService {
  constructor(database) {
    this.database = database;
  }
  async getUsersColumn(column) {
    const users = await this.database.getUsersColumn(column);
    return users;
  }

  async whereInRawQuery() {
    const users = await this.database.whereInRawQuery();
    return users;
  }

  async getAllUsers() {
    const users = await this.database.getAllUsers();
    return users;
  }

  async createUser(data) {
    const user = User.create(data);
    const createdUsers = await this.database.createUser(user);
    return createdUsers;
  }
}

module.exports = UserService;
