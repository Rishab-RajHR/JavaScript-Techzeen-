let element = document.getElementById('me');
let heading = document.createElement("h1");

// how to add class and id
heading.className = "js course";
heading.id = "tillu_id";

// Append Text uinsg method
// let text = document.createTextNode("This is Create Append");
// heading.appendChild(text);

// Append Text using property
heading.textContent = "This is Robo Boys";
// element.appendChild(heading);

// Append on body tag
document.body.appendChild(heading);