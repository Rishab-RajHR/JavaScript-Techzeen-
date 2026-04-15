// Normal Function 
// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3);


// Arrow Function
// let sum = (a,b) => {
//     console.log(a+b);
// }
// sum(2,3);

// Another shortform of Arrow Function
// let sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(2,4));

// Another shortform of Arrow Function

// let sum = (a,b) => a+b;

// console.log(sum(2,4));


// When one parameter 

// function double(a){
//    return a*a;
// }
// console.log(double(3));


// Arrow Function with one parameter remove the parenthesis

// let double = a => a*a;
// console.log(double(4));


// When there is no parameter
// function greetings(){
//     console.log("Hi")
// }
// greetings();



// Arrow Function with no parameter remove the parenthesis
// let greetings = () => console.log("Good Morning");
// greetings();



// Anonymous Function 
// let a = function(){
//     console.log("Welcome");
// }
// a();


// Arrow Function with Anonymous Function
// let a = () => console.log("Good Night");
// a();


// document.addEventListener("click", function(){
//      console.log("Alex")
// })

// Arrow Function with Anonymous Function
document.addEventListener('click', () => console.log("Alex"));