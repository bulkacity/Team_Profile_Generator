function initiateGenerator(employeeDatabase) {
html=[];
    // filter by employee title
const managerObject =employeeDatabase.filter(manager => manager.getRole() === "Manager");
// console.log(managerObject);
managerObject.forEach((person)=>{ genManagerHtml(person.getName()) });
// console.log(html);

engineers =employeeDatabase.filter(engineer => engineer.getRole() === 'Engineer');
// console.log(engineers);
// console.log(engineers.length);
engineers.forEach((engineer)=>{ genEngine(engineer.getName()) });


interns =employeeDatabase.filter(interns => interns.getRole()=== 'Intern');
// console.log(interns);
// console.log(interns.length);
interns.forEach((intern)=>{ genIntern(intern.getName()) });
// console.log(html);
// call function for each type

}

function genManagerHtml(employee){
    managerHTMLtext=`<div class="card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title"><img src="./management.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center"> Manager</a></h5>
      <p class="card-text">${employee}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: </li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`
  return  html.push(managerHTMLtext);
}
function genEngine(employee){
engineeringText =`
<div class="card" style="width: 18rem;">
            
<div class="card-body">
  <h5 class="card-title"><img src="./engineer.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center">Engineer</h5>
  <p class="card-text">${employee}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: </li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>
`
return  html.push(engineeringText);
}

function genIntern(employee){
    internText=`
    <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title"><img src="./student.png" alt="Bootstrap" width="30" height="30"class="d-inline-block align-text-center">Intern</h5>
              <p class="card-text">${employee}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: </li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
      </div>
    `
return html.push(internText);
}
module.exports= {initiateGenerator};