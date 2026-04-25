function say(){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("P1 Done!!");
        }, 3000);
    })
    console.log(p1);
}