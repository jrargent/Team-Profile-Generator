const generateManager = managerInfo => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${managerInfo.name}</h2>
                <h3 class="card-text"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">Id: ${managerInfo.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${managerInfo.email}">${managerInfo.email}</a></li>
                    <li class="list-group-item">Office Number: ${managerInfo.officeNumber}</li>
                </ul>
            </div>
        </div>
    `
};










module.exports = templateData => {
    // destructure page data by section
    const { Manager, Engineer, Intern } = templateData;
  
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
                
                ${generateManager(Manager)}
                ${generateEngineer(Engineer)}
                ${generateIntern(Intern)}

                </div>
            </div>
        </div>        
    </body>

    </html>
    
`
}
