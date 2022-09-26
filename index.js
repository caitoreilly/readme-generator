// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
        validate: (projectTitleInput) => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
        },
        {
        type: "input",
        name: "description",
        message: "Provide a short description about your project.",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
        },
        {
        type: "input",
        name: "installation",
        message: "What are the instructions for installation?",
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter the instructions for installation!");
                return false;
            }
        }
        },
        {
        type: "input",
        name: "usage",
        message: "Instructions for usage:",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter instructions for usage!");
                return false;
            }
        }
        },
        {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this project?",
        validate: (contributingInput) => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please list the contributors of this project!");
                return false;
            }
        }
        },
        {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to include a license?",
        default: true,
        },

        {
        type: "list",
        name: "license",
        message: "What type of license would you like to include?",
        choices: ["Academic", "Apache", "Eclipse", "GNU", "ISC", "MIT", "Mozilla", "Open Software"],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                console.log ("Please select a license!");
                return false;
            }
        }
        },
        {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
        validate: (usernameInput) => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
        },
        {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }    
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
fs.writeFile("./dist/README.md", data, (err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: "README file created!",
        });
    });
    })
    
};

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();