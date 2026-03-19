let parent = document.getElementById("items");
// let removedElement = parent.firstElementChild;
let removedElement = parent.firstElementChild.nextElementSibling;
// console.log(removedElement);
parent.removeChild(removedElement);


// directly removing the element
document.body.removeChild(parent);
