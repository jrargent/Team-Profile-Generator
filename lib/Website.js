const inquirer = require('inquirer');
const Employee = require('./Employee'); //may not be necessary here
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


function Website() {
    this.employees = [];
}

Website.prototype.promptUser = function() {
    console.log('Please build your team');
    return inquirer.prompt([
    {
        type: 'text',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the team manager's ID?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the team managers's email address?"
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the team manager's office number?"
    }
])
.then(( { managerName, id, email, officeNumber }) => {
    this.employees.push(new Manager(managerName, id, email, officeNumber));

    this.promptUserAgain();
})
};


Website.prototype.promptUserAgain = function() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add? (use arrow keys)",
            choices: ['Engineer', 'Intern', "I do not want to add any more team members"]
        }
    ])
    .then(( { role }) => {
        if(role === 'Engineer') {
            // run engineer prompt
            this.promptUserEng();
           
        }
        else if(role === 'Intern') {
            // run intern prompt
            this.promptUserInt();
        }
        else {
            // end prompt and run HTML generation 
            //(will be a function which points to a template)
            
        }
    })
};

/*

TODO: create HTML template, css template
TODO: create function for website generation

*/

Website.prototype.promptUserEng = function() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's ID?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(( { engineerName, id, email, github }) => {
        this.employees.push(new Engineer(engineerName, id, email, github));
       //console.table(this.employees);
    
        this.promptUserAgain();
    })
};

Website.prototype.promptUserInt = function() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's ID?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the intern's school?"
        }
    ])
    .then(( { internName, id, email, school }) => {
        this.employees.push(new Intern(internName, id, email, school));
        console.table(this.employees);
    
        //promptUserAgain();
    })
};


// .then(( { name, id, email, role}) => {
//     this.employee = new Employee(name, id, email);
//     console.table(this.employee);
//     add if statements here for role?
//     this.manager = new Manager(name, id, email, role);
//     console.table(this.manager);
// })


module.exports = Website;