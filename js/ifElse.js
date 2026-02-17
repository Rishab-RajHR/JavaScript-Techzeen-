/*
Syntax of if and else:
if(condition){

}
else {
  
}


if Else if Ladder:

if(condition){

}
else if(condition){
  
}
else{
  
}



Ternary Operator:
variable (condiiton) ? (output if the value is true) : (output if the value is false)

Nullish Coalescing Operator:
syntax:
valueToCheck ?? defaultValue
*/ 

let number = 4;

// if(number>2){
//    document.write("Number is greater than 2");
// }
// else {
//  document.write("Number is less than 2");
// }


number = 8;

// nested if
// if(number > 3)
// {
//    if(number>7)
//    {
//       document.write("Number is greater than 3 and 7");
//    }
//    else{
//       document.write("Number is less than 7");
//    }
// }
// else {
//    document.write("Number is less than 3");
// }


// if else if ladder

// number = 0;

// if(number>0 && number<5)
// {
//    document.write("Number is positive");
// }
// else if(number == 0)
// {
//    document.write("Number is Zero");
// }
// else{
//   document.write("Number is Negative");
// }


// number = 8;

// if(number>0 && number<5)
// {
//    document.write("If condition");
// }
// else if(number>5 && number<7)
// {
//    document.write("Else if 1 condition");
// }
// else if(number>7 && number<9)
// {
//    document.write("Else if 2 condition");
// }
// else{
//   document.write("I am Else man");
// }



// Ternary Operator
// let result = 1; // 1->Pass 0->Fail

// let status = result == 1 ? "Pass" : "Fail";
// document.write(status);



// Nullish Operator

let firstName;
let defaultName = "Alex";

let result = firstName ?? defaultName;

document.write(result);


