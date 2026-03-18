let list = document.getElementById("items");

let item = document.createElement("li");
item.textContent = "Item from DOM";

let position = list.firstElementChild;

list.insertBefore(item, position)
