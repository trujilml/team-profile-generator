const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card shadow h-100">
            <div class="card-header">
                <h1>${manager.name}</h1>
                <h2>Manager</h2><i class="fas fa-user"></i>
            </div>
            <div class="card-body">
                <p class="id">Manager ID: ${manager.id}</p>
                <p class="email"> Manager Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class ="officeNumber">Manager Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card shadow h-100">
            <div class="card-header">
                <h1>${engineer.name}</h1>
                <h2>Engineer</h2><i class="fas fa-network-wired"></i>
            </div>
            <div class="card-body">
                <p class="id">Engineer ID: ${engineer.id}</p>
                <p class="email">Engineer Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Engineer GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card shadow h-100">
            <div class="card-header">
                <h1>${intern.name}</h1>
                <h2>Intern</h2><i class="fas fa-user-graduate"></i>
            </div>
            <div class="card-body">
                <p class="id">Intern ID: ${intern.id}</p>
                <p class="email">Intern Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
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
        <h1 class="mb-0 w-100 title text-center"><i class="fas fa-users"></i>Team Profile Page</h1>
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