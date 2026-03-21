let heading = document.getElementById("main");

// set name and value of an attribute
heading.setAttribute("class","heading-class");

// find the value of an attribute
// let value = heading.getAttribute("class");
// console.log(value);

// For removing an attribute
// heading.removeAttribute("class");

// Check attribute in JavaScript
let result = heading.hasAttribute("name");
console.log(result);
