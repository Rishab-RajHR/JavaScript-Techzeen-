//************** Array Operations **********

let teams = ["India", "Australia", "China", "South Africa"];

// console.log(teams);
// console.log(teams.sort());
// console.log(teams.length);

// push() => Element will be added at last
// teams.push("England");
// console.log(teams);

// unshift() => Element will be added at starting
// teams.unshift("England");
// console.log(teams);


// pop() => Element will be removed from last
// teams.pop();
// console.log(teams);


// shift() => Element will be removed from starting
// teams.shift()
// console.log(teams);

// splice() => remove the element from middle
// teams.splice(2, 1);
// teams.splice(2, 2);
// console.log(teams);

// To Empty the Array
// teams = [];
// teams.length = 0;
// console.log(teams);


// let index = teams.indexOf("India");
// console.log(teams);
// console.log(index);


// Accessing the value that would be true or false if this is the Array
// let theam = "Australia";
// console.log(Array.isArray(theam));  // False



// Split the array element
// let message = "Hi I'm Alex Pandian and This is My Youtube Channel";

// let splitting = message.split(" ");
// console.log(splitting);



// Concatenation => joining the array
let arr1 = ["Alex", "Aman", "Bob"];
let arr2 = ["Ayesha", "Naveen", "Axar"];

let newArray = arr1.concat(arr2);
console.log(newArray);