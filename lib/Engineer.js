const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor (name, id , email, github) {
        super(name);
    
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGitHub() {
        return `https://github.com/${this.github}`;
    }

    getRole() {
        return `${this.name} is an Engineer`;
    }
}

module.exports = Engineer;
