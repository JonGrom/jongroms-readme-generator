// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = `https://img.shields.io/badge/${license}-blue`
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const lowerCaseLicense = license.toLowerCase()
  const licenseLink = `https://choosealicense.com/licenses/${lowerCaseLicense}/`
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license)
  const licenseSection = `## License
  
  Licensed under the [${license}](${licenseLink}) license.`
  return licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)
  return `# ${data.title}
  ![${data.license}](${licenseBadge})

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Testing

  ${data.test}

  ${licenseSection}

  ## Questions

  For answers to any questions, please contact me via email ${data.email} or check out my [Github](${data.github})



`;
}

module.exports = generateMarkdown;
