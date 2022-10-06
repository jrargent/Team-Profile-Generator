

const generateEngineer = engineerData => {
  
    return `
        ${engineerData.map(( {name, id, email, github }) => {
        return `
            <div class="card">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-text"><i class="fas fa-laptop-code mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
            </div>
            </div>
          `
        }
        )}
    `    
};
         
const generateIntern = internData => {
 
  
    return `
        ${internData.map(( {name, id, email, school }) => {
        return `
            <div class="card">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-text"><i class="fas fa-graduation-cap mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
            </div>
          `
        }
        )}
    `    
};







/*
Need to access individual objects in the array, based on name of object. 
ex. [Engineer { name: 'john', id: 12, email: 'example@example.com', github: 'johndoe42" } ]

Need to take the whole Engineer object and use it in a 
*/


module.exports = function(managerData, engineerData, internData) {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>

    <body>
        <header>
            <div class="container-fluid text-center bg-primary">
                <div class="row">
                    <div class="col">
                        <h1>My Team</h1>
                    </div>
                </div>
            </div>
        </header>

        <div class="container-fluid">
            <div class="row">
                <div class="col d-flex justify-content-around mt-5">
                
                <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${managerData[0].name}</h2>
                    <h3 class="card-text"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Id: ${managerData[0].id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${managerData[0].email}">${managerData[0].email}</a></li>
                        <li class="list-group-item">Office Number: ${managerData[0].officeNumber}</li>
                    </ul>
                </div>
                </div>

                ${generateEngineer(engineerData)}
                ${generateIntern(internData)}

                </div>
            </div>
        </div>        
    </body>

    </html>
    
`

};
