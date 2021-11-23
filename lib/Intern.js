const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school)  {
    super(name);

    this.id = id;
    this.email = email;
    this.school = school;
}

    getSchool() {
        return `School: ${this.school}`;
    }

    getRole() {
        return `${this.name} is an intern.`;
    }

}
module.exports = Intern;