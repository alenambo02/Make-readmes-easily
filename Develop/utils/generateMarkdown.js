// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseChosen = ''

  if(license === 'MIT') {
    licenseChosen = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` 
  } 

  else if (license === 'BSD-3') {
  licenseChosen = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  
  }
  else if (license === 'Apache') {
  licenseChosen = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
 
  }
  else if (license === 'WTFPL') {
    licenseChosen = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }
  return(licenseChosen)
    
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  return `# ${data.title} 
  
  ${renderLicenseBadge(data.license)}

  #Table of Content
  -[description](#description)
  -[instructions](#instructions)
  -[usage](#usage)
  -[credits](#credits)
  -[license](#license)
  -[contact](#contact)

  ## description:
  ${data.description}

  ## instructions:
  ${data.instructions}

  ## usage:
  ${data.usage}
 
  ## credits:
  ${data.credits}
 
  ## license:
  ${data.license}

  ## contact:
  ${data.contact}
 
  `;
}

module.exports = generateMarkdown;
