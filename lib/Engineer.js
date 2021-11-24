const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor (name, id , email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGitHub() {
        return `https://github.com/${this.github}`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
