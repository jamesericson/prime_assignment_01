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
  };//end array
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
  document.getElementById( 'newlyRemoved' ).innerHTML = "";
  return false;
}// end newEmployee

var removeEmployee = function(){
  var index = -1;

  var firstName = document.getElementById( 'firstNameRM' ).value;
  console.log("remove firstName: " + firstName);
  var idNum = document.getElementById( 'employeeIdRM' ).value;
  console.log("remove idNum: " + idNum);
  var lastName = document.getElementById( 'lastNameRM' ).value;
  console.log("remove lastName: " + lastName);

  document.getElementById( 'newlyAdded' ).innerHTML = "";
  $('input').val('');

  //below logic finds the matching employee by either idNum or first&last name and weeds out no matches and incorrect inputs (blank)
  if (idNum == ""){
    //identify the employee, by finding a match
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].firstName == firstName && employees[i].lastName == lastName){
        index = i;
        idNum = employees[i].idNum;
      }// end nested if
    } //end for
  } else {
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].idNum == idNum){
        index = i;
        firstName = employees[i].firstName;
        lastName = employees[i].lastName;
      }// end nested if
    } //end for
  }// end if/else
  console.log("removing employee ID #: "+ idNum + " at this index: " + index);
  if (index == -1){
    document.getElementById( 'newlyRemoved' ).innerHTML = "<p>no matching employees</p>";
    return false;
  } else {
      var removed = employees.splice(index, 1);
  }//end if/else
  console.log(removed);


  displayAllEmployees();
  var toHTML = "<p>Just removed employee: " +firstName+ " " +lastName+ "</p>";
  document.getElementById( 'newlyRemoved' ).innerHTML = toHTML;
  return false;
}// end removeEmployee

var displayTotalSalary = function(){
  var toHTML = "";
  var totalSalary = 0;
  for (var i = 0; i < employees.length; i++) {
    console.log("adding this is a salary: " + Number(employees[i].salary));
    totalSalary += Number(employees[i].salary);
  }
  console.log("this is the total'yearly'Salary(still need to divide by 12): " + totalSalary);
  totalSalary = Math.round(totalSalary/12);
  toHTML = "<h3> = $" + totalSalary+"</h3>";
  document.getElementById( 'totalSalary' ).innerHTML = toHTML;
};// end displayTotalSalary

var displayAllEmployees = function() {
  //creates a table with all of the employees 
  var htmlString = "<table><tr><th>Name</th><th>ID #</th><th>Title</th><th>Salary</th></tr>";
  for (var i = 0; i < employees.length; i++) {

    htmlString += "<tr> <td>" + employees[i].firstName+" "+employees[i].lastName+"</td>";
    //htmlString += "<td>" + employees[i].lastName + "</td>";
    htmlString += "<td>" + employees[i].idNum + "</td>";
    htmlString += "<td>" + employees[i].title + "</td>";
    htmlString += "<td>$" + employees[i].salary + "</td> </tr>";
  }
  htmlString += "</table>";
  document.getElementById( 'allEmployeeTable' ).innerHTML = htmlString;

  displayTotalSalary();
};// end displayAllEmployees


// bellow is some arbitrary names to give example of how an employer would have existing employees loaded with the page
addEmployee( "James", "9388", "Ericson", "42000", "Developer");
addEmployee( "Beth", "9925", "Ritchie", "78000", "Therapist");
addEmployee( "Nate", "7311", "Eiesland", "61000", "Enviroment Director");
addEmployee( "Aliss", "54002", "Ricci", "63000", "Creative Cordinator");
addEmployee( "Mark", "2587", "Ritchie", "125000", "Boss");
// call funtion to show the employee table from employees array when the page is loaded
displayAllEmployees();
