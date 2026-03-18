// let list = document.getElementById("items");

// let item = document.createElement("li");
// item.textContent = "Item from DOM";

// let position = list.firstElementChild;
// let position = list.firstElementChild.nextElementSibling;

// list.insertBefore(item, position)


let element = document.body;   // parent selected

let newElement = document.createElement("h1");
newElement.textContent = "RishabZeen";

// element.appendChild(newElement);

let list = document.getElementById('items');

element.insertBefore(newElement, list);
