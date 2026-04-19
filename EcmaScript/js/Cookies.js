// If we want to store data in the browser that is called cookies
document.cookie = "item=phone"; // create cookie
document.cookie = "item=phone,headphone"; // update cookie


// read a cookie
let cocomo = document.cookie;

console.log(cocomo);

// delete a cookie
document.cookie = "item=phone,headphones; expires=Thu, 20 April 2026 12:00:00 UTC";
