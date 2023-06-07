// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of content
  - [Project Description](#description) 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Email](#email)
  - [Github](#github)
  - [License](#license)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Email
  ${data.email}
  ## Github
  ${data.github}
  ## License
  ${data.list}
  ## Questions
  ${data.questions}
  `
} 

Module.exports = generateMarkdown;

