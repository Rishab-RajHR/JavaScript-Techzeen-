// Initial References
let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

// Generate random Numbers between a given range
const randomNumber = (min, max) => 
      Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNumber(1, 10));