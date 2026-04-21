let pr1 = new Promise((resolve, reject) => {
     console.log("Promise Is Pending....");
     setTimeout(()=>{
        // console.log("Promise is Fulfilled");
        resolve(true);
        // reject(new Error("I'm an Error"));
     }, 5000);
})

pr1.then((value) => {
    console.log(value);
})


let pr2 = new Promise((resolve, reject) => {
     console.log("Promise Is Pending....");
     setTimeout(()=>{
        // console.log("Promise is Fulfilled");
        reject(new Error("I'm an Error"));
     }, 5000);
})

console.log(pr1, pr2);