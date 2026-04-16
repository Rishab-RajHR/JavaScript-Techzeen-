// Without Map Function
// let arr = [10,30,50,70];
// let result = [];

// for(let i=0; i<arr.length; i++){
//       result[i] = arr[i]*2;
// }
// console.log(result);


// With the Help of Map Function
let arr = [10,30,50,70];

// Using anonymous Function
let result = arr.map(function(num){
     return num*3;
});
console.log(result);