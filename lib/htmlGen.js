function initiateGenerator(employeeDatabase) {
html=[];

// add the heading to the html arrary:

addHeading(html);


    // filter by employee title
const managerObject =employeeDatabase.filter(manager => manager.getRole() === "Manager");
// console.log(managerObject);
managerObject.forEach((person)=>{ genManagerHtml(person.getName(), person.getId(),person.getEmail(),person.getOfficeNumber()) });
// console.log(html);

engineers =employeeDatabase.filter(engineer => engineer.getRole() === 'Engineer');
// console.log(engineers);
// console.log(engineers.length);
engineers.forEach((person)=>{ genEngine(person.getName(), person.getId(),person.getEmail(),person.getGithub()) });


interns =employeeDatabase.filter(interns => interns.getRole()=== 'Intern');
// console.log(interns);
// console.log(interns.length);
interns.forEach((person)=>{ genIntern(person.getName(), person.getId(),person.getEmail(),person.getSchool()) });

addEnding(html)
return joinAllHtml(html);

// call function for each type

}

function addHeading(html){
    return html.push(`
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./src/bootstrap/bootstrap.css">
    <title>BulkAcity Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
  <body>
    
    <nav class="navbar navbar-dark bg-dark justify-content-center"  >
        
        <a class="navbar-brand" href="#" >
            <img src="../src/BulkAcityLogo.jpg" alt="Bootstrap" width="400" height="400"class="d-inline-block align-text-center"> Our Bulkacity Team</a>
    </nav>
    
    <div class="card-group">
    `)
}

function addEnding(html){
    return html.push(`
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>
    `)
}

function genManagerHtml(getName, getId,getEmail,getOfficeNumber){
    managerHTMLtext=`<div class="card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title"><img src="../src/management.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center"> Manager</a></h5>
      <p class="card-text">${getName}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${getId} </li>
      <li class="list-group-item">Email: ${getEmail}</li>
      <li class="list-group-item">Office ${getOfficeNumber}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">${getEmail}</a>
      <a href="#" class="card-link">Office ${getOfficeNumber}</a>
    </div>
  </div>`
  return  html.push(managerHTMLtext);
}
function genEngine(getName, getId,getEmail,getGithub){
engineeringText =`
<div class="card" style="width: 18rem;">
            
<div class="card-body">
  <h5 class="card-title"><img src="../src/engineer.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center">Engineer</h5>
  <p class="card-text">${getName}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID:${getId} </li>
  <li class="list-group-item">Email: ${getEmail}</li>
  <li class="list-group-item">GitHub: ${getGithub}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Email ${getEmail}</a>
  <a href="#" class="card-link">GitHub: ${getGithub} link</a>
</div>
</div>
`
return  html.push(engineeringText);
}

function genIntern(getName, getId,getEmail,getSchool){
    internText=`
    <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title"><img src="../src/student.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center">Intern</h5>
              <p class="card-text">${getName}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${getId}  </li>
              <li class="list-group-item"> Email: ${getEmail}</li>
              <li class="list-group-item">School: ${getSchool}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">${getEmail}</a>
              <a href="#" class="card-link">${getSchool}</a>
            </div>
          </div>
      </div>
    `
return html.push(internText);
}


function joinAllHtml(html){
    // console.log(html.join(''))
    // console.log(html.join(""))
    return (html.join(''));
}


module.exports= {initiateGenerator};