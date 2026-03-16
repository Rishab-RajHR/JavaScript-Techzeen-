// let element = document.getElementById('me');
// console.log(element);
// let result = element.innerHTML;
// console.log(result);
// element.innerHTML = "<h1>Tovino Thomas</h1>"

let element = document.getElementsByClassName('you');
// console.log(element);
// let result = element.innerHTML; --> not working
// console.log(result);

// For accessing the array we use loops
for(let i=0; i<element.length; i++){
      let result = element[i].innerHTML;
      console.log(result);
}