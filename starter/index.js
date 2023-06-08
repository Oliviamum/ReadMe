const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { start } = require("repl");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your project?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute to your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "How do you run tests for your project?",
    },
    {
      type: "input",
      name: "license",
      message: "What is the license for your project?",
    },
  ])
  .then((answers) => {
    const readme = `
# ${answers.title}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

${answers.license}
`;

    fs.writeFile("README.md", readme, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README.md file generated successfully!");
      }
    });
  });

/*const inquirer = require("inquirer");
const fs = require ("fs");
/*const { default: Choices } = require("inquirer/lib/objects/choices");
const MarkDown = require("./utils/generateMarkdown");
onquirer.prompt([
    
])*/

/*

// array of questions for user
const questions = ([
    {
        type: "input",
        name: "title",
        message: "what is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "project description?"
    },
    {
        type: "input",
        name: "installation",
        message: "installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "project usage?"
    },
    {
        type: "input",
        name: "contribution",
        message: "project contribution information?"
    },
    {
        type: "input",
        name: "email",
        message: "for questions (email)?"
    },
    {
        type: "input",
        name: "github",
        message: "for questions (github)?"
    },
    {
        type: "input",
        name: "list",
        message: "licence?",
        Choices: ["MIT", "Apache", "GPL"],
        filter(val) {
            return val.toLowerCase();
        }
    }
]).then((answers) => {
    const readme = `
# ${answers.title}
## Table of contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Email](#email)
- [Github](#github)
- [License](#license)

## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Email
${answers.email}
## Github
${answers.github}
## License
${answers.list}
## Questions
${answers.questions}
`;
    fs.writeFile("README.md", MarkDown.generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log("Success!")
    );
});

    /*#${answers.title}
    ${answers.description}
    ${answers.installation}
    ${answers.usage}
    ${answers.contribution}
    ${answers.email}
    ${answers.github}
    `;
    fs.writeFile("README.md", MarkDown.generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log("Success!")
    );
});
});


    const readme = `
})



/*run query function
async function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = MarkDown.generateReadme(answers);
            console.log(mark);
            return
        })
        .catch((err) => {
            console.log(err);
            runQuery*/
