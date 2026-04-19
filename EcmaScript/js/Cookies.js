// If we want to store data in the browser that is called cookies
document.cookie = "item=phone"; // create cookie
document.cookie = "item=phone,headphone"; // update cookie


// read a cookie
let cocomo = document.cookie;

console.log(cocomo);

// delete a cookie
// If we want to delete the cookies we use the past date
document.cookie = "item=phone,headphones; expires=Thu, 20 March 2026 12:00:00 UTC";
