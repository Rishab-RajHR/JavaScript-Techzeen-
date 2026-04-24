let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 3000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 4000);
})

pt.then((value) => {
    console.log(value);
})