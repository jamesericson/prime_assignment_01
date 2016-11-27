console.log( 'js sourced' );

var employees = [];

var addEmployee = function(firstName, idNum, lastName, salary, title){
  console.log("in addEmployee: " + firstName,lastName,idNum,title,salary );
  var newEmployee = {
    firstName: firstName,
    idNum: idNum,
    lastName: lastName,
    salary: salary,
    title: title
  };
  employees.push(newEmployee);
};// end of addToInventory

var newEmployee = function(){
  console.log("in newEmployee()");
  var firstName = document.getElementById( 'firstName' ).value;
  console.log("firstName: " + firstName);
  var idNum = document.getElementById( 'employeeId' ).value;
  console.log("idNum: " + idNum);
  var lastName = document.getElementById( 'lastName' ).value;
  console.log("lastName: " + lastName);
  var salary = document.getElementById( 'annualSalary' ).value;
  console.log("salary: " + salary);
  var title = document.getElementById( 'jobTitle' ).value;
  console.log("title: " + title);

  $('input').val('');

  addEmployee(firstName, idNum, lastName, salary, title);
  displayAllEmployees();
  var toHTML = "<p>Just added employee: " +firstName+ " " +lastName+ "</p>";
  document.getElementById( 'newlyAdded' ).innerHTML = toHTML;

  return false;
}

var displayTotalSalary = function(){
  var toHTML = "";
  var totalSalary = 0;
  for (var i = 0; i < employees.length; i++) {
    console.log("this is a salary: " + Number(employees[i].salary));
    totalSalary += Number(employees[i].salary);
  }
  console.log("this is the totalSalary: " + totalSalary);
  toHTML = "<h3> = $" + totalSalary+"</h3>";
  document.getElementById( 'totalSalary' ).innerHTML = toHTML;
};

var displayAllEmployees = function() {

  var table = document.getElementById("employeeTable");
  var htmlString = "<table><tr><th>Name</th><th>ID #</th><th>Title</th><th>Salary</th></tr>";
  for (var i = 0; i < employees.length; i++) {

    htmlString += "<tr> <td>" + employees[i].firstName+" "+employees[i].lastName+"</td>";
    //htmlString += "<td>" + employees[i].lastName + "</td>";
    htmlString += "<td>" + employees[i].idNum + "</td>";
    htmlString += "<td>" + employees[i].title + "</td>";
    htmlString += "<td>" + employees[i].salary + "</td> </tr>";
  }
  htmlString += "</table>";
  console.log(htmlString);
  document.getElementById( 'allEmployeeTable' ).innerHTML = htmlString;

  displayTotalSalary();
};

addEmployee( "James", "9388", "Ericson", "42000", "Developer");
addEmployee( "Beth", "9925", "Ritchie", "78000", "Therepist");
addEmployee( "Nate", "7311", "Eiesland", "61000", "Enviroment Cordinator");
addEmployee( "Aliss", "54002", "Ricci", "63000", "Creative Director");
addEmployee( "Mark", "2587", "Ritchie", "125000", "Boss");

displayAllEmployees();
