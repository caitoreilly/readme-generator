// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  if (license) {
    return "- [License](#license)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}


## Contributing

${data.contributing}

## License

${data.license}


## Tests

${data.tests}

## Questions

If you have any questions about this project, please feel free to contact me directly via email at ${data.email}.
You can also view my additional projects at https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
