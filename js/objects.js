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
// First Name ----> Dot Notation
console.log(employee.firstName)