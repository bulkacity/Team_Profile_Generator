function initiateGenerator(employeeDatabase) {
html=[];
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
console.log(html);
// call function for each type

}

function genManagerHtml(getName, getId,getEmail,getOfficeNumber){
    managerHTMLtext=`<div class="card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title"><img src="./management.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center"> Manager</a></h5>
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
  <h5 class="card-title"><img src="./engineer.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center">Engineer</h5>
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
              <h5 class="card-title"><img src="./student.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center">Intern</h5>
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
module.exports= {initiateGenerator};