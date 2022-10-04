const Employee = require('../lib/Employee');

//    extend go here
class Manager extends Employee {
    constructor(name, number, email, officeNumber) {
        super(name, number, email, officeNumber);

    this.officeNumber = officeNumber;

    }
    

};
/*
Manager will have:

officeNumber
getRole - return Manager
*/

module.exports = Manager;