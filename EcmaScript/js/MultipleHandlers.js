let p1 = new Promise((resolve,reject) => {
    console.log("Promise is not resolved");
    setTimeout(() => {
        resolve(1);
    }, 3000);
})

// Multiple Handlers are not dependent on each other they are independent
p1.then(() => {
    console.log("Promise is Resolved");
})
p1.then(() => {
    console.log("Successfully");
})

p1.then(() => {
    console.log("Promise");
})