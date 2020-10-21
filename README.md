

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/hjlogique/Software-Engineering-Team-Generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/hjlogique/Software-Engineering-Team-Generator?style=flat&logo=appveyor)
  
# Software-Engineering-Team-Generator

  ## Description 
  
  This is a Node CLI (Command Line Interface) application, which prompts a user for information about the team manager and team members. It takes any number of team members, which is a mix of engineers and interns. When the user has completed building the team, the application generates an HTML file that displays a nicely formatted team roster based on the information provided by the user.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  
  In command line type the `npm i` command to install the NPM package dependencies specified in the `package.json` file. They are [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user, and [jest](https://jestjs.io/) for running the provided tests. Next type `node app.js` to run the application. (watch the clip below)

  ![Demo of Software-Engineering-Team-Generator](/assets/media/team_generator.gif)
  
  ## Usage 
  
  This [application](https://hjlogique.github.io/Software-Engineering-Team-Generator/output/team.html) uses the `inquirer` NPM package to prompt you in the command line with a series of questions about the team manager and the team members. There are default questions like name, id and email, and specific ones like office number for the manager, GitHub username for engineers and school name for interns. The application takes your inputs, uses `async/await` to handle the `inquirer` promise, uses the `htmlRenderer.js` to generate an HTML format based on the main.html template, and uses the `fs.writeFileSync` from fs node module to generate a `team.html` file to display the team summary. The `path` node module accesses and interacts with the file system and generates a new directory for the `team.html` file in case `output` directory is missing.
  
  ## Contributing
  
  Please let me know if there are any ways to improve the logic, the code or the features of this application. Please also let me know about any found bugs or issues. I would really appreciate your contributions.
  
  ## Tests
  
   The `jest` NPM package is installed as a part of this application and used to test this application. There are four `jest` unit tests provided in the `test` directory. You can simply run the tests at any time with the `npm run test` command.
  
  ## Questions
  
  [Link to my GitHub profile](https://github.com/hjlogique)

  If you have any questions, please contact me via email:
  
  Email: hjlogique@yahoo.com
  
  ## License
  
  MIT License
  