let pr1 = new Promise((resolve, reject) => {
     console.log("Promise Is Pending....");
     setTimeout(()=>{
        console.log("Promise is Fulfilled");
        resolve(true);
     }, 5000);
})