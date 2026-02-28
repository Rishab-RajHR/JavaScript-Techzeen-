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
   console.log(text);

show();
//  console.log(text); => accessed outside and inside both




// Global variable is block scoped  means cannot be redeclare

// Local variable is function scoped means we can redeclare

function add()
{
    let message = "I am the second local variable"; // local variable
    console.log(message);
}
add();