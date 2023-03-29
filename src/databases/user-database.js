const knex = require("knex");
class UserDB {
  constructor(config, table = "users") {
    this.db = knex(config);
    this.table = table;
  }
  async getUsersColumn(column) {
    const data = await this.db(this.table).select(column);
    return data;
  }

  async whereInRawQuery() {
    const data = await this.db.schema.raw(
      `SELECT * FROM users WHERE id IN (2, 5)`
    );
    return data;
  }

  async getAllUsers() {
    const data = await this.db(this.table);
    return data;
  }

  async createUser(user) {
    const data = await this.db(this.table).insert(user);
    return data;
  }
}

module.exports = UserDB;
