/*
Hoisting In JavaScript => The Default behavior of moving all the declarations at the top of the scope before code execution.
*/

// greetings();

// function greetings(){
//      console.log("Good Night");
// }


// Variable --- Var

// var a;  // decalaration
// a = undefined

// a = 10;  // assignment / initialization

// console.log(a);

// var a;  // decalaration


// a = 7;
// console.log(a);

// var a;

// Declaration is hoisted assignment not


// Variable -- let (blocked scoped)
  // let b;
  // b = 2;
  // console.log(b);



// function expression --> Hoisting is not working
// var greet = function(){
//     console.log("first");
// }
// greet();




// function  show() {
    
//     age = 19;
//     console.log(age);
//     var age;
// }
// show();


// For giving the error don't use var because it is function scoped

// 'use strict';
// age = 18;
// console.log(age);



