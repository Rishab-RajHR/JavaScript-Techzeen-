/*
 Objects In JavaScript

 An Entity having state and behaviour. (properties and methods)
 e.g:
 car,pen,laptop,employee

 How to model a problem in Objects:
 Noun--> Object ---> Employee
 Adjective---> Properties(Attributes) --> empName, empAge, empSalary...
 Verb---> Method(Behaviour or Action) --> sayHello()...
*/

let employee = {
    firstName: 'Alex',
    lastName: 'Pandian',
    age: 22
};
console.log(employee);
// Two Methods to access an object properties
// First Method ----> Dot Notation
// console.log(employee.firstName)

// Second Method ----> Array Notation
// console.log(employee['age']);


// Return undefined if the property does not exist
// console.log(employee.salary);


// Add a property in existing object
employee.salary = 50000;
console.log(employee);
console.log(employee.salary);

