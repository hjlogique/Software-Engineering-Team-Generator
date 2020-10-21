// Engineer Class (extension of the Employee class)
// Additional property: github
// Methods: getGithub, getRole() (Overridden to return 'Engineer')

const Employee = require("./Employee.js");

// Engineer Class (extension of the Employee class)
class Engineer extends Employee {

    constructor(name, id, email, github) {

        // Properties from the Employee class
        super(name, id, email);

        // New property
        this.github = github;

        // Overridden the Employee getRole() to return 'Engineer'
        this.role = "Engineer";

    }

    // New Method
    getGithub() {
        return this.github;
    };
}

module.exports = Engineer;
