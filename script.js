/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr
  .map((employee) => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((employee) => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  arr = arr.filter((employee) => employee.profession !== 'admin');
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  const newEmployees = [
    {id:4,name:"aryan",age:"22",profession:"intern"},
    {id:5,name:"bob",age:"21",profession:"developer"},
    {id:6,name:"kate",age:"22",profession:"admin"}
  ];
  const combinedEmployees = arr.concat(newEmployees);
  console.log(combinedEmployees);
}
