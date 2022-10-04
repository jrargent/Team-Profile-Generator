const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, number, email, school) {
        super(name, number, email, school);

        this.school = school;
    }

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};

module.exports = Intern;