// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  const badgeUrls = {
    'MIT': 'https://img.shield.io/badge/Licence-MIT-yellow.svg',
    'GPL': 'https://img.shield.io/badge/Licence-MIT-blue.svg',
    'Apache 2.0':'https://img.shield.io/badge/Licence-Apache%202.0-blue.svg',
    
  };
  return '![License](${badgeUrls[license]})';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  const licenseUrls = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL': 'https://opensource.org/licenses/GPL',
    'Apache 2.0':'https://opensource.org/licenses/Apache-2.0',
  };
  return LicenseLinks [license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
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
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, Feel free to contact me:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}


`;
}

export default generateMarkdown;