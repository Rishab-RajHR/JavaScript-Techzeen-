let employee = {
   name : 'Alex',
   age : 21,
   dep : 'CS'
}

// Without Object Destructuring
// let name = employee.name;
// console.log(name)


// With Object Destructuring
let {name, age, dep} = employee;

console.log(name)
console.log(age)
console.log(dep)