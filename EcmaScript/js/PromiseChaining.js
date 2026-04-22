let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log("Completed After 3 sec");
       resolve(true);
    }, 3000);
});
p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Promise 2 is resolve");
        }, 2000);
    });
    return p2;
}).then((value) => {
    console.log(value);
})