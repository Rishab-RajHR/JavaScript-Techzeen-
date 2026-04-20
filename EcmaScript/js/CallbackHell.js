//Synchronous Programming => sequential works (dependent Programming)
// console.log("First")
// console.log("Second")
// console.log("Third")

//Asynchronous Programming => It is not dependent on other statment (Independent Programming)
console.log("First")

setTimeout(() => {
    console.log("Second");
},3000)

console.log("Third")