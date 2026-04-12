let info = ["Alex", "JS", 21];

// console.log(info);

// let name = info[0];
// let fav = info[1];
// let age = info[2];



// Array Destructuring
// let [name, fav, age, extra] = info;

// console.log(name);
// console.log(fav);
// console.log(age);
// console.log(extra); // It will give undefined


// Nested Array Concept
// let info1 = ["Alex", "JS", 21, ['Pandain', 2026]];

// nested array destructuring
// let [name, fav, age, [channel, year]] = info1;

// console.log(name);
// console.log(fav);
// console.log(age);
// console.log(channel);
// console.log(year);



// Using function
// function details(){
   //....
//    return ["Alex", 21, "CS"];
// }

// let[name,age,dep] = details();

// console.log(name);
// console.log(age);
// console.log(dep);

// For default value

let info2 = ["Alex", "JS", 21];

// Array Destructuring
let [name, fav, age, extra="Extra Class"] = info2;

console.log(name);
console.log(fav);
console.log(age);
console.log(extra);