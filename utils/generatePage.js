const fs = require('fs');
function renderLicenseBadge(license) {
    if (license === 'MIT'){
    return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'Apache'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    } else if (license === 'GNU'){
        return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (license === 'ISC'){
        return `[![License](https://img.shields.io/badge/License-ISC-blue.svg)]`
    }else {
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
    } else if (license === 'ISC'){
        return `(https://opensource.org/licenses/ISC)`
    }else {
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
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#authors)
- [Technologies](#technologies)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Technologies Used
${languages.join(' \n ')}

## Authors
- ${author}

${renderLicenseSection(license)}
 `
}

  module.exports = generatePage