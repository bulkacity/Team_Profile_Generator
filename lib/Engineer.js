// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(firstName,lastName, id, email, github) {
    super(firstName,lastName, id, email);
    this.github = github;
    this.title = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;