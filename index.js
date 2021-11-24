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
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your work ID.',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter your work ID!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your work email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number of the manager.',
            validate: officeNumberInput => {
                if (isNaN(officeNumberInput)) {
                    console.log("Please reenter the correct office number.");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        workArray.push(manager);
        console.log(manager);
    })
};

 const addEmployee = () => {
     console.log(`
     ==========================
     Now time to add employees!
     ==========================
     `
     );
     return inquirer.prompt ([
         {
             type: 'list',
             name: 'role',
             message: 'Choose the role of your employee!',
             choices: ['Engineer', 'Intern']
         },
         {
             type: 'input',
             name: 'name',
             message: 'Please enter the name of your employee.',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log("Please enter the name of your employee!");
                     return false;
                 }
             }
         },
         {
             type: 'input',
             name: 'id',
             message: 'Enter the employee id.',
             validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the employee's ID!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the employee.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your work email!");
                    return false;
                }
            }
        },
        {
            // for the engineer employee
            type: 'input',
            name: 'github',
            message: 'Please enter the GitHub username of the employee.',
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the GitHub username.")
                }
            }
        },
        {
            // for the intern employee
            type: 'input',
            name: 'school',
            message: 'Intern, please enter the name of your school.',
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the name of your school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add more employees to your team profile?',
            default: false
        }
     ])
     .then(employeeData => {
         let {name, id, email, role, github, school, confirmEmployee} = employeeData;
         let employee; 

         if (role === "Engineer") {
             employee = new Engineer(name, id, email, github);
             console.log(employee);

         } else if(role === "Intern") {
             employee = new Intern(name, id, email, school);
             console.log(employee);
         }

         workArray.push(employee);


         if (employeeData.confirmEmployee) {
             return addEmployee(workArray);
         } else {
             return workArray;
         }
     })
 };

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
    .catch(err => {console.log(err);});