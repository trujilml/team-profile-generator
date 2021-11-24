const generateManager = function(manager) {
    return `
    ${manager.name}
    ${manager.id}
    ${manager.email}
    ${manager.officeNumber}
    `;
}

const generateEngineer = function(engineer) {
    return `
    ${engineer.name}
    ${engineer.id}
    ${engineer.email}
    ${engineer.github}
    `;
}

const generateIntern = function(intern) {
    return `
    ${intern.name}
    ${intern.id}
    ${intern.email}
    ${intern.school}
    `;
}


generateHTML = (data) => {

    pageArray = [];
    
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerInfo = generateManager(employee);
            pageArray.push(managerInfo);
        }

        if (role === 'Engineer') {
            const engineerInfo = generateEngineer(employee);
            pageArray.push(engineerInfo);
        }

        if (role === 'Intern') {
            const internInfo = generateIntern(employee);
            pageArray.push(internInfo);
        }

    }

    const employeeTeam = pageArray.join('');


    const generatedWork = generateTeamProfilePage(employeeTeam);
    return generatedWork;

}


const generateTeamProfilePage = function(employeeTeam) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"/>
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
        <h1 class="title text-center">Team Profile</h1>
        </header>

        <main>
        <div class = "container">
        <div class = "row justify-content-center" id="employee-cards">
        ${employeeTeam}
        </div>
        </div>
        </main>
    
    
       
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script>
    </html>

    `;

}

module.exports = generateHTML;