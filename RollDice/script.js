let images = ["dice1.svg",
"dice2.svg",
"dice3.svg",
"dice4.svg",
"dice5.svg",
"dice6.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
       die.classList.add("shake");
    });
    setTimeout(function(){
       die.forEach(function(die){
          die.classList.remove("shake");
       });
       let dieOneValue = Math.floor(Math.random()*6);
       let dieTwoValue = Math.floor(Math.random()*6);
       console.log(dieOneValue,dieTwoValue);
    }, 1000);
}