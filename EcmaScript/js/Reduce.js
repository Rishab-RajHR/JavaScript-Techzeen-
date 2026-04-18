let arr = [1,2,3,4,5];

// using arrow function
// let result = arr.reduce((val1, val2) => val1 + val2);

// using anonymous function
let result = arr.reduce(function(val1, val2){
     return val1 + val2;
})

console.log(result);  // 3 , 6 , 10, 15