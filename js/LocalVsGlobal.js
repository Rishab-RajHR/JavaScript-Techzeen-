// Global Variable ---> A variable which is "declared outside" of the function in a program and can be accessed by any of the functions.

// Local Variable ---> A variable which is "declared inside" a specific function and can only be accessed the function in which it is declared.

function display()
{
    let message = "Good Morning"; // Local Variable
    console.log(message);
}
display();




let text = "I am the Global Variable";

function show(){} // Global Variable


show();

console.log(text);