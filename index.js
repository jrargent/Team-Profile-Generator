const inquirer = require('inquirer');
const Employee = require('./lib/Employee');



// function Profile() {
//     this.employee;
// };

// Profile.prototype.initializeProfile = function() {
//     this.employee.push(new Employee());
//     this.currentEmployee = this.employee[0];
const promptUser = () => {
return inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is the employee name?'
    },
    {
        type: 'text',
        name: "id",
        message: 'What is the employee ID?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is the employee email?'
    }])
.then(( { name, id, email }) => {
    this.employee = new Employee(name, id, email);
    console.table(this.employee);
    
})
// will need to prompt ask whether employee is manager, engineer, or intern
}

promptUser();

