// Class Employee (the parent class)
// Properties: name, id, email, role
// Methods: getName(), getId(), getEmail(), getRole() 
// Returns 'Employee'

class Employee {

    constructor(name, id, email) {

        // Properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    };

    // Methodes
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        // Returns 'Employee'
        return this.role;
    }
}

module.exports = Employee;
