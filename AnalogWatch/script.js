let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

let set_clock = setInterval(() => {
     let date_now = new Date();

     let hr = date_now.getHours();
     let min = date_now.getMinutes();
     let sec = date_now.getSeconds();

     console.log(hr,min,sec);
}, 1000);