const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
    <div class="card">
    <div class="card-header">
    <h1>Manager ${manager.name}</h1>
    </div>
    <div class="card-body">
    <p class="id">Manager ID: ${manager.id}</p>
    <p class="email"> Manager Email: ${manager.email}</p>
    <p class ="officeNumber">Manager Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
}

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card">
    <div class="card-header">
    <h1>Engineer ${engineer.name}</h1>
    </div>
    <div class="card-body">
    <p class="id">Engineer ID: ${engineer.id}</p>
    <p class="email">Engineer Email: ${engineer.email}</p>
    <p class="github">Engineer GitHub: ${engineer.github}</p>
    </div>
    </div>
    </div>
    `;
}

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card">
    <div class="card-header">
    <h1>Intern ${intern.name}</h1>
    </div>
    <div class="card-body">
    <p class="id">Intern ID: ${intern.id}</p>
    <p class="email">Intern Email: ${intern.email}</p>
    <p class="school">Intern School: ${intern.school}</p>
    </div>
    </div>
    </div>
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
        <h1 class="title text-center">Team Profile Page</h1>
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