function greetings(){
     console.log("Good Morning!");
}

function add(num1, num2, call){
     console.log(num1 + num2);
     call();
}
// add(1,2);
add(1, 2, greetings);

