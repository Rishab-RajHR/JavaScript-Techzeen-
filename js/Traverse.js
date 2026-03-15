// Traversal can be done in single element querySelector and getElementById

// For Parent Elements
// let element = document.getElementById('me').parentElement;
// console.log(element);
// element.innerHTML = "Alex";  // remove all li and replace it with Alex
// let parentElement = element.parentElement;
// console.log(parentElement);



// For First and Last Child
// let element = document.getElementById('hi')
// console.log(element)
// let childElement = element.firstElementChild;
// let childElement = element.lastElementChild;
// console.log(childElement)



// For Children Elements
// let element = document.getElementById('hi')
// let children = element.children;
// console.log(children);


// For accessing Siblings
// let element = document.getElementById('me');
// let previousElement = element.previousElementSibling;
// console.log(previousElement);
// let nextElement = element.nextElementSibling;
// console.log(nextElement);



// By using querySelector returns single element
let element = document.querySelector('li.you')
let parentElement = element.parentElement;
console.log(parentElement);