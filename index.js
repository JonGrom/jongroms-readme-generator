//Require packages
const { writeFile } = require("fs");
const inquirer= require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

//Prompt questions in terminal
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a concise yet thorough description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain the usage of your application",
        name: "usage"
    },
    {
        type: "input",
        message: "Explain your application's contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Give test instructions for other developers",
        name: "test"
    },
    {
        type: "list",
        message: "What license is this project using?",
        name: "license",
        choices: ["Apache-2.0", "GPL-3.0", "MIT"]
    },
    {
        type: "input",
        message: "What is your github url?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

//Write README.md
function writeToFile(fileName, data) {
    writeFile(`${fileName}`, data, (err) => {
        err ? console.lo
        (err) : console.log('README generated')
    })
}

//Initialize application
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
        console.log(response)
        const data = generateMarkdown(response)
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
