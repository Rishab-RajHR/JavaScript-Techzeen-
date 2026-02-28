// Anonymous Function => A function does not have any name.
/*
Syntax:
   (function () {
      // block of code
   });
*/



// function greetings()
// {
//     console.log("Good Morning");
// }
// greetings();


// First Method to invoke anonymous function ---> Function Expression (assign function to a variable)

// let msg = (function ()
// {
//    console.log("Good Morning - Anonymous Function");
// });
// msg();



// Second Method to invoke anonymous function ---> Pass function as an argument to an another function

// setTimeout(functionName,timeInMilliSecs);

// setTimeout((function ()
// {
//       console.log("Good Morning - Anonymous Function - Using Set Time Out Function");
// }), 3000);



// Third Method to Invoke Anonymous Function ---> Immediately Invoke Method

// (function ()
// {
//     console.log("Me Anonymous Function");
// })();



(function ()
{
let message = "I am Insider Code";
function greetings()
{
    console.log(message);
}
greetings();
})();
