class Employee {
    constructor(name, number, email) {
    // will need to have these arguments be user inputs from inquirer prompt
        this.name = name;
        this.id = number;
        this.email = email;
    };

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
        return 'Employee'
    };

};


module.exports = Employee;