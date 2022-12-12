// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(firstName,lastName, id, email, school) {
    super(firstName,lastName, id, email);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }
}
module.exports = Intern;