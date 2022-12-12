// Bring in all of the methods utilized and downloaded.
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Bring in all the dependencies and methods
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlGen");
// const { default: NumberPrompt } = require("inquirer/lib/prompts/number");

// Create an array of team members to verify and check if there are members or even a manager.
const teamMembers = [];
let amountTeamMembers;

function start() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "number",
        message: "How many members will be on your team, ensure to have more than 1 for this to be considered a team.",
      },
    ])
    .then((answer) => {
    
        if (answer.number <=1) {
            console.log("Please enter a number greater than 1")
            start();
      } else {
        console.log(`Great, lets begin making your team of ${answer.number}`);
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
        name: "name",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "id",
        message: "Team Manager's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Team Manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Team Manager's office number:",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      console.table(manager);
      teamMembers.push(manager);
      addTeamMember();
    });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "what_type",
        message: "Add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "Not at this time"],
      },
    ])
    .then((answer) => {
      if (answer.what_type === "Engineer") {
        engineerQuery();
      } else if (answer.what_type === "Intern") {
        internQuery();
      } else {
        createFile();
      }
    });
}

function engineerQuery() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub Username?",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
      console.table(engineer);
      teamMembers.push(engineer);
      addTeamMember();
    });
}

function internQuery() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Intern's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "What school does/did the intern attend?",
      },
    ])
    .then((answer) => {
      const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
      console.table(intern)
      teamMembers.push(intern);
      addTeamMember();
    });
}

function createFile() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  } else {

    fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
    console.log("File created in the output folder");
  }
  
}

start();