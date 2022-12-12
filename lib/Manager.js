// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(firstName,lastName, id, email, officeNumber) {
    super(firstName,lastName, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;