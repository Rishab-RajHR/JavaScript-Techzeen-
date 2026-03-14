let result = document.getElementsByTagName('h1');
// console.log(result);
// result.innerHTML = "HI"; --> not working

// for accesing array we use loop
for(let i=0; i<result.length; i++) {
    result[i].innerHTML = "Alex";
}