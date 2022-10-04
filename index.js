const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');



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
    },

    {
        type: 'list',
        name: 'role',
        message: 'What is the employee role?'
        //choices: Manager, Engineer, Intern
    }])
.then(( { name, id, email }) => {
    this.employee = new Employee(name, id, email);
    console.table(this.employee);
    // add if statements here for role?
})
// if user selects manager, then prompt the ask for office number
//if user selected engineer, then prompt the ask for GitHub
// if user selects intern, then prompt the ask for school
}

promptUser();

