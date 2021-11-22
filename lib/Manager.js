const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name);

        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        return `{this.name} is a manager`;
    }
}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'