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

// console.log(employee);
// console.log(employee.salary);

//Update a property
employee.age = 23;
console.log(employee.age);

// Delete a property
// delete employee.lastName;
// console.log(lastName);


// Check whether a property exist or not

// console.log(employee.department);

// Second Method -> in keyword
// console.log('department' in employee); // false


// Traverse properties of an object
// for in loop
// for(let key in employee)
// {
    // console.log(key);
    // console.log(key +": " + employee.key); --> return undefined
    // console.log(key +": " + employee[key]); 
// }



// Object Methods
// Four ways to define a method in objects
// First Method

employee.greetings = function () {
    console.log("Hello from First Method");
}
// greetings(); --->error
// employee.greetings();

// Second Method:
function hello() 
{
    console.log("Hello From Second Method");
}
// employee.greetings = hello;
// employee.greetings();


// Third  Method:
let hero = {
     firstName : "Alex",
     lastName : "Pandian",
     age : 22,
     greet : function (){
          console.log("Hello from Third Method");
     }
};
hero.greet();


// Fourth Method:

let Bob = {
    firstName : 'Tovino',
    lastName : 'Thomas',
    age : 22,
    greete () {
        console.log("Hello from fourth Method");
    }
};
Bob.greete();
