
// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.
// The first class is an Employee parent class with the following properties and methods:
// name --- Included!
// id -- Included!
// email -- Included!
// getName() -- Included!
// getId() -- Included!
// getEmail() -- Included!
// getRole() // Returns 'Employee'  -- Included!
// The requirement is to have extensions (methods) of the Employee class. 

class Employee {
 
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.title = "Employee";
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return this.title;
    }
  }
  module.exports = Employee;