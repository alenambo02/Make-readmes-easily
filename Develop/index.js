// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
// const questions = [];

inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give me a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for the project?',
        name: 'instructions',
    },
  
    ])
 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
