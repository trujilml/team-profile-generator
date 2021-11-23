const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const workArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Welcome! Manager, please enter your name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Manager, please enter your name!");
                    return false;
                }
            }
        }
    ])
}

        // enter manager id email and office number
        // follow with addition of adding employee below

 const addEmployee = () => {
     return inquirer.prompt ([

     ])

 }

    ])
}

//will become below to fit the following below it




//choose whether to add intern or engineer 
//name id email
//engineer github 
//intern school
//give option to add more employees for display

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Team Profile page has been created! See index.html!");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(workArray => {
        return generateHTML(workArray);
    })
    .then(profilePage => {
        return writeFile(profilePage);
    })
    .catch(err => {console.log(err + "An error is visible in the code!")});

// write file index html will be generated in src generate html js file 
//original index html file has been deleted to allow generate html to generate html file for team profile