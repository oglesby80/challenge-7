// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  const badgeUrls = {
    'MIT': 'https://img.shield.io/badge/Licence-MIT-yellow.svg',
    'GPL': 'https://img.shield.io/badge/Licence-MIT-blue.svg',
    'Apache 2.0':'https://img.shield.io/badge/Licence-Apache%202.0-blue.svg',
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;