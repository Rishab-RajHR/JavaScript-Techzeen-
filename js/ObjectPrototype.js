/*
 *************** Object Prototype ******************

 Prototypes are the mechanism by which JavaScript objects inherits features from one another

 if we want to add new properties and methods at a later point of time, and these properties need sharing across all the instances(objects), then the prototype will be very handy.
*/

let teacher = {
    id : 1,
    name : "Alex"
}
let student = {
    age : 18
}
// console.log(teacher.age); --> not working


// Object Prototype Concept

teacher.__proto__ = student;
console.log(teacher.age);
console.log(teacher);
console.log(student);