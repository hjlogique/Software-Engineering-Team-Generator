// Manager Class (extention of the Employee class)
// Additional property: officeNumber
// Methods: getOfficeNumber, getRole() (Overridden to return 'Manager')

const Employee = require("./Employee.js");

// Extention of the Employee class
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        // Properties from the Employee class
        super(name, id, email);

        // New property
        this.officeNumber = officeNumber;

        // Overridden the Employee getRole() to return 'Manager'
        this.role = "Manager";

    }

    // New Method
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;