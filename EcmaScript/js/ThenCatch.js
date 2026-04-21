let pr1 = new Promise((resolve, reject) => {
     console.log("Promise Is Pending....");
     setTimeout(()=>{
        // console.log("Promise is Fulfilled");
        resolve(true);
        // reject(new Error("I'm an Error"));
     }, 5000);
})


let pr1 = new Promise((resolve, reject) => {
     console.log("Promise Is Pending....");
     setTimeout(()=>{
        // console.log("Promise is Fulfilled");
        reject(new Error("I'm an Error"));
     }, 5000);
})

console.log(pr1)