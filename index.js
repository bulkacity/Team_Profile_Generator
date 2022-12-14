const chalk= require("chalk");
const ctx = new chalk.Instance({level: 1})
// Bring in all of the methods utilized and downloaded.
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Bring in all the dependencies and methods
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const initiateGenerator = require("./lib/htmlGen");
const { default: NumberPrompt } = require("inquirer/lib/prompts/number");

// Create an array of team members to verify and check if there are members or even a manager.
const teamMembers = [];
let amountTeamMembers;

const red= chalk.bgRed;
const yell=chalk.bgYellowBright;
const green=chalk.bgGreenBright;
function start() {
  
  inquirer
    .prompt([
      {
        type: "input",
        name: "number",
        message: red("How many members will be on your team, ensure to have more than 1 for this to be considered a team."),
      },
    ])
    .then((answer) => {
    
        if (answer.number <=1) {
            console.log(yell("Please enter a number greater than 1"));
            start();
      } else {
        console.log(green(`Great, lets begin making your team of ${answer.number}`));
        amountTeamMembers = answer.number;
        managerQuery();
    }
}); 
    
};

function managerQuery() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: red("What is the assigned Manager's first name?"),
      },
      {
        type: "input",
        name: "lastName",
        message: red("What is the assigned Manager's last name?"),
      },
      {
        type: "input",
        name: "id",
        message: red("Provide the Managers ID number:"),
      },
      {
        type: "input",
        name: "officeNumber",
        message: red("Team Manager's office number:"),
      },
    ])
    .then((answer) => {
      const managersEmail= `${answer.firstName}.${answer.lastName}@bulkacity.com` ;
      console.log(green(`The manager's email is ${managersEmail}`));
      const manager = new Manager(
        answer.firstName,
        answer.lastName,
        answer.id,
        managersEmail,
        answer.officeNumber);

      teamMembers.push(manager);
      amountTeamMembers-=1;
      
      addTeamMember(amountTeamMembers);
    });
}

function addTeamMember(remainingEmployees) {
  console.log(yell(`You have ${remainingEmployees} remaining Employees to input in the system`));
  if (remainingEmployees>0){
  inquirer
    .prompt([
      {
        type: "list",
        name: "emplType",
        message: red("Specify Employee type?"),
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.emplType === "Engineer") {
        remainingEmployees -=1;
        engineerQuery(remainingEmployees);
      } else if (answer.emplType === "Intern") {
        remainingEmployees -=1;
        internQuery(remainingEmployees);
      }
    });
} else {
  console.log(yell("You have no more employees left to input , HTML file will now be generated."));
  createFile();
}
}

function engineerQuery(remainingEmployees) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: red("Engineer's first name?"),
      },
      {
        type: "input",
        name: "lastName",
        message: red("Engineer's last name?"),
      },
      {
        type: "input",
        name: "id",
        message: red("Engineer's ID number:"),
      },
      {
        type: "input",
        name: "github",
        message: red("What is the Engineer's GitHub Username?"),
      },
    ])
    .then((answer) => {
      const engineersEmail= `${answer.firstName}.${answer.lastName}@bulkacity.com` ;
      console.log(green(`The engineer's email is ${engineersEmail}`));
      const engineer = new Engineer(
        answer.firstName, 
        answer.lastName,
        answer.id,  
        engineersEmail,
        answer.github);
      teamMembers.push(engineer);
      addTeamMember(remainingEmployees);
    });
}

function internQuery(remainingEmployees) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: red("Intern's first name?"),
      },
      {
        type: "input",
        name: "lastName",
        message: red("Intern's last name?"),
      },
      {
        type: "input",
        name: "id",
        message: red("Intern's ID number:"),
      },
      {
        type: "input",
        name: "school",
        message: red("Name of School attending?"),
      },
    ])
    .then((answer) => {
      const studentEmail= `${answer.firstName}.${answer.lastName}@bulkacity.com` ;
      console.log(green(`The student's email is ${studentEmail}`));
      const intern = new Intern(
        answer.firstName, 
        answer.lastName, 
        answer.id, 
        studentEmail, 
        answer.school);
      teamMembers.push(intern);
      addTeamMember(remainingEmployees);
    });
}

function createFile() {
  console.table(teamMembers);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
    fs.writeFileSync(outputPath, initiateGenerator.initiateGenerator(teamMembers), "UTF-8");
    console.log(green("Congratulations, you have successfully created a team"));
  } else {

    fs.writeFileSync(outputPath, initiateGenerator.initiateGenerator(teamMembers), "UTF-8");
    console.log(green("Congratulations, you have successfully created a team"));
  }
  
}

start();