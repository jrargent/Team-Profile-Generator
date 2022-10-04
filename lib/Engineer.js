const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, number, email, github) {
        super(name, number, email, github);

        this.github = github;
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer'
    };
};

module.exports = Engineer;