/*  **********************   BOM   *************** 

used to interact with the browser

**** Window  Object represents a window in browser (Default Object of Browser) ****

global javascript object, functions and variables with var keyword automataiclly becomes members of the window object

global variables are properties of the window object
global functions are methods of the window object
global objects are nested-objects of the window object

*/

// Variables Concept
var age = 19;
// let age = 19; --> will give undefined
console.log(window.age);


// Function Concept
function message() {
    console.log("Hello");
}
// message();
window.message();