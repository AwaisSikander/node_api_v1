class User {
  constructor(first_name = "", last_name = "", email = "", birthdate = "") {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.birthdate = new Date(birthdate);
  }

  changeName(first_name = "", last_name = "") {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  changeEmail(email) {
    this.email = email;
  }
  static create(data) {
    const { first_name, last_name, email, birthdate } = data;
    return new User(first_name, last_name, email, birthdate);
  }
}

module.exports = User;
