// function add(a, b){
//    console.log(a+b);
// }
// add(2,5);

// rest parameter => makes the array 
function add(...args){
    let sum = 0;
    // console.log(args);
    for(let i=0; i<args.length; i++){
        sum += args[i];
    }
    console.log(sum);
}
add(2,3);
add(1,5,9);
add(4,8,5,9);
