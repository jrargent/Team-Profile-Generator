const inquirer = require('inquirer');
const Employee = require('./Employee'); //may not be necessary here
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const { writeFile } = require('../utils/generate-site');



manager = [];
engineers = [];
interns = [];
function Website() {
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
    manager.push(new Manager(managerName, id, email, officeNumber));

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
            // will need to pass data from employees to template
            generateSite()
           
            // .then(writeFileResponse => {
            //     console.log(writeFileResponse); 
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            
            
        }
    })
};


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
        engineers.push(new Engineer(engineerName, id, email, github));
       
    
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
        interns.push(new Intern(internName, id, email, school));
    
        this.promptUserAgain();
    })
};




function generateSite() {
    let generatePagePromise = new Promise(function(makePage, bleh) {
        let results = generatePage(manager, engineers, interns);
    
        makePage(results);
        bleh();
    });

    generatePagePromise.then(pageHTML => {
        console.log(pageHTML);
        
    })

     //return generatePagePromise();
    }
     

    

/*

TODO: create HTML template, css template
TODO: create function for website generation

*/

module.exports = Website;