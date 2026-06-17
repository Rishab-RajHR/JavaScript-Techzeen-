let [milliseconds,seconds,minute,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');

document.getElementById('startTimer').addEventListener('click', ()=>{
    int = setInterval(displayTimer,10);
});

function displayTimer(){
     milliseconds+=10;
     if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
           seconds = 0;
        }
     }
}