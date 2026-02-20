/*
A loop is used for executing a block of statements repeatedly until a particular condition is satisfied:
1) while Loop:
    Syntax:
       while (condition) 
       {
             body of the loop         
       }
2) Do-While Loop:
    the body of do while loop is executed "once before the condition is checked".
       Syntax:
        do
        {
            body of Loop; 
        }
        while (condition);
3)For Loop:
        Syntax:
           for(intialization; condition; update)
           {
             body of-loop
           }
*/


// While Loop:

// let number = 0;

// while(number<=10)
// {
//     document.write(number);
//     number = number + 1;
//     number += 1;
//     number++;
// }

// number = 10;
// while(number>0)
// {
//     document.write(number);
//     number = number - 1;
//     number -= 1;
//     number--;
// }



// Do While Loop

// let message = 0;

// do{
//    document.write(`Hello ${message}`);
//    message++;
// }
// while (message<10);



// for loop

// for(let number = 0; number<10; number++)
// {
//     document.write("Hi ");
// }


// let sum = 0;

// for(let natural=1; natural<=100; natural++)
// {
//     sum += natural; // sum = sum  + natural
// }
// document.write("The Sum is: " + sum);


// let sum = 0;

// for(let natural=100; natural>=1; natural--)
// {
//     sum += natural; // sum = sum  + natural
// }
// document.write("The Sum is: " + sum);


// let sum = 0;
// let natural = 1;

// while(natural<=100)
// {
//     sum += natural; // sum = sum + natural
//     natural++;
// }
// document.write("The sum Is: " + sum);


let sum = 0;
let natural = 101;

do 
{
  sum += natural; // sum = sum + natural
  natural++;
} while (natural<=100);
document.write("The Sum Is: " + sum);