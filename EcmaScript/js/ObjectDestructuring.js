let employee = {
   name : 'Alex',
   age : 21,
   dep : 'CS'
}

// Without Object Destructuring
// let name = employee.name;
// console.log(name)


// With Object Destructuring
// let {name, age, dep} = employee;

// console.log(name)
// console.log(age)
// console.log(dep)


// Change the variable name
// let {name : firstName, age, dep} = employee;
// console.log(firstName)


// Set to default
let {name, age=33, dep} = employee;
console.log(age);