let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#flip-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    console.log(i);
});