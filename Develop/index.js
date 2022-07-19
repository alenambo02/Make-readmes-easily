// Grabbing the packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// This is an array of questions that is displayed to the user for their input
const questions = [
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
        name: 'installation',
    },
    
    {
        type: 'input',
        message: 'Provided instructions and examples for use?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Add credits and contributors?',
        name: 'credits',

    },
    {
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['MIT', 'BSD-3', 'WTFPL', 'Apache', 'none'],
    },
    {
        type: 'input',
        message: 'What kind of test did you create?',
        name: 'tests',

    },
    {
        type: 'input',
        message: 'Add is your contact information?',
        name: 'phone',
    },
    {
        type: 'input',
        message: 'Add you github information?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Add you email information?',
        name: 'email',
    },
  
    ];


// This function is used to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log(err):console.log("SUCCESS!"))
}

// This function is used to initialize app
function init() {
    inquirer 
    .prompt(questions)
     
    .then((response) => {
        console.log(response)
       
        writeToFile("README2.md", response);
   
    
    }
    
    );
}

// Function called to initialize app
init();
