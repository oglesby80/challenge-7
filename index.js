// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GPL', 'Apache 2.0', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?'
    },
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs. writeFileSync ('${fileName}.md', markdownData.trim(), 'utf8');
    fs. writeFileSync ('${fileName}.html', htmlData. trim(), 'utf8');
}

// TODO: Create a function to initialize app
function init() {} test

// Function call to initialize app
init();