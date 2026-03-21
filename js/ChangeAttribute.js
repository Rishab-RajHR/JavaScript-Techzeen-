let heading = document.getElementById("main");

// set name and value of an attribute
heading.setAttribute("class","heading-class");

// find the value of an attribute
let value = heading.getAttribute("class");
console.log(value);