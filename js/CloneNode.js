let parent = document.getElementById("items");

// true will clone the items
let clonedElement = parent.cloneNode(true);

// console.log(clonedElement);

clonedElement.id = "my-id";
document.body.appendChild(clonedElement);