let scoop1 = document.querySelector(".scoop1");
let scoop2 = document.querySelector(".scoop2");
let scoop3 = document.querySelector(".scoop3");

let btnScoop1 =  document.getElementById("btn-scoop1");
let btnScoop2 =  document.getElementById("btn-scoop2");
let btnScoop3 =  document.getElementById("btn-scoop3");
let btnTopping1 = document.getElementById("btn-topping1");
let btnTopping2 = document.getElementById("btn-topping2");

let colors = ["#f45c96", "#f8bd3d", "#badc58", "#5c0003", "#f58619", "#ebab70"];

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;


btnScoop1.addEventListener("click", () => {
    scoop1.style.backgroundColor = colors[counter1];
    counter1 = setCounterValue(counter1);
});