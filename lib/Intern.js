// Intern Class (extension of the Employee class)
// Additional property: school
// Methods: getSchool, getRole() (Overridden to return 'Intern')

const Employee = require("./Employee.js");

// Intern Class (extension of the Employee class)
class Intern extends Employee {

    constructor(name, id, email, school) {

        // Properties from the Employee class
        super(name, id, email);

        // New property
        this.school = school;
        
        // Overridden the Employee getRole() to return 'Intern'
        this.role = "Intern";

    }

    // New Method
    getSchool() {
        return this.school;
    };
}

module.exports = Intern;
