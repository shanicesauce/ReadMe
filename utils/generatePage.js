const fs = require('fs');
function renderLicenseBadge(license) {
    if (license === 'MIT'){
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'Apache'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    } else if (license === 'GNU'){
        return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else {
        return ''
    }
}
function renderLicenseLink(license) {
   if (license === 'MIT'){
    return `(https://opensource.org/licenses/MIT)`
   }  else if (license === 'Apache'){
    return`(https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GNU'){
        return `(https://www.gnu.org/licenses/gpl-3.0)`
    } else {
        return ''
    }
}
function renderLicenseSection(license) {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}
const generatePage = ({title , description, installation, usage,languages,author, license}) => {
    return `# ${title}

## Description
    
${description}
    
    
## Table of Contents
    
If your README is long, add a table of contents to make it easy for users to find what they need.
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#authors)
- [Technologies](#technologies)
- [License](#license)

## Installation
${installation}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
${usage}
instructions for usage

## Technologies Used
${languages.join(' \n ')}

## Authors
- ${author}

${renderLicenseSection(license)}
 `
}

  module.exports = generatePage