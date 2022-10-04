const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');




/* likely need to ask what the role is first, this will then determine the questions asked
 first question asked will be who is manager. 
    This should only be asked once because there is likely to be just 
        one manager on a team

  then once all of manager ?s are asked, will run prompt for  
 "Which type of team member would you like to add? (use arrow keys)"
 Engineer
 Intern


*/
const promptUser = () => {
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
        message: "What is the employee's ID?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the managers's email address?"
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
])
.then(( { managerName, id, email, officeNumber }) => {
    this.manager = new Manager(managerName, id, email, officeNumber);
    console.table(this.manager);
    })
};
// .then () package into the new Manager object?
//  return promptUserAgain()

// the prompt for this should only ask if adding an engineer or intern, or
// 'I don't want to add any more team members."



// return inquirer.prompt([

// {
//     type: 'list',
//     name: 'role',
//     message: 'What is the employee role?',
//     choices: ['Engineer', 'Intern', "I do not want to add any more team members"]
// }

//     then(({ role }) => {
//     if(role === 'Manager') {
//         // function to prompt Manager ?s
//     }

//      {
//         
//     },
//     {
//         type: 'text',
//         name: "id",
//         message: 'What is the employee ID?'
//     },
//     {
//         type: 'text',
//         name: 'email',
//         message: 'What is the employee email?'
//     }])
// .then(( { name, id, email, role}) => {
//     this.employee = new Employee(name, id, email);
//     console.table(this.employee);
//     add if statements here for role?
//     this.manager = new Manager(name, id, email, role);
//     console.table(this.manager);
// })

// if user selects manager, then prompt the ask for office number
//if user selected engineer, then prompt the ask for GitHub
// if user selects intern, then prompt the ask for school


promptUser();