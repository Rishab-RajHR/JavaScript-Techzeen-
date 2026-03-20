let parent = document.getElementById("items");

let newItem = document.createElement("li");
newItem.textContent = "Replace Element";

let replace = parent.firstElementChild;

parent.replaceChild(newItem, replace);