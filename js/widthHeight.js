let element = document.getElementById("box");

// In offsetWidth border is included
// Int clientWidth border is  not included

// let width = element.offsetWidth;
let width = element.clientWidth;
console.log(width);

// let height = element.offsetHeight;
let height = element.clientHeight;
console.log(height);