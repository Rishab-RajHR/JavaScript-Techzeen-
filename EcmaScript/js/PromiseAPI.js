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

p1.then((value) => {
    console.log(value);
})
p2.then((value) => {
    console.log(value);
})
p3.then((value) => {
    console.log(value);
})