// Function to render license badge
function renderLicenseBadge(license) {
  if (!license) return '';
  const badgeUrls = {
    'MIT': 'https://img.shields.io/badge/License-MIT-blue.svg',
    'GPL': 'https://img.shields.io/badge/License-GPL-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  };
  return `![License](${badgeUrls[license]})`;
}

// Function to render license link
function renderLicenseLink(license) {
  if (!license) return '';
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL': 'https://opensource.org/licenses/GPL-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
  };
  return licenseLinks[license]; // Fixed variable name here
}

// Function to render license section
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`${data.installation}\`

## Usage
\`${data.usage}\`

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
\`${data.tests}\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;
